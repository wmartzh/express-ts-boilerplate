"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExampleController {
    helloWorld(_req, res) {
        res.send("Hello world");
    }
}
exports.default = new ExampleController();
