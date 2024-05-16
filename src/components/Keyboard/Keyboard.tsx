import classes from './Keyboard.module.css'
const KEYS = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
type KeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter : string) => void
}
export function Keyboard({activeLetters, inactiveLetters, addGuessedLetter}:KeyboardProps) {
    return (
        <div className={classes.wrapper}>
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <button onClick={()=>addGuessedLetter(key)} className={`${classes.letter} ${isInactive ? classes.inactive : ''} ${isActive ? classes.active : ''}`} disabled={isInactive||isActive} key={key}>{key}</button>
                )
            })}
        </div>
    )
}