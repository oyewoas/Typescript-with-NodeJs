export default class Messanger {
    port: number;

    constructor(port) {
        this.port = port;
    }

    messagePrint = () => `server is running on port ${this.port}`
}

// can contain methods with the same name in different namespaces
// namespace Messagespace {
//     export class Messanger {
//         port: number;
    
//         constructor(port) {
//             this.port = port;
//         }
    
//         messagePrint = () => `server is running on port ${this.port}`
//     }
    
// }