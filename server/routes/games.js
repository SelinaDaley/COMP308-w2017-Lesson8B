// modules required for routing
let express = require('express');
let router = express.Router();

// define the game model
let game = require('../models/games')

// require the users controller for authentication
let usersController = require('../controllers/users');

// require the games controller to access games collection in findById
let gamesController = require('../controllers/games');

/* GET games List page. READ */
router.get('/', usersController.RequireAuth, (req, res, next) => {
  gamesController.ReadGameList(req, res);
});

// GET the Game Details page in order to add a new Game
router.get('/add', usersController.RequireAuth, (req, res, next) => {
  gamesController.DisplayAdd(req, res);
  // POST process the Game Details page and create a new Game - CREATE
}).post('/add', usersController.RequireAuth, (req, res, next) => {
  gamesController.CreateGame(req, res);
});

// GET the Game Details page in order to edit a new Game
router.get('/:id', usersController.RequireAuth, (req, res, next) => {
  gamesController.DisplayEdit(req, res);
  // POST - process the information passed from the details form and update the document
}).post('/:id', usersController.RequireAuth, (req, res, next) => {
  gamesController.UpdateGame(req, res);
});

// GET - process the delete by user id
router.get('/delete/:id', usersController.RequireAuth, (req, res, next) => {
  gamesController.DeleteGame(req, res);
});

module.exports = router;