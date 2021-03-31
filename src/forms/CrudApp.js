import React, { useState } from 'react';
import ReservationTable from '../tables/ReservationTable';
import AddReservationForm from './AddReservationForm';
import EditReservationForm from './EditReservationForm';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarText } from 'reactstrap';

  const reservationData = [
    { id: 1, guest: 'Doe', contact: '1234567890', date: '2021-05-01', time: '15:00', pax: '3' },
    { id: 2, guest: 'Jane', contact: '3210987654', date: '2021-05-02', time: '09:00', pax: '4' },
    { id: 3, guest: 'John', contact: '4560123789', date: '2021-05-04', time: '10:00', pax: '1' },
    { id: 4, guest: 'Dean', contact: '9870654321', date: '2021-05-05', time: '16:30', pax: '2' },
  ]

const CrudApp = () => {
  const currDate = new Date();

  const [reservations, setReservations] = useState(reservationData);
  const addReservation = (reservation) => {
    reservation.id = reservations.length + 1
    setReservations([...reservations, reservation])
  };
  const deleteReservation = (id) => {
    setEditing(false)
    setReservations(reservations.filter((reservation) => reservation.id !== id))
  }
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, guest: '', contact: '', date: '', time: '', pax: '' }
  const [currentReservation, setCurrentReservation] = useState(initialFormState);
  const editReservation = (reservation) => {
    setEditing(true)
    setCurrentReservation({ id: reservation.id, guest: reservation.guest, contact: reservation.contact, 
      date: reservation.date, time: reservation.time, pax: reservation.pax })
  };
  const updatedReservation = (id, updatedReservation) => {
    setEditing(false)
    setReservations(reservations.map((reservation) => (reservation.id === id ? updatedReservation: reservation)))
  };

  return (
    <>
      <Navbar color="faded">
        <NavbarBrand>
          <h1>Salt n' Paper Bakery</h1>
        </NavbarBrand>
        <NavbarText>
          <h2>{currDate.toDateString()}</h2>
        </NavbarText>
      </Navbar>
      
      
      <Container>
      <Row id="reservations">

        <Col xs="12" sm="4">
          <div className="pageReservation" >
            {editing ? (
                        <div className="pagReservationEdit">
                          <br />
                          <h3>EDIT RESERVATION</h3>
                          <EditReservationForm
                            setEditing={setEditing}
                            currentReservation={currentReservation}
                            updatedReservation={updatedReservation}
                          />
                        </div>
                        ) : (
                            <div className="pageReservationAdd">
                              <br />
                              <h3>ADD RESERVATION</h3>
                              <AddReservationForm addReservation={addReservation} />
                            </div>
                            )
              }
          </div>
        </Col>
        
        <Col xs="12" sm="8">
          <div className="pageReservationView"> 
            <br />
            <h3>VIEW RESERVATION</h3>
            <br />
            <ReservationTable 
              reservations={reservations} 
              editReservation={editReservation} 
              deleteReservation={deleteReservation} 
            />
          </div>
        </Col>

      </Row>
      </Container>
    </>
  );

}

export default CrudApp;