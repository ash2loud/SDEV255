import React from "react"
import { useEffect, useReducer } from "react"
import './App.css';
import peter from "./images/peter.png";

function Header({name, year}) {
  return (
    <header>
      <h1> {name}'s meme locker </h1>
      <p>copyright {year}</p>
    </header>
  )
}

const memes = [
  "6 7",
  "fish",
  "mango",
  "mustard",
  "yapdollar",
  "subway surfers",
  "my mother ate fries"
]

const memeObjects = memes.map((meme, i) => ({
  id: i,
  title: meme
}));
console.log(memeObjects)

function Main({memes, openStatus}) {
  return(
    <>
     <div> 
      <h2>these are meme s</h2>
    </div>
    <main>
      <img src={peter} height={200} alt="peter griffin from fortnite"/>
      <ul>
      {memes.map((meme) => (
        <li key={meme.id} style={{listStyleType: "none"}}>
          {meme.title}
        </li>
        ))}
    </ul>
    </main>
    </>
  )
}


function App() {
  const [status, toggle] = useReducer ((status) => !status, true);

  useEffect(() => {
    console.log(`my mother ate ${status ? "fries" : "mangos" }`)
  })

  return (
    <div>
      <h1>
        my mother ate {status ? "fries" : "mangos"}
      </h1>
      <button onClick={toggle}>
        change brainrot
      </button>
    <Header 
    name="ash" 
    year={new Date().getFullYear()}
    />
    <Main 
    memes={memeObjects} 
    openStatus={status}
    onStatus = {toggle} 
    />
    </div>
  )
}

export default App
