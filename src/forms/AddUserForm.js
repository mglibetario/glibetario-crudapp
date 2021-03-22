import React, { useState } from 'react'

const AddUserForm = (props) => {
  
  const initialFormState = 
    { 
      id: null, 
      guestname: '', 
      guestinfo: '' 
    };

  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.guestname || !user.guestinfo) return
        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="guestname"
        value={user.guestname}
        onChange={handleInputChange}
        placeholder="Guest Name"
      />
      <label>Contact</label>
      <input
        type="text"
        name="guestinfo"
        value={user.guestinfo}
        onChange={handleInputChange}
        placeholder="Guest Contact Number"
      />
      <button>Add Guest</button>
    </form>
  )
}

export default AddUserForm;