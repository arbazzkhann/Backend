//external modules
const express = require('express')

//local modules
const { 
    addHouseGET, 
    addHousePOST, 
    hostRegisteredHouses, 
    editHouseGET, 
    editHousePOST, 
    deleteHousePOST 
} = require('../../controllers/hostController');


//routers from express
const hostRouter = express.Router();

//add-house routers
hostRouter.get('/host/add-house', addHouseGET);
hostRouter.post('/host/add-house', addHousePOST);

//host registered houses router
hostRouter.get('/host/registered-houses', hostRegisteredHouses);

//edit house routers
hostRouter.get('/host/edit-house/:houseId', editHouseGET);
hostRouter.post('/host/edit-house', editHousePOST);

//delete house routers
hostRouter.post('/host/delete-house/:houseId', deleteHousePOST);


//function export
module.exports = hostRouter;