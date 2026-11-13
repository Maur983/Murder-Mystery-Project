import { useState } from 'react'
import prologueRoom from '../../assets/placeholder prologue room.png'
import ClueObject from '../ClueObject.jsx'
import DialogueBox from '../DialogueBox.jsx'
import { Link } from 'react-router'

const dialogue = [
  'TBD 1',
  'TBD 2',
  'TBD 3' // Can add more here if prologue needs more dialogue 
]

function Prologue() {
  const [dialogueIndex, setDialogueIndex] = useState(0)
  const [discoveredClues, setDiscoveredClues] = useState([])

  const toggleClue = (clue) => {
    setDiscoveredClues((discovered) =>
      discovered.includes(clue)
        ? discovered.filter((discoveredClue) => discoveredClue !== clue)
        : [...discovered, clue]
    )
  }

  const advanceDialogue = () => {
    setDialogueIndex((index) => (index + 1) % dialogue.length)
  }

  return (
    <main className="prologue">
      <header className="prologue__heading">
        <p className="prologue__eyebrow">CSE 3150 Team 2</p>
        <h1>Murder Mystery Game</h1>
        <p className="prologue__intro">
          Hunt or be hunted. Find out who is murdering those close to you.
        </p>
      </header>

      <section className="mystery-room" aria-label="study">
        <img
          className="mystery-room__artwork"
          src={prologueRoom}
          alt="A dark, blue-lit manor interior with a staircase and a shattered doorway"
        />
        <p className="mystery-room__caption">Prologue room</p>
        <ClueObject
          label="Broken window"
          description="Looks like there was a struggle"
          x={32}
          y={62}
          discovered={discoveredClues.includes('letter')}
          onClick={() => toggleClue('letter')}
        />
        <ClueObject
          label="Crooked Painting"
          description="spooky"
          x={58}
          y={65}
          discovered={discoveredClues.includes('watch')}
          onClick={() => toggleClue('watch')}
        />
        
        <Link
          to="/Upstairs"
          className="clue-object room-exit"
          style={{ left: '75%', top: '48%' }}
        >
          <span className="clue-object__marker" aria-hidden="true">↑</span>
          <span className="clue-object__label">Staircase</span>
          <span className="clue-object__description">Go upstairs</span>
        </Link>

        <Link
          to="/Room1"
          className="clue-object room-exit"
          style={{ left: '43%', top: '55%' }}
        >
          <span className="clue-object__marker" aria-hidden="true">↑</span>
          <span className="clue-object__label">Door</span>
          <span className="clue-object__description">Go to the next Room </span>
        </Link>
    
          <Link
          to="/Room2"
          className="clue-object room-exit"
          style={{ left: '10%', top: '60%' }}
        >
          <span className="clue-object__marker" aria-hidden="true">↑</span>
          <span className="clue-object__label">Broken Door</span>
          <span className="clue-object__description">Go to the next Room </span>
        </Link>
        
      </section>

      <DialogueBox
        speaker="Your journal"
        text={dialogue[dialogueIndex]}
        onAdvance={advanceDialogue}
      />
    </main>
  )
}

export default Prologue