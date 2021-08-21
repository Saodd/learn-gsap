import * as React from 'react';
import gsap from 'gsap'
import styles from './index.scss'


export function App(): JSX.Element {
    const appRef = React.useRef();
    const q = gsap.utils.selector(appRef)

    // 此处改为useEffect即可观察到闪烁。
    React.useLayoutEffect(() => {
        const animation1 = gsap.fromTo(q('.' + styles.box), {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1,
            stagger: 0.2,
        })
        return () => {
            animation1.kill()
        }
    }, [])

    return (
        <div className={styles.App} ref={appRef}>
            <div className={styles.box}>Box1</div>
            <div className={styles.box}>Box2</div>
            <div className={styles.box}>Box3</div>
        </div>
    );
}
