import * as React from 'react';
import gsap from 'gsap'
import styles from './index.scss'


export function App(): JSX.Element {
    const ref1 = React.useRef();
    const ref2 = React.useRef();
    const ref3 = React.useRef();
    const ref4 = React.useRef();
    const tl = React.useRef<gsap.core.Timeline>()

    React.useEffect(() => {
        tl.current = gsap.timeline({repeat: -1, repeatDelay: 1})
            .to(ref1.current, {duration: 1, x: 200})
            .from(ref2.current, {duration: 1, x: 200, scale: 0.2}, "+=1")  // 在上一个动画之后+1秒才开始
            .addLabel("LabeHAHAHA")
            .to(ref3.current, {duration: 1, x: 200, scale: 2, y: 20}, "LabeHAHAHA")
            .to(ref4.current, {duration: 1, x: 200, rotation: 360}, "LabeHAHAHA");
    }, []);

    return (
        <div className={styles.App}>
            <div className={styles.box} ref={ref1}>Box1</div>
            <div className={styles.box} ref={ref2}>Box2</div>
            <div className={styles.box} ref={ref3}>Box3</div>
            <div className={styles.box} ref={ref4}>Box4</div>
        </div>
    );
}
