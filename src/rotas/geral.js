const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const mysql = require('mysql');
const appRoot = require('app-root-path');

router.use(express.static(appRoot + '/public'));


// HOME DO GAME
router.get('/', function (req, res) {

  res.sendFile(appRoot + '/src/game.html');
  
});

// LOGIN REQUISIÇÃO
router.post('/login', function (req, res) {

//   res.sendFile(appRoot + '/src/pages/login.html');
});


module.exports = router;
