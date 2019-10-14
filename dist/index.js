"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const replace_1 = require("./replace");
const joiner = (object, input, config) => {
    const out = JSON.parse(replace_1.default(input, JSON.stringify(object)));
    return out;
};
exports.default = joiner;
