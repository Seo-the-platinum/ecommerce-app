import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux'
import { updateSearch } from './searchSlice'
import { useNavigate } from 'react-router-dom'
import './search.css'

const Search = ()=> {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (e)=> {
    setSearchTerm(e.target.value.toLowerCase());
  }

  const handleSubmit = ()=> {
    setSearchTerm('')
    dispatch(updateSearch(searchTerm))
    navigate('/')
  }

  return (
    <div className='searchContainer'>
      <input className='searchField'
        type='search'
        placeholder='search...'
        onChange={handleChange}
        value={searchTerm}/>
      <div className='searchIcon'>
        <SearchIcon
          onClick={()=>handleSubmit()}
          style={{ color: 'white'}}/>
      </div>
    </div>
  )
}

export default Search
