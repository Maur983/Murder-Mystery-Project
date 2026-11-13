import { useState } from 'react'
import { Link } from 'react-router'
import prologueRoom from '../../assets/placeholder prologue room.png'
import ClueObject from '../ClueObject.jsx'
import DialogueBox from '../DialogueBox.jsx'

function Room1() {
  return (
    <main className="prologue">
      <h1>Room1 Placeholder</h1>
      <Link to="/Prologue">Go back to the previous room</Link>
    </main>
  )
}

export default Room1