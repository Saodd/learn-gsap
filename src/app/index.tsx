import * as React from 'react';
import gsap from 'gsap'
import styles from './index.scss'


export function App(): JSX.Element {
    const appRef = React.useRef();
    const q = gsap.utils.selector(appRef)

    const tlRef = React.useRef<gsap.core.Timeline>();

    React.useEffect(() => {
        tlRef.current = gsap.timeline()
            .to(q("." + styles.box), {
                scale: 1.5,
            })
    }, []);
    const handleEnter = React.useCallback(() => {
        tlRef.current.reversed(true)
    }, [])
    const handleLeave = React.useCallback(() => {
        tlRef.current.reversed(false)
    }, [])

    return (
        <div className={styles.App} ref={appRef} >
            <div className={styles.box} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Box</div>
        </div>
    );
}
