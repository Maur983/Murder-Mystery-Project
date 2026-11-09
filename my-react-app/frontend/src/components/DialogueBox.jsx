import './VisualNovel.css'

function DialogueBox({ speaker, text, onAdvance, advanceLabel = 'Continue' }) {
  return (
    <section className="dialogue-box" aria-label="Dialogue">
      <div className="dialogue-box__rule" aria-hidden="true" />
      <div className="dialogue-box__content">
        <p className="dialogue-box__speaker">{speaker}</p>
        <p className="dialogue-box__text">{text}</p>
      </div>
      {onAdvance && (
        <button
          className="dialogue-box__advance"
          type="button"
          onClick={onAdvance}
          aria-label={advanceLabel}
        >
          <span>{advanceLabel}</span>
          <span aria-hidden="true">→</span>
        </button>
      )}
    </section>
  )
}

export default DialogueBox
