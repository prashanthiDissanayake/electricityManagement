import React, { useState } from "react";
import "../../css/List.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

export default function ElectricityConnectionForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNIC] = useState("");
  const [loadRequirement, setLoadRequirement] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [proofOfOwnership, setProofOfOwnership] = useState(null);
  const [wiringCertification, setWiringCertification] = useState(null);

  const handleSubmit = (e) => {
    // Perform form submission or data handling here
    // You can access the form data in the state variables (name, address, nic, loadRequirement, contactNumber, email, proofOfOwnership, wiringCertification)
    // and proceed with further actions
  };

  const handleProofOfOwnershipUpload = (e) => {
    const file = e.target.files[0];
    setProofOfOwnership(file);
  };

  const handleWiringCertificationUpload = (e) => {
    const file = e.target.files[0];
    setWiringCertification(file);
  };

  //insert data
  function sendData(e) {
    const newRequest = {
      name,
      address,
      nic,
      loadRequirement,
      contactNumber,
      email,
      proofOfOwnership,
      wiringCertification,
    };
    axios
      .post("/elecrequest/add", newRequest)
      .then(() => {
        swal({
          title: "Success!",
          text: "Successfully added the room",
          icon: "success",
          button: "Ok",
        });
      })
      .catch((e) => {
        swal("Please fill Form correctly" + e);
      });
  }
  return (
    <form noValidate>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        NIC:
        <input
          type="text"
          value={nic}
          onChange={(e) => setNIC(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Load Requirement:
        <input
          type="text"
          value={loadRequirement}
          onChange={(e) => setLoadRequirement(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Contact Number:
        <input
          type="text"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Proof of Ownership (Image Upload):
        <input type="file" onChange={handleProofOfOwnershipUpload} required />
      </label>
      <br />
      <label>
        Wiring Certification (Image Upload):
        <input
          type="file"
          onChange={handleWiringCertificationUpload}
          required
        />
      </label>
      <br />
      <button type="submit" onClick={sendData}>
        Submit
      </button>
    </form>
  );
}
