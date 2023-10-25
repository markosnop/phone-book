function input ({textLabel,text, textPlaceholder, handleChange }) {
    return (
        <div className="mb-3">
        <label htmlFor={textLabel} className="form-label">
          {text}:
        </label>
        <input
          type="text"
          placeholder={textPlaceholder}
          className="form-control"
          onChange={handleChange}
        />
      </div>
    )
}

export default input