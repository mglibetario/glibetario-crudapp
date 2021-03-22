import React, { useState } from 'react'

const AddReservationForm = (props) => {

  const initialReservationFormState =
    {
      idreservedate: null, 
      date: '', 
      time: '', 
      pax: '' 
    };
    
  const [reservation, setReservation] = useState(initialReservationFormState)

  const handleInputChangeRes = (event) => {
    const { name, value } = event.target

    setReservation({ ...reservation, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!reservation.date || !reservation.time || !reservation.pax) return
        props.addReservation(reservation)
        setReservation(initialReservationFormState)
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
      <button>Add Reservation</button>
    </form>
  )
}

export default AddReservationForm;