import * as React from 'react';
import gsap from 'gsap'
import styles from './index.scss'


function Box(props: { children: React.ReactNode }) {
    const {children} = props
    return <div className={styles.box}>{children}</div>;
}

function Container() {
    return <div><Box>Nested Box</Box></div>;
}


export function App(): JSX.Element {
    const appRef = React.useRef();
    const q = gsap.utils.selector(appRef)

    React.useEffect(() => {
        gsap.to(q("." + styles.box), {
            x: 100,
            stagger: 0.33,
            repeat: -1,
            repeatDelay: 1,
            yoyo: true
        });
    });

    return (
        <div className={styles.App} ref={appRef}>
            <Box>Box1</Box>
            <Container/>
            <Box>Box2</Box>
        </div>
    );
}
