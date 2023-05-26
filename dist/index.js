"use strict";
// import { random } from "lodash";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
var handler = function () {
    return {
        statusCode: 200,
        body: JSON.stringify(Math.random() * 999),
    };
};
exports.handler = handler;
//# sourceMappingURL=index.js.map