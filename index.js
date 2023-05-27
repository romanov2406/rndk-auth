"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async () => {
    return {
        statusCode: "200",
        body: JSON.stringify(Math.random() * 999) + 'Romeo',
    };
};
exports.handler = handler;
// tsc index.ts
// mv index.js dist
