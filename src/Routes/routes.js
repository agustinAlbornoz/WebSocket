const express = require("express");
const { Router } = express;
const router = Router();
const Controller = require("../Controller/product.controller");
const MessagesController = require("../Controller/messages.controller");

// return all products
router.get("/", (req, res) => {
  res.render("lista", { datos: Controller.getAll() });
});

// return a product by id
router.get("/:id", (req, res) => {
  const {id} = req.params;
  res.send(Controller.find(id));
});

// add a new product
router.post("/", (req, res, ) => {
  Controller.create(req.body)
  res.redirect("/");
});

//add a new message
router.post("/message", (req, res) => {
  MessagesController.add(req.body);
  res.redirect("/");
});

// update a product
router.put("/:id", (req, res) => {
  const {id} = req.params
  const body = req.body
  res.send(Controller.update(id, body));
});

// delete a product
router.delete("/:id", (req, res) => {
  res.send(Controller.remove(req.params.id));
})


module.exports = router;