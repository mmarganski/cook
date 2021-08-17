import { useState } from 'react'

export const useFetch = <T>() => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const fetchData = (
        url: string,
        onSuccess: (data: T) => void,
        onFailure: () => void
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
        loading,
        error
    }
}
