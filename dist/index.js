"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
var lodash_1 = require("lodash");
var handler = function () {
    return {
        statusCode: 200,
        body: JSON.stringify((0, lodash_1.random)(999)),
    };
};
exports.handler = handler;
