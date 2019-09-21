import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import Messanger from './src/controllers/createMessage';
import { Settings } from './settings'
const app = express(); 

// class instance to print server start message
let messages = new Messanger(Settings.PORT)

// const dataConnection = (user: string, password: string): string => {
// //:string means it returns a string
//     return `mongodb://${user}:${password}@ds217078.mlab.com:17078/contactmanagerdb`
// }

// let database = dataConnection(Settings.mlabUser, Settings.mlabPass);


const database: string = `mongodb://127.0.0.1:27017/contactmanagerdb`

//array
// let simpleArray: number[] = [1,2,3,4]


// mongoose connection
mongoose.connect(database, {
    useMongoClient: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// interface Name {
//     firstName: string
// }

// function with interface
// const nameCreator = (name: Name): string => `Hello ${name.firstName},`;

// let myName = {firstName: 'Samuel'};

// generic: you can add any type of parameter e.g strings, number

// declaration merging, typescript merges properties of interfaces of the same name

function nameCreator<T> (name: T): T {
    return name
} 

let myName = nameCreator<string>('Samuel')




// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(messages.messagePrint())
);

app.listen(Settings.PORT, () =>
    console.log(myName,messages.messagePrint())
);