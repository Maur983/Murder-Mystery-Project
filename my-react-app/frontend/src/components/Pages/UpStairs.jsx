import { useState } from 'react'
import { Link } from 'react-router'
import prologueRoom from '../../assets/placeholder prologue room.png'
import ClueObject from '../ClueObject.jsx'
import DialogueBox from '../DialogueBox.jsx'

function Upstairs() {
  return (
    <main className="prologue">
      <h1>Upstairs Placeholder</h1>
      <Link to="/Prologue">Go back to Downstairs</Link>
    </main>
  )
}

export default Upstairs