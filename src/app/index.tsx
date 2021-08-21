import * as React from 'react';
import gsap from 'gsap'
import styles from './index.scss'


export function App(): JSX.Element {
    const appRef = React.useRef();
    const q = gsap.utils.selector(appRef)

    const tlRef = React.useRef<gsap.core.Timeline>();
    const [reversed, setReversed] = React.useState(false);

    React.useEffect(() => {
        tlRef.current = gsap.timeline()
            .to(q("." + styles.box), {
                rotate: 360,
            })
            .to(q("." + styles.circle), {
                x: 100,
            })
    }, []);
    React.useEffect(() => {
        tlRef.current.reversed(reversed);
    }, [reversed]);

    return (
        <div className={styles.App} ref={appRef}>
            <button onClick={() => setReversed(!reversed)}>点击我</button>
            <div className={styles.box}>Box</div>
            <div className={styles.circle}>Circle</div>
        </div>
    );
}
