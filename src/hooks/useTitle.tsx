import { useEffect } from 'react'
import { createSharedStateHook } from 'reactjs-library'

const initialState = ''

const useTitleSharedState = createSharedStateHook<string>(initialState)

const useTitle = (newState?: string): [ string, (newState: string) => void ] => {
    const [ title, setTitle ] = useTitleSharedState()

    useEffect(() => {
        if (newState) {
            setTitle(newState)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ newState ])

    useEffect(() => {
        window.document.title = title

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ title ])

    return [ title, setTitle ]
}

export default useTitle
