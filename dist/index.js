"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const crmRoutes_1 = require("./src/routes/crmRoutes");
const createMessage_1 = require("./src/controllers/createMessage");
const settings_1 = require("./settings");
const app = express();
// class instance to print server start message
let messages = new createMessage_1.default(settings_1.Settings.PORT);
// const dataConnection = (user: string, password: string): string => {
// //:string means it returns a string
//     return `mongodb://${user}:${password}@ds217078.mlab.com:17078/contactmanagerdb`
// }
// let database = dataConnection(Settings.mlabUser, Settings.mlabPass);
const database = `mongodb://127.0.0.1:27017/contactmanagerdb`;
//array
// let simpleArray: number[] = [1,2,3,4]
// mongoose connection
mongoose.connect(database, {
    useMongoClient: true
});
// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
crmRoutes_1.default(app);
// interface Name {
//     firstName: string
// }
// function with interface
// const nameCreator = (name: Name): string => `Hello ${name.firstName},`;
// let myName = {firstName: 'Samuel'};
// generic 
function nameCreator(name) {
    return name;
}
let myName = nameCreator('Samuel');
// serving static files
app.use(express.static('public'));
app.get('/', (req, res) => res.send(messages.messagePrint()));
app.listen(settings_1.Settings.PORT, () => console.log(myName, messages.messagePrint()));
