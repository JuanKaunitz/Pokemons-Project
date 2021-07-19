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
    const onClickXHandler = (e) => {
        e.preventDefault()  
        props.setName("")      
        props.setSearch(false)
    }

    return (
        <form >
        <label >Search Pokemon</label>
        <input
            type="text"            
            placeholder="..."
            value={props.name}             
            onChange={(e) => {handleInputChange(e)}}  
            />
        <button onClick={(e) => {onClickHandler(e)}} type="submit">Search</button>
        <button onClick={(e) => {onClickXHandler(e)}} >X</button>
    </form>
  )
};

export default SearchBar;