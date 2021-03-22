import React from 'react'

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Contact</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.guestname}</td>
            <td>{user.guestinfo}</td>
            <td>
                <button
                onClick={() => {
                props.editRow(user)
                }}
                className="button muted-button"
                >
                Edit
                </button>
          
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Guests...</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable;
