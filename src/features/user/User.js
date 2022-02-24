import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from './userSlice.js'

const User = ()=> {
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

  return (
    <div>
      <text> login</text>
      <form>
        <label>
          Username:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" onClick={()=> dispatch(login())}/>
      </form>
    </div>
  )
}

export default User
