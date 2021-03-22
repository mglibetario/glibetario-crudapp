import React, { useState, useEffect } from 'react'

const EditReservationForm = (props) => {
  const [reservation, setReservation] = useState(props.currentReservation)

  const handleInputChangeRes = (event) => {
    const { name, value } = event.target
    setReservation({ ...reservation, [name]: value })
  }

  useEffect(() => {
    setReservation(props.currentReservation)
  }, [props])
 

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!reservation.date || !reservation.time || !reservation.pax) return
        props.updateReservation(reservation.idreservedate, reservation)
      }}
    >
      <label>Date</label>
      <input
        type="text"
        name='date'
        value = {reservation.date}
        onChange={handleInputChangeRes}
        placeholder="Date of Reservation"
      />
      <label>Time</label>
      <input
        type="text"
        name="time"
        value={reservation.time}
        onChange={handleInputChangeRes}
        placeholder="Time of Reservation"
      />
      <label>Number of Guests</label>
      <input
        type="text"
        name="pax"
        value={reservation.pax}
        onChange={handleInputChangeRes}
        placeholder="Number of Guests"
      />
      <button>Update Reservation</button>
      <button
        onClick={() => props.setEditingRes(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditReservationForm;