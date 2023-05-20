const router = require("express").Router();
const { findById } = require("../models/Electricityy");
const Electricityy = require("../models/Electricityy");

//insert Data
router.post("/add", async (req, res) => {
  try {
    const electricityy = new Electricityy(req.body);
    const savedElectricity = await electricityy.save();
    if (savedElectricity) {
      res.status(201).send({ message: "success", data: savedElectricity });
    } else {
      res.status(400).send({ message: "failed", data: savedElectricity });
    }
    console.log("result , ", savedElectricity);
  } catch (err) {
    console.log("error in careere ", err);
    res.status(500).send({ message: "failed", data: err });
  }
});

//search for data using an ID
router.get("/electricityy/:id", async (req, res) => {
  try {
    const findById = await Electricityy.findById(req.params.id);
    res.json(findById);
  } catch (err) {
    console.log("error in get data", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

//search for data using name
router.get("/electricityy/find/:name", async (req, res) => {
  try {
    const findByName = await Electricityy.findOne(req.params);
    res.json(findByName);
  } catch (err) {
    console.log("error in get data", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

//retriew all data from db
router.get("/electricityyview", async (req, res) => {
  try {
    const Electricityiview = await Electricityy.find(req.params);
    res.json(Electricityiview);
    console.log("result , ", Electricityiview);
  } catch (err) {
    console.log("error in retriew electricityy", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

router.get("/view", async (_, res) => {
  res.json(await Electricityy.find({}));
});

//Delete
router.delete("/delete/:id", async (req, res) => {
  try {
    const deleteElectricity = await Electricityy.findByIdAndRemove(req.params.id);
    res.json(deleteElectricity);
    console.log("Deleted!");
  } catch (err) {
    console.log("error in get data", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const deleteElectricity = await Electricityy.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(deleteElectricity);
    console.log("result , ", deleteElectricity);
  } catch (err) {
    console.log("error in getting electricity details", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

module.exports = router;
