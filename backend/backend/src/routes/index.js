const express = require("express");
const router = express.Router();
const produtoRouter = require("./produto.routes");

router.use("/produtos", produtoRouter);


module.exports = router;