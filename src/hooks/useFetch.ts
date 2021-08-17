import { useState } from 'react'

export const useFetch = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const fetchData = (url: string) => {
        if (url === '') {
            return null
        }

        setLoading(true)
        setError(false)

        return fetch(url)
            .then(response => response.json())
            .then(response => {
                setLoading(false)
                if (response?.code && response.code !==200) {
                    throw new Error(response.code)
                }

                return response
            })
            .catch(() => {
                setLoading(false)
                setError(true)
            })
    }

    return {
        fetchData,
        loading,
        error
    }
}
