import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const EditReservationForm = (props) => {
  const [reservation, setReservation] = useState(props.currentReservation)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setReservation({ ...reservation, [name]: value })
  }

  useEffect(() => {
    setReservation(props.currentReservation)
  }, [props])
 
  const currDate = new Date().toISOString().slice(0, 10);

  return (
    <Form id="crudEditForm"
      onSubmit={(event) => {
        event.preventDefault()
        if ( !reservation.guest || !reservation.contact || !reservation.date || !reservation.time || !reservation.pax ) return;
        props.updatedReservation(reservation.id, reservation)
      }}
    >
      <FormGroup>
        <Label for="guest">Guest</Label>
        <Input
          type="text"
          id="guest"
          name="guest"
          value={reservation.guest}
          onChange={handleInputChange}
          placeholder="Guest Name"
          maxLength="40"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="contact">Contact</Label>
        <Input
          type="tel"
          id="contact"
          name="contact"
          value={reservation.contact}
          onChange={handleInputChange}
          placeholder="Format: 123-456789"
          maxLength="10"
          pattern="[[0-9]{3}-[0-9]{6}"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="date">Date</Label>
        <Input
          type="date"
          id="date"
          name="date"
          value={reservation.date}
          onChange={handleInputChange}
          placeholder="Reservation Date"
          min={currDate}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="time">Time</Label>
        <Input 
          type="time"
          id="time"
          name="time"
          onChange={handleInputChange}
          value={reservation.time}
          placeholder="Reservation Time"
          min="08:00"
          max="20:00"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="pax">Pax</Label>
        <Input 
          type="number"
          id="pax"
          name="pax"
          onChange={handleInputChange}
          value={reservation.pax}
          placeholder="Max of 5 Guests"
          min="1"
          max="5"
          maxLength="1"
          required
        />
      </FormGroup>

      <FormGroup className="crudEditFormDivButtons">
        <Button id="updateButton" size="sm">
          Update
        </Button>
        {' '}
        <Button id="cancelButton" size="sm" onClick={() => props.setEditing(false)}>
          Cancel
        </Button>
      </FormGroup>
    
      
    </Form>
  );
}

export default EditReservationForm;