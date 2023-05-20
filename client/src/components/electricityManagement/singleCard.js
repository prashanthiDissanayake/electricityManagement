import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import axios from "axios";
import swal from "sweetalert";
import electroIMG from "../../Assets/images/elec.png";

export default function SingleCard() {
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

  return (
    <>
      <div className="container">
        <div className="row">
          {electricityList?.map((item, index) => {
            return (
              <div className="col-md-4">
                <Card>
                  <Card.Img variant="top" src={electroIMG} />
                  <Card.Body>
                    <Card.Title>{item.electricityType}</Card.Title>
                    <Card.Text> {item.description}</Card.Text>
                    <Card.Text>PRICE: LKR. {item.price}/=</Card.Text>
                    <Button variant="primary">ADD NOW</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      ;
    </>
  );
}
