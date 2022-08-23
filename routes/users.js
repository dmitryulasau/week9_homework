const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});
// DYNAMIC
router
  .route("/:id")
  .get((req, res) => {
    // console.log(req.user);
    res.render("user");
  })
  .put((req, res) => {
    res.send(`UPDATE USER WITH ID #${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`DELETE USER WITH ID #${req.params.id}`);
  });

// const users = [{ name: "Dylan" }, { name: "Andre" }];
// router.param("id", (req, res, next, id) => {
//   req.user = users[id];
//   next();
// });

module.exports = router;
