const SearchBar = (props) => {
    
    const handleInputChange = (e) => {
        //console.log(e.target.value + 'SearchBar')
        e.preventDefault()
        props.setName(e.target.value)
    }
    
    const onClickHandler = (e) => {
        e.preventDefault()
        props.setSearch(true)
    }
    return (
        <form >
        <label >Search Pokemon</label>
        <input
            type="text"            
            placeholder="Search Pokemon"             
            onChange={(e) => {handleInputChange(e)}}  
            />
        <button onClick={(e) => {onClickHandler(e)}} type="submit">Search</button>
    </form>
  )
};

export default SearchBar;