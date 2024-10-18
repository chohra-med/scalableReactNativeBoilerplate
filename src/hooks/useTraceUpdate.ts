
// This function is used for debugging purpose to check why a component did render
// It will help us to see all the changes that has been made to the props of a component, 
// that forces the rerender of the component.

/**
 * @param props: the component props
 * @returns void
 * @description: This function is used for debugging purpose to check why a component did render
 * @usage: useTraceUpdate(props)
 *	const Component = (props) => {
 *
 *	useTraceUpdate(props)
 *return <>...</>}
 *
 */

import { useEffect, useRef } from 'react'

//  @ts-ignore-next-line
const useTraceUpdate = (props: any): void => {
    const prev = useRef(props)
    useEffect(() => {
        const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
            if (prev.current[k] !== v) {
                // @ts-ignore
                ps[k] = [prev.current[k], v]
            }

            return ps
        }, {})

        if (Object.keys(changedProps).length > 0) {
            // eslint-disable-next-line no-console
            console.log('Changed props:', changedProps)
        }

        prev.current = props
    })
}

export default useTraceUpdate
