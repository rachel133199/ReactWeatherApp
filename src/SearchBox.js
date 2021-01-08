import React from 'react'

function SearchBox(props) {
    return(
        <div className="search-box">
          <input 
          type={props.data.type} 
          className={props.data.className} 
          placeholder={props.data.placeholder}
          onChange={e => props.data.onChange(e.target.value)}
          value={props.data.query}>
          {/* onKeyPress={e => props.data.onKeyPress(e)}> */}
          </input>
        </div>
    )
}

export default SearchBox