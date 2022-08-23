const express = require("express");
const router = express.Router();

router
  .route("/:id")
  .get((req, res) => {
    res.render("post");
  })
  .put((req, res) => {
    res.send(`UPDATE POST WITH ID #${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`DELETE POST WITH ID #${req.params.id}`);
  });

module.exports = router;
