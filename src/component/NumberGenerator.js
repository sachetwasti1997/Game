import {useSpring, animated} from "react-spring";

export const NumberGenerator = ({n}) => {
    const { number } = useSpring({
        from: {number: 0},
        to: n,
        delay: 200,
        config: { mass: 1, tension: 15, friction: 5 }
    })
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}
