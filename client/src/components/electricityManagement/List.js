import React, { useEffect, useState } from "react";
import "../../css/List.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import swal from "sweetalert";
import { Link, useHistory } from "react-router-dom";

export default function AdminList() {
  const [electricityList, setElectricityList] = useState([]);

  useEffect(() => {
    getElectricty();
  }, []);
  const getElectricty = async () => {
    const res = await axios
      .get("/electricityy/electricityyview")
      .then((res) => {
        setElectricityList(res.data);
      })
      .catch(() => {});
  };

  const deleteElectric = async (item) => {
    axios
      .delete(`/electricityy/delete/${item._id}`)
      .then((res) => {
        swal({
          title: "Success!",
          text: "Successfully deleted the Record",
          icon: "success",
          button: "Ok",
        });
        getElectricty();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onUpdateElec = (item) => {
    window.location = `/editEleTyp/${item._id}`;
  };

  return (
    <div>
      <div className="container">
        {/* <div className="d-flex text-end">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            </div> */}
        <div className="text-end mt-5">
          <Link to="/addEleTyp">
            <Button variant="primary">Add a New Plan</Button>
          </Link>
          <Button variant="primary ms-3">Generate a Report</Button>
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
