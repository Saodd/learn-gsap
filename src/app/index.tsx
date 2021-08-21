import * as React from 'react';
import gsap from 'gsap'
import styles from './index.scss'


export function App(): JSX.Element {
    const objRef = React.useRef({count: 0});
    React.useEffect(() => {
        gsap.to(objRef.current, {
            count: 200,
            duration: 1,
            onUpdate: () => {
                console.log(objRef.current.count)
            }
        })
    }, [])

    const [, setRefresh] = React.useState(0)
    const refresh = React.useCallback(() => {
        setRefresh(Date.now())
    }, [])

    return (
        <div className={styles.App}>
            <button onClick={refresh}>render</button>
            <div className={styles.box}>{objRef.current.count}</div>
        </div>
    );
}
