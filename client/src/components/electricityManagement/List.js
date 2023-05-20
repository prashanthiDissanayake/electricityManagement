import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import swal from "sweetalert";
import { Link, useHistory } from "react-router-dom";
import { jsPDF } from "jspdf";
import "../../css/List.css";

export default function AdminList() {
  const [electricityList, setElectricityList] = useState([]);

  useEffect(() => {
    getElectricity();
  }, []);

  const getElectricity = async () => {
    try {
      const res = await axios.get("/electricityy/electricityyview");
      setElectricityList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteElectric = async (item) => {
    try {
      await axios.delete(`/electricityy/delete/${item._id}`);
      swal({
        title: "Success!",
        text: "Successfully deleted the Record",
        icon: "success",
        button: "Ok",
      });
      getElectricity();
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdateElec = (item) => {
    window.location = `/editEleTyp/${item._id}`;
  };

  const generateReport = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Electricity List Report", 20, 20);

    electricityList.forEach((item, index) => {
      const yPos = 30 + index * 10;
      doc.setFontSize(12);
      doc.text(`Electricity Type: ${item.electricityType}`, 20, yPos);
      doc.text(`Description: ${item.description}`, 20, yPos + 30);
      doc.text(`Price: Rs ${item.price}`, 20, yPos + 30);
      doc.text(`Number: ${item.electricityNumber}`, 20, yPos + 35);
    });

    doc.save("electricity_report.pdf");
  };

  return (
    <div>
      <div className="container">
        <div className="text-end mt-5">
          <Link to="/addEleTyp">
            <Button variant="primary">Add a New Plan</Button>
          </Link>
          <Button variant="primary ms-3" onClick={generateReport}>
            Generate a Report
          </Button>
        </div>
        {electricityList?.map((item, index) => {
          return (
            <div className="row card-row p-5 align-items-center mt-5">
              <div className="col-md-8">
                <h3 className="fw-bold">{item.electricityType}</h3>
                <p className="mt-3 fs-5">{item.description}</p>
                <p className="text-muted mt-3">
                  Price : Rs
                  <span style={{ marginRight: 25 }}>{item.price}</span>
                  Number : <span>{item.electricityNumber}</span>
                </p>
              </div>
              <div className="col-md-4">
                <Button
                  variant="success"
                  onClick={() => onUpdateElec(item)}
                  className="btn-set"
                >
                  Edit
                </Button>{" "}
                <br></br>
                <Button
                  variant="danger"
                  onClick={() => deleteElectric(item)}
                  className="mt-3 btn-set"
                >
                  Delete
                </Button>{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
