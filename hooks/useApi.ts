import { useCallback, useState } from 'react'

interface UseApiResult<T> {
  data: T | null
  error: any
  loading: boolean
  callApi: (...args: any[]) => Promise<T | void>
}

/**
 * useApi - A hook for API calls with loading and error handling
 * @param apiCallFn - A function that returns a promise (usually an API call)
 */
export function useApi<T = any>(
  apiCallFn: (...args: any[]) => Promise<T>
): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const callApi = useCallback(
    async (...args: any[]) => {
      setLoading(true)
      setError(null)
      try {
        const result = await apiCallFn(...args)
        setData(result)
        return result
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    },
    [apiCallFn]
  )

  return { data, error, loading, callApi }
}

// Example usage:
// const { data, error, loading, callApi } = useApi(() => api.get('/endpoint'));
// useEffect(() => { callApi(); }, []);
