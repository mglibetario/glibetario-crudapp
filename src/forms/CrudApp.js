import React, { useState } from 'react';
import UserTable from '../tables/UserTable';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import ReservationTable from '../tables/ReservationTable';
import AddReservationForm from './AddReservationForm';
import EditReservationForm from './EditReservationForm';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

const CrudApp = () => {

  const usersData = [
    { 
      id: 1, 
      guestname: 'John Doe', 
      guestinfo: '123-456789',
      reservedate: [
        {
          idreservedate: 1,
          date: '2021-03-17',
          time: '18:00',
          pax: '6'
        }
      ]
    },
    { 
      id: 2, 
      guestname: 'Jane Dean', 
      guestinfo: '312-987612',
      reservedate: [
        {
          idreservedate: 1,
          date: '2021-03-17',
          time: '18:30',
          pax: '3'
        },
        {
          idreservedate: 2,
          date: '2021-03-19',
          time: '04:30',    
          pax: '20'
        }
      ]
    },
    { 
      id: 3, 
      guestname: 'Doe', 
      guestinfo: '987-123456',
      reservedate: [
        {
          idreservedate: 1,
          date: '2021-03-17',
          time: '13:00',
          pax: '2'
        },
        {
          idreservedate: 2,
          date: '2021-03-17',
          time: '22:00',
          pax: '30'
        },
        {
          idreservedate: 3,
          date: '2021-03-18',
          time: '23:00',
          pax: '9'
        },
        {
          idreservedate: 4,
          date: '2021-03-18',
          time: '17:00',
          pax: '50'
        },
        {
          idreservedate: 5,
          date: '2021-03-20',
          time: '07:00',
          pax: '5'
        }
      ]
    },
    {
      id: 4,
      guestname: 'Dean',
      guestinfo: '456-987123',
      reservedate: [
        {
          idreservedate: 1,
          date: '2021-03-17',
          time: '15:00',
          pax: '36'
        },
        {
          idreservedate: 2,
          date: '2021-03-18',
          time: '09:00',
          pax: '5'
        },
        {
          idreservedate: 3,
          date: '2021-03-19',
          time: '21:30',
          pax: '10'
        }
      ]
    }
  ];

  // Current date display
  const currDate = new Date();
  
  // Tab control
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
  };
  
  // Data
  const [users, setUsers] = useState(usersData);

  const [reservations, setReservations] = 
  useState(usersData);

  // controls start
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  };

  const addReservation = (reservation) => {
    reservation.idreservedate = reservations.length + 1
    setReservations({...reservations, reservation})
  };

  const deleteReservation = (idreservedate) => {
    setEditingRes(false)
    setReservations(reservations.filter((reservation) => reservation.idreservedate !== idreservedate))
  }

  const [editing, setEditing] = useState(false);
  const [editingRes, setEditingRes] = useState(false);
  
  const initialFormState = { id: null, guestname: '', guestinfo: '' };
  const initialReservationFormState = { idreservedate: null, date: '', time: '', pax: '' }

  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [currentReservation, setCurrentReservation] = useState(initialReservationFormState);
  
  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({ id: user.id, guestname: user.guestname, guestinfo: user.guestinfo, reservedate: user.reservedate })
  };
  const editReservationRow = (reservation) => {
    setEditingRes(true)
    setCurrentReservation({ idreservedate: reservation.idreservedate, date: reservation.date, time: reservation.time, pax: reservation.pax})
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  };

  const updateReservation = (idreservedate, updatedReservation) => {
    setEditingRes(false)
    setReservations(reservations.map((reservation) => (reservation.idreservedate === idreservedate ? updatedReservation : reservation)))
  };
  // controls end



  return (
   
    <Container>
      <Row>
        <Col xs="12" sm="6">
          <h1>Salt n' Paper Bakery</h1>
        </Col>
        <Col xs="12" sm="6">
          <h3>{currDate.toDateString()}</h3>
        </Col>
      </Row>


      <Row>
        <Col xs="12">

          <Nav tabs>

            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
              Reservations
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => { toggle('2'); }}
                >
                Guests
              </NavLink>
            </NavItem>

          </Nav>

          <TabContent activeTab={activeTab}>

            <TabPane tabId="1">
              <Row>
                <Col xs="12">

                <div className="">
                    {editingRes ? (
                      <div>
                        <h2>Edit Reservation</h2>
                        <EditReservationForm
                          setEditingRes={setEditingRes}
                          currentReservation={currentReservation}
                          updateReservation={updateReservation}
                        />
                      </div>
                    ) : (
                      <div>
                        <h2>Add Reservation</h2>
                          <AddReservationForm addReservation={addReservation} />
                      </div>
                    )}
                  </div>

                <div className="">
                    <h2>View Reservations</h2>
                      <ReservationTable reservations={reservations} editReservationRow={editReservationRow} deleteReservation={deleteReservation} />
                  </div>

                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="2">
              <Row>
                <Col xs="12">
                  
                <div className="">
                    {editing ? (
                      <div>
                        <h2>Edit Guest</h2>
                        <EditUserForm
                          setEditing={setEditing}
                          currentUser={currentUser}
                          updateUser={updateUser}
                        />
                      </div>
                    ) : (
                      <div>
                        <h2>Add Guest</h2>
                          <AddUserForm addUser={addUser} />
                      </div>
                    )}
                  </div>

                  <div className="">
                    <h2>View Guests</h2>
                      <UserTable users={users} editRow={editRow} />
                  </div>

                </Col>
              </Row>
            </TabPane>
          </TabContent>

        </Col>
      </Row>
      

    </Container>
  )
}

export default CrudApp;