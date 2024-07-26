import React, { useEffect, useState } from "react";
import "./innerHeader.css";
import Animation from "./Animation.json";
import Lottie from "lottie-react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "./Card";
import InnerNav from "./InnerNav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const InnerHeader = () => {

  const [show, setShow] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [sportType, setSportType] = useState("Please Select Sport Type");
  const [coachName, setCoachName] = useState("");
  const [errors, setErrors] = useState({});
  const [teamList, setTeamList] = useState([]);

 const [store, setStore] =  useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!teamName.trim()) {
      newErrors.teamName = "Team Name is required";
      valid = false;
    }

    if (sportType === "Please Select Sport Type") {
      newErrors.sportType = "Please select Sport Type";
      valid = false;
    }

    if (!coachName.trim()) {
      newErrors.coachName = "Coach Name is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };



  function storeData() {

    axios
      .get("http://192.168.1.79:5000/api/prime/getteams")
      .then(function (response) {
        setTeamList(response.data)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  console.log("Store ======>>>", store)


  useEffect(() =>{
    storeData()
  }, [])


  const handleSubmit = (e) => {
    axios
      .post("http://192.168.1.79:5000/api/prime/addteam", {
        teamName: teamName,
        sportType: sportType,
        coachName: coachName,
      })
      .then(function (response) {
        storeData()
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    e.preventDefault();

    if (validateForm()) {
      const newTeam = {
        id: Date.now(),
        teamName,
        sportType,
        coachName,
      };

      setTeamList([...teamList, newTeam]);

      setTeamName("");
      setSportType("Please Select Sport Type");
      setCoachName("");
      handleClose();
    }
  };

  return (
    <div className="inn-headercontainer">
      <InnerNav />

      <div className="inn-btn-div">
        <button className="inh-btn" onClick={handleShow}>
          Add Team
        </button>
      </div>

      {teamList.length > 0 ? (
        <div className="container">
        <div className="card-container row">
          {teamList.map((team) => (
            <Card
              key={team.id}
              title={`Team Name: ${team.teamName}`}
              text={`Sport Type: ${team.sportType}, Coach Name: ${team.coachName}`}
              buttonText="Add Player"
            />
          ))}
        </div>
        </div>
      ) : (
        <Lottie className="lottie" animationData={Animation} />
      )}
<div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div>
              <label >Team Name:</label>
              <br />
              <input
                className="model-input"
                placeholder="Team Name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
              {errors.teamName && (
                <div className="error">{errors.teamName}</div>
              )}
              <br />
              <label>Sport Type:</label>
              <br />
              <select
                className="form-select"
                value={sportType}
                onChange={(e) => setSportType(e.target.value)}
              >
                <option disabled>Please Select Sport Type</option>
                <option value="cricket">Cricket</option>
                <option value="football">FootBall</option>
                <option value="badminton">Badminton</option>
                <option value="tennis">Tennis</option>
                <option value="racing">Racing</option>
                <option value="other">Other</option>
              </select>
              {errors.sportType && (
                <div className="error">{errors.sportType}</div>
              )}
              <br />
              <label>Coach Name:</label>
              <br />
              <input
                className="model-input"
                placeholder="Coach Name"
                value={coachName}
                onChange={(e) => setCoachName(e.target.value)}
              />
              {errors.coachName && (
                <div className="error">{errors.coachName}</div>
              )}
              <br />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="model-submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
  
      </div>
      <Footer />
    </div>
  );
};

export default InnerHeader;
