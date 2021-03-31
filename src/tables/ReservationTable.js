import React from 'react';
import { Table, Button } from 'reactstrap';

const ReservationTable = (props) => (
  <Table responsive hover id="tableReservation" size="sm">
    <thead>
      <tr>
        <th>Guest</th>
        <th>Contact</th>
        <th>Date</th>
        <th>Time</th>
        <th>Pax</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.reservations.length > 0 ? (
        props.reservations.map((reservation) => (
          <tr key={reservation.id}>
            <td>{reservation.guest}</td>
            <td>{reservation.contact}</td>
            <td>{reservation.date}</td>
            <td>{reservation.time}</td>
            <td>{reservation.pax}</td>

            <td>
                <Button 
                  id="editButton"
                  size="sm"
                  onClick={() => {
                    props.editReservation(reservation)
                    }}
                >
                  Edit
                </Button>
                <Button 
                  id="deleteButton"
                  size="sm"
                  onClick={() => {
                    props.deleteReservation(reservation.id)
                  }}
                >
                  Delete
                </Button>
          
            </td>
            
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={6}><h3>No Reservations...</h3></td>
        </tr>
      )}
    </tbody>
  </Table>
)

export default ReservationTable;
