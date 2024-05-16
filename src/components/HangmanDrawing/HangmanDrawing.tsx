import classes from './HangmanDrawing.module.css'
const HEAD = (
    <div key='1' className={classes.head}></div>
)
const BODY = (
    <div key='2' className={classes.body}></div>
)
const RIGHT_ARM = (
    <div key='3' className={classes.rightArm}></div>
)
const LEFT_ARM = (
    <div key='4' className={classes.leftArm}></div>
)
const RIGHT_LEG = (
    <div key='5' className={classes.rightLeg}></div>
)
const LEFT_LEG = (
    <div key='6' className={classes.leftLeg}></div>
)
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
type HangmanDrawingProps ={
    numberOfGuesses: number
}
export function HangmanDrawing({numberOfGuesses}:HangmanDrawingProps) {
return (
    <div className={classes.wrapper}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className={classes.verticalLine_xs}></div>
        <div className={classes.topLine}></div>
        <div className={classes.verticalLine}></div>
        <div className={classes.bottomLine}></div>
    </div>
)
}