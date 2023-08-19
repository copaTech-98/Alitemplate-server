const { Router } = require("express");
const { encodeToken } = require("../utils/crypt/encodeToken");

const router = Router();
router.use("/", encodeToken);

module.exports = router;
