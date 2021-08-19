import React from 'react'
import styled from 'styled-components'
import { useStore } from 'outstated'
import { LanguageNames } from '../languages'
import { useLanguageStore } from '../stores'

export const LanguageSelector: React.FunctionComponent = () => {
    const { currentLanguage, setLanguage } = useStore(useLanguageStore)

    return(
        <Select
            onChange={event => setLanguage(event.target.value as LanguageNames)}
            value={currentLanguage}
        >
            {Object.values(LanguageNames).map(language => (
                <option
                    key={language}
                    value={language}
                >
                    {language}
                </option>
            ))}
        </Select>
    )
}

const Select = styled.select`
  position: absolute;
  top: 20px;
  right: 25px;
`
