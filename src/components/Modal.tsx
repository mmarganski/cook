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

    const { fetchData, loading, error } = useFetch()
    const [instructions, setInstructions] = useState('')
    const [sourceUrl, setSourceUrl] = useState('')

    useEffect(() => {
        loadData(url)
    }, [url])

    const loadData = async (url: string) => {
        const data: ApiRecipeDetails = await fetchData(url)

        if (data) {
            setInstructions(data.instructions || 'instructions not found for this recipe')
            setSourceUrl(data.sourceUrl)
        }
    }

    const renderRecipes = () => {
        if (loading) {
            return(
                <Message text="loading"/>
            )
        }

        if (error) {
            return(
                <Message text="failed to load recipe instructions"/>
            )
        }

        return(
            <div dangerouslySetInnerHTML={{ __html: instructions }} />
        )
    }

    return !isActive
        ? null
        : (
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
  margin: 0 20% 20% 20%
`
