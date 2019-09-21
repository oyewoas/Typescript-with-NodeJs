"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Messanger {
    constructor(port) {
        this.messagePrint = () => `server is running on port ${this.port}`;
        this.port = port;
    }
}
exports.default = Messanger;
