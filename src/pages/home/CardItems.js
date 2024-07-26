import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from 'react-bootstrap/Table';
import { useLocation } from "react-router-dom";
import InnerNav from "./InnerNav";
import "../../style.css";
import axios from "axios";
import BASE_URL from '../../.env'



const CartItems = () => {

  const [teamList, setTeamList] = useState([]);
  const [store, setStore] =  useState("")

  const location = useLocation();
  const receivedData = location.state?.data;

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    category: "Choose Your Category" 
  });
  const [items, setItems] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const handleClose = () => {
    setShow(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      category: "Choose Your Category"
    });
    setFormErrors({});
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (formData.category === "Choose Your Category") {
      errors.category = "Please select a category";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };



  function storeData() {

     const url = process.env.BASE_URL;

    axios
      .get("http://192.168.1.79:5000/api/prime/getplayer")
      .then(function (response) {
        setItems(response.data)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  console.log("teamList ======>>>", teamList)


  useEffect(() =>{
    storeData()
  }, [])

  const handleAdd = () => {

    if (validateForm()) {
       

      axios.post('http://192.168.1.79:5000/api/prime/addplayer', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        category: formData.category
      })
      .then(function(response){
        storeData()
        console.log(response);
        // const newItem = {
        //   firstName: formData.firstName,
        //   lastName: formData.lastName,
        //   email: formData.email,
        //   category: formData.category
        // };
        // setItems([...items, newItem]);
        handleClose();
      })
      .catch(function(err){
        console.log(err);
      });
    }
    // alert("Comming Soon")
  };

  return (
    <div className="citem-headercontainer">
      <InnerNav />

      <div className="inn-btn-div">
        <Button
          variant="primary"
          className="card-item-btn-ap"
          onClick={handleShow}
        >
          Add Player
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Provide Some Details.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>First Name:</label>
            <br />
            <input
              className="cardItem-input"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {formErrors.firstName && (
              <span className="error">{formErrors.firstName}</span>
            )}
            <br /> <br />
            <label>Last Name:</label>
            <br />
            <input
              className="cardItem-input"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {formErrors.lastName && (
              <span className="error">{formErrors.lastName}</span>
            )}
            <br /> <br />
            <label>Email:</label>
            <br />
            <input
              className="cardItem-input"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <span className="error">{formErrors.email}</span>
            )}
            <br /> <br />
            <label>Select Your Category:</label>
            <br />
            <select
              className="cardItem-input"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option disabled>Choose Your Category</option>
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
              <option value="All Rounder">All Rounder</option>
              <option value="Wicketkeeper">Wicketkeeper</option>
            </select>
            {formErrors.category && (
              <span className="error">{formErrors.category}</span>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            style={{ width: "100px" }}
            onClick={handleAdd}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {items.length > 0 && (
        <Table striped bordered hover size="sm" className="player-table">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Sport Role</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default CartItems;
