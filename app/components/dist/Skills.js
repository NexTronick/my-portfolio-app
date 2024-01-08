"use strict";
exports.__esModule = true;
var data_1 = require("../api/Skills/data");
function Skills() {
    return (React.createElement("div", { className: "max-w-4xl mx-auto md:w-3/5 w-4/5 mt-12", id: "skills" },
        React.createElement("div", { className: " grid md:grid-cols-2 gap-24 text-sm" },
            React.createElement("div", null,
                React.createElement("h2", { className: " text-cyan text-xl" }, "Technical Skills"),
                React.createElement("ul", { className: "mt-4" }, data_1["default"].technical.map(function (skill, index) { return (React.createElement("li", { key: index }, skill)); }))),
            React.createElement("div", { className: "mt-10 md:mt-0" },
                React.createElement("h2", { className: " text-cyan text-xl" }, "Soft Skills"),
                React.createElement("ul", { className: "mt-4" }, data_1["default"].soft.map(function (lang, index) { return (React.createElement("li", { key: index }, lang)); }))))));
}
exports["default"] = Skills;
