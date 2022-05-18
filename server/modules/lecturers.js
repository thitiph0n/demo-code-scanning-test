const express = require("express");
const router = express.Router();
const pool = require("../helpers/database");
const authorization = require("../helpers/authorization");
const hasRole = require("../helpers/hasRole");

//authorize before access
router.use(authorization);

//list all lecturers
router.get("/", hasRole([2, 3]), async (req, res) => {
  try {
    const queryResult = await pool.query(
      'SELECT * FROM employee_info WHERE position = "Lecturer"'
    );
    res.json({
      requestedTime: Date.now(),
      requestedBy: req.authData.sub,
      payload: queryResult,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: { message: error.sqlMessage, code: error.code } });
  }
});

//get info of lecturer
router.get("/:employeeId/info", hasRole([2]), async (req, res) => {
  try {
    const queryResult = await pool.query(
      "SELECT * FROM employee_info WHERE employeeId = ?",
      req.params.employeeId
    );
    res.json({
      requestedTime: Date.now(),
      requestedBy: req.authData.sub,
      payload: queryResult,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: { message: error.sqlMessage, code: error.code } });
  }
});

module.exports = router;
