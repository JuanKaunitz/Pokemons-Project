const SearchBar = (props) => {
    
  function onClickHandler(event) {
      console.log(event.target.value)
    event.preventDefault()
    props.setSearch(event.target.value)
  }
    return (
    <form >
        <label >Search Pokemon</label>
        <input
            type="text"            
            placeholder="Search Pokemon"             
        />
        <button onClick={onClickHandler} type="submit">Search</button>
    </form>
  )

};

export default SearchBar;