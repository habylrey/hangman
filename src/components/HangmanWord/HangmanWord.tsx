import classes from './HangmanWord.module.css'
type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
}
export function HangmanWord({wordToGuess, guessedLetters}:HangmanWordProps) {
    return (
        <div className={classes.wrapper}>{wordToGuess.split('').map((letter, index)=>(
            <span className={classes.letters} key={index}><span className={!guessedLetters.includes(letter) ? classes.lettersVisible : ''}>{letter}</span></span>
        ))}</div>
    )
}