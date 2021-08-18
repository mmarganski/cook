import { useState } from 'react'
import { VoidFunction } from '../types'

export const useFetch = <T>() => {
    const [isLoading, setLoading] = useState<boolean>(false)
    const [hasError, setError] = useState<boolean>(false)

    const fetchData = (
        url: string,
        onSuccess: (data: T) => void,
        onFailure: VoidFunction
    ) => {
        if (url === '') {
            return null
        }

        setLoading(true)
        setError(false)

        fetch(url)
            .then(response => response.json())
            .then(response => {
                setLoading(false)
                if (response?.code && response.code >= 300 || response.code < 200) {
                    throw new Error(response.code)
                }

                onSuccess(response)
            })
            .catch(() => {
                setLoading(false)
                setError(true)
                onFailure()
            })
    }

    return {
        fetchData,
        isLoading,
        hasError
    }
}
