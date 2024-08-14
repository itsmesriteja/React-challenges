const Search = ({ colorText, setColorText }) => {
  return (
    <form className="formData" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">
        Add Color Name: 
      </label>
      <input
        autofocus
        required
        type="text"
        placeholder="Add color name"
        role="search"
        value={colorText}
        onChange={(e) => setColorText(e.target.value)}
      />
    </form>
  )
}

export default Search
