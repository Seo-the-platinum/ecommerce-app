import React, { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux'
import { updateSearch } from './searchSlice'

//I had to declare my styled components outside of the search component function.
//I had to do this because there is a bug when using a styled component wrapper or container
//with an input element inside. The input element will unfocus after each input, which in this
//case results in having to constantly click on the input element to type a letter

const Container = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 1;
`
const SearchField = styled.input`
  background-color: white;
  border: none;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  flex: 3;
  height: 24px;
  padding: 0;
  text-indent: 5px;
`
const SearchIconDiv = styled.div`
  background-color: rgb(43, 149, 255);
  border: none;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  border-left: 2px solid black;
  display: flex;
  flex: 1;
`
const Search = ()=> {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e)=> {
    setSearchTerm(e.target.value.toLowerCase());
  }

  const handleSubmit = ()=> {
    setSearchTerm('')
    dispatch(updateSearch(searchTerm))
  }

  return (
    <Container>
      <SearchField
        type='search'
        placeholder='search...'
        onChange={handleChange}
        value={searchTerm}/>
      <SearchIconDiv>
        <SearchIcon
          onClick={()=>handleSubmit()}
          style={{ color: 'white'}}/>
      </SearchIconDiv>
    </Container>
  )
}

export default Search
