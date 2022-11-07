import './App.css';
import { useState, useEffect } from 'react';
import Axios from "axios";


function App() {
  const [listOfCustomers, setListOfCustomers] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

useEffect(() => {
  Axios.get("http://localhost:3001/getCustomers").then((response) => {
    setListOfCustomers(response.data);
  });
}, []);



const createCustomer = () => {
  Axios.post("http://localhost:3001/createCustomer", {
  companyName,
  firstName,
  lastName,
  phone,
  address,
  email,
  }).then((response) => {
    setListOfCustomers([
      ...listOfCustomers, 
      { 
      companyName,
      firstName,
      lastName,
      phone,
      address,
      email,
    }
    ]);
  });
};


  return (
    <div className="App">
            <div>
          <input type="text" placeholder="Company Name" onChange={(event) => {
            setCompanyName(event.target.value);
          }}/>
          <input type="text" placeholder="First Name" onChange={(event) => {
            setFirstName(event.target.value);
          }}/>
          <input type="text" placeholder="Last Name" onChange={(event) => {
            setLastName(event.target.value);
          }}/>
          <input type="text" placeholder="Phone Number" onChange={(event) => {
            setPhone(event.target.value);
          }}/>
          <input type="text" placeholder="Address" onChange={(event) => {
            setAddress(event.target.value);
          }}/>
          <input type="text" placeholder="Email Address" onChange={(event) => {
            setEmail(event.target.value);
          }}/>
          <button onClick={createCustomer}>Create Customer</button>
        </div>
      <div className="customerDisplay">
    {listOfCustomers.map((customer) => {
      return (
        <div>
          <h1>{customer.companyName}</h1>
          <p>Contact: {customer.firstName}  {customer.lastName}</p>
          <p>Phone: {customer.phone}</p>
          <p>Address: {customer.address}</p>
          <p>Email: {customer.email}</p>
        </div>
      )
    } )}

      </div>

    </div>
  );
}

export default App;
