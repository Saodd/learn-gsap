import * as React from 'react';
import gsap from 'gsap'
import styles from './index.scss'

export function App(): JSX.Element {
    const boxRef = React.useRef();

    React.useEffect(() => {
        gsap.to(boxRef.current, {
            duration: 5,
            rotation: "+=360",
        });
    });

    return (
        <div className={styles.App}>
            <div className={styles.box} ref={boxRef}>Hello</div>
        </div>
    );
}
