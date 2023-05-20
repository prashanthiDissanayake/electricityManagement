const router = require("express").Router();
// const { findById } = require("../models/Electricityy");
const RequestElectro = require("../models/RequestElectro");

//save requests
router.post("/add", async (req, res) => {
  try {
    const requestelec = new RequestElectro(req.body);
    const SavedRequests = await requestelec.save();
    if (SavedRequests) {
      res.status(201).send({ message: "success", data: SavedRequests });
    } else {
      res.status(400).send({ message: "failed", data: SavedRequests });
    }
    console.log("result , ", SavedRequests);
  } catch (err) {
    console.log("error in careere ", err);
    res.status(500).send({ message: "failed", data: err });
  }
});

router.get("/viewelectricityRequests", async (req, res) => {
  try {
    const Electricityiview = await RequestElectro.find(req.params);
    res.json(Electricityiview);
    console.log("result , ", Electricityiview);
  } catch (err) {
    console.log("error in retriew electricityy", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

//search for data using name
router.get("/viewelectricityRequests/:fullName", async (req, res) => {
  try {
    const findByName = await RequestElectro.findOne(req.params);
    res.json(findByName);
  } catch (err) {
    console.log("error in get data", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

//Delete
router.delete("/delete/:id", async (req, res) => {
  try {
    const deleteElectricity = await RequestElectro.findByIdAndRemove(
      req.params.id
    );
    res.json(deleteElectricity);
    console.log("Deleted!");
  } catch (err) {
    console.log("error in get data", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

module.exports = router;
