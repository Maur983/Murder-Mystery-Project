import './VisualNovel.css'

function ClueObject({
  label,
  description,
  discovered = false,
  onClick,
  className = '',
  x = 50,
  y = 50
}) {
  return (
    <button
      className={`clue-object ${className}${discovered ? ' clue-object--discovered' : ''}`}
      style={{ left: `${x}%`, top: `${y}%` }}
      type="button"
      onClick={onClick}
      aria-label={`${label}${discovered ? ', discovered' : ', inspect clue'}`}
      aria-pressed={discovered}
    >
      <span className="clue-object__marker" aria-hidden="true">
        {discovered ? '✓' : '?'}
      </span>
      <span className="clue-object__label">{label}</span>
      {description && <span className="clue-object__description">{description}</span>}
    </button>
  )
}

export default ClueObject
