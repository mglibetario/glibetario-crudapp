import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])
 

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.guestname || !user.guestinfo) return
        props.updateUser(user.id, user)
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
        placeholder="Contact Number"
      />
      <button>Update Guest</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm;