import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AddReservationForm = (props) => {
  const initialFormState = { id: null, guest: '', contact: '', date: '', time: '', pax: '' };
  const [reservation, setReservation] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setReservation({ ...reservation, [name]: value })
  }

  const currDate = new Date().toISOString().slice(0, 10);

  return (
    <Form id="crudAddForm"
      onSubmit={(event) => {
        event.preventDefault()
        if ( !reservation.guest || !reservation.contact || !reservation.date || !reservation.time || !reservation.pax ) return;
        props.addReservation(reservation)
        setReservation(initialFormState)
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
          placeholder="Contact Format: 1234567890"
          maxLength="10"
          pattern="[0-9]{10}"
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
          placeholder="Date Format: YYYY-MM-DD"
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
          placeholder="Time Format: 24-hour clock"
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

      <FormGroup className="crudAddFormDivAddButton">
        <Button id="addButton" size="sm">
          Add
        </Button>
      </FormGroup>

    </Form>
  );
}

export default AddReservationForm;