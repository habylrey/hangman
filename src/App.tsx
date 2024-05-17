import { useState, useEffect, useCallback } from 'react'
import { HangmanDrawing } from './components/HangmanDrawing/HangmanDrawing'
import { HangmanWord } from './components/HangmanWord/HangmanWord'
import { Keyboard } from './components/Keyboard/Keyboard'
import './App.css'
import words from './assets/data/wordList.json'
import { HangmanModal } from './components/HangmanModal/HangmanModal'

function App() {
  const [wordToGuess, setWordToGuess] = useState(()=>{
    return words[Math.floor(Math.random() * words.length)]
  })
	const [modal, setModal] = useState(true);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split('').every(letter=> guessedLetters.includes(letter))
  const addGuessedLetter = useCallback((letter:string)=>{
    if (guessedLetters.includes(letter)) return
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  
  }, [guessedLetters])
  function newGame () {
    setModal(false)
    setWordToGuess(()=>{
      return words[Math.floor(Math.random() * words.length)]
    })
    setGuessedLetters([])
  }
  useEffect(()=>{
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[[A-Za-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)

    }
    isLoser  ? setModal(true) : ''
    isWinner ? setModal(true) : ''
    document.addEventListener('keypress', handler)
    return ()=>{
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])
  return (
    <div className='container' >
      <HangmanModal visible={modal} setVisible={setModal}> 
      <div className='modalScreen'>
        <h1 onClick={window.location.reload}>It a Hangman game!</h1>
        <button onClick={()=> newGame()} className='modalScreen_button'>Play</button>
      </div>
      </HangmanModal>
      <div className='playground'>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
        <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      </div>
      <div className='keyboardWrap'>
        <Keyboard activeLetters = {guessedLetters.filter(letter=>wordToGuess.includes(letter))} inactiveLetters={incorrectLetters} addGuessedLetter={addGuessedLetter}/>
      </div>
    </div>
  )
}

export default App
