import React, { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
  align-items: flex-end;
  display: flex;
  height: 99%;
  width: 80%;
`
const SearchField = styled.input`
  align-items: flex-end;
  background-color: white;
  border: none;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  height: 75%;
  width: 75%;
`
const SearchIconDiv = styled.div`
  background-color: rgb(43, 149, 255);
  border: none;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  border-left: 2px solid black;
  display: flex;
  height: 79%;
  width: 5%;
`
const Search = ()=> {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = e => {
    e.preventDefault()
    setSearchTerm(e.target.value);
  }
  return (
    <Container>
      <SearchField
        type='search'
        placeholder='search...'
        onChange={handleChange}
        value={searchTerm}/>
      <SearchIconDiv>
        <SearchIcon style={{width: '100%', height: '100%', color: 'white'}}/>
      </SearchIconDiv>
    </Container>
  )
}

export default Search
