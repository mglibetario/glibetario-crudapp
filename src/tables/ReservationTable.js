import React from 'react'

const ReservationTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Name</th>
        <th>Contact</th>
        <th>Time</th>
        <th>Pax</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.reservations.length > 0  ? (
        props.reservations.map((user) => (
  
          <>
          {user.reservedate.map((reservation) => (
            
            <tr key={reservation.idreservedate}>
                <td>{reservation.date}</td>
                <td>{user.guestname}</td>
                <td>{user.guestinfo}</td>
                <td>{reservation.time}</td>
                <td>{reservation.pax}</td>

                <td>
                <button
                onClick={() => {
                props.editReservationRow(reservation)
                }}
                className="button muted-button"
                >
                Edit
                </button>
              <button
                onClick={() => props.deleteReservation(reservation.idreservedate)}
                className="button muted-button"
                >
                Delete
              </button>
              </td>
              </tr>
            ))}
          </>
          
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Reservations....</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ReservationTable;
