import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Message } from './Message'
import { useFetch } from '../hooks'
import { ApiRecipeDetails } from '../types'

type ModalProps = {
    isActive: boolean,
    url: string,
    onClose(): void
}

export const Modal: React.FunctionComponent<ModalProps> = ({
    isActive,
    url,
    onClose
}) => {
    const { fetchData, isLoading, hasError } = useFetch<ApiRecipeDetails>()
    const [instructions, setInstructions] = useState('')
    const [sourceUrl, setSourceUrl] = useState('')

    useEffect(() => {
        fetchData(url, onDataLoaded, onLoadingError)
    }, [url])

    const onDataLoaded = (data: ApiRecipeDetails) => {
        setInstructions(data.instructions || 'instructions not found for this recipe')
        setSourceUrl(data.sourceUrl)
    }

    const onLoadingError = () => {
        // additional error handling may be implemented later
    }

    const renderRecipes = () => {
        if (isLoading) {
            return(
                <Message text="loading"/>
            )
        }

        if (hasError) {
            return(
                <Message text="failed to load recipe instructions"/>
            )
        }

        return(
            <StyledText dangerouslySetInnerHTML={{ __html: instructions }} />
        )
    }

    return isActive
        ? (
            <>
                <Overlay onClick={onClose}/>
                <Wrapper>
                    {renderRecipes()}
                    <a
                        href={sourceUrl}
                        target="_blank"
                    >
                        recipe source
                    </a>
                </Wrapper>
            </>
        )
        : null
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`

const Wrapper = styled.div`
  position: fixed;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background-color: white;
  z-index: 1000;
  margin: 20%
`

const StyledText = styled.div`
  font-size: 18px;
  font-family: Helvetica, monospace;
  margin-bottom: 10px;
`
