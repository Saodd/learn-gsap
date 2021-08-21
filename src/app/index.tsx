import * as React from 'react';
import gsap from 'gsap'
import styles from './index.scss'


export function App(): JSX.Element {
    const appRef = React.useRef();
    const q = gsap.utils.selector(appRef)

    const handleEnter = React.useCallback(() => {
        gsap.to(q("." + styles.box), {
            scale: 1.5,
        })
    }, [])
    const handleLeave = React.useCallback(() => {
        gsap.to(q("." + styles.box), {
            scale: 1,
        })
    }, [])

    return (
        <div className={styles.App} ref={appRef}>
            <div className={styles.box} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Box</div>
        </div>
    );
}
