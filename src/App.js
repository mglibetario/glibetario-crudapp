import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

const App = () => {

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
          time: '09:00',
          pax: '10'
        }
      ]
    }

  ];

  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
  };

  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  };

  const deleteUser = (id) => {
    setEditing(false)
    setUsers(users.filter((user) => user.id !== id))
  }

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, guestname: '', guestinfo: '' };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const editRow = (user) => {
    setEditing(true)
  
    setCurrentUser({ id: user.id, guestname: user.guestname, guestinfo: user.guestinfo })
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  };

  return (
    <Container>
      <Row>
        <Col xs="12" sm="6">
          <h1>Salt n' Paper Bakery</h1>
        </Col>
        <Col xs="12" sm="6">
          <h3>17 March 2021</h3>
        </Col>
      </Row>


      <Row>
        <Col xs="12">

          <Nav tabs>

            <NavItem>
              <NavLink 
                className={{ active: activeTab === '1' }}
                onClick={() => { toggle('1'); }}
              >
                Reservations
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={{ active: activeTab === '2' }}
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

                  <div className="flex-large">
                    {editing ? (
                      <div>
                        <h2>Edit user</h2>
                        <EditUserForm
                          setEditing={setEditing}
                          currentUser={currentUser}
                          updateUser={updateUser}
                        />
                      </div>
                    ) : (
                      <div>
                        <h2>Add user</h2>
                          <AddUserForm addUser={addUser} />
                      </div>
                    )}
                  </div>

                  <div className="flex-large">
                    <h2>View users</h2>
                      <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
                  </div>

                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="2">
              <Row>
                <Col xs="12">
                  
                <div className="flex-large">
                    {editing ? (
                      <div>
                        <h2>Edit user</h2>
                        <EditUserForm
                          setEditing={setEditing}
                          currentUser={currentUser}
                          updateUser={updateUser}
                        />
                      </div>
                    ) : (
                      <div>
                        <h2>Add user</h2>
                          <AddUserForm addUser={addUser} />
                      </div>
                    )}
                  </div>

                  <div className="flex-large">
                    <h2>View users</h2>
                      <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
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

export default App;