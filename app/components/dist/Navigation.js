"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var IconsMobile_1 = require("./IconsMobile");
function Navigation(_a) {
    var _b = _a.font_lobster_two, font_lobster_two = _b === void 0 ? "" : _b;
    var _c = react_1.useState(false), navbar = _c[0], setNavbar = _c[1];
    var toggleNavBar = function () {
        if (navbar) {
            setNavbar(false);
        }
    };
    return (React.createElement("header", { className: "top-0 z-50 fixed inset-x-0", id: "header-nav" },
        React.createElement("div", { className: "relative" },
            React.createElement("nav", { className: "top-0 z-50 fixed inset-x-0 w-full  drop-shadow-md" },
                React.createElement("div", { className: "justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 w-full" },
                    React.createElement("div", null,
                        React.createElement("div", { className: "flex items-center justify-between py-3 md:py-5 md:block overflow-visible" },
                            React.createElement("a", { href: "/", onClick: toggleNavBar },
                                React.createElement("h2", { className: "text-3xl text-cyan overflow-visible " + font_lobster_two }, "NP")),
                            React.createElement("div", { className: "md:hidden" },
                                React.createElement("button", { className: "p-2 text-cyan-dark rounded-md hover:text-cyan-light outline-none focus:text-cyan", onClick: function () { return setNavbar(!navbar); } }, navbar ? (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-6 h-6 text-cyan hover:text-cyan-light outline-none focus:text-cyan", viewBox: "0 0 20 20", fill: "currentColor" },
                                    React.createElement("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }))) : (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-6 h-6 text-cyan hover:text-cyan-light outline-none focus:text-cyan", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 },
                                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16M4 18h16" }))))))),
                    React.createElement("div", null,
                        React.createElement("div", { className: "flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 " + (navbar ? "block" : "hidden") },
                            React.createElement("ul", { className: "text-cyan text-sm items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0" },
                                React.createElement("li", { className: "hover:text-cyan-dark" },
                                    React.createElement(link_1["default"], { href: "#about", onClick: toggleNavBar }, "About")),
                                React.createElement("li", { className: "hover:text-cyan-dark" },
                                    React.createElement(link_1["default"], { href: "#experience", onClick: toggleNavBar }, "Experience")),
                                React.createElement("li", { className: "hover:text-cyan-dark" },
                                    React.createElement(link_1["default"], { href: "#education", onClick: toggleNavBar }, "Education")),
                                React.createElement("li", { className: "hover:text-cyan-dark" },
                                    React.createElement(link_1["default"], { href: "#projects", onClick: toggleNavBar }, "Projects")),
                                React.createElement("li", { className: "hover:text-cyan-dark" },
                                    React.createElement(link_1["default"], { href: "#skills", onClick: toggleNavBar }, "Skills")),
                                React.createElement("li", { className: "text-cyan border-cyan-dark border-solid border-2 hover:border-dotted hover:text-cyan-dark text-lg px-2 pl-2 " +
                                        (navbar ? "inline-block" : "") },
                                    React.createElement(link_1["default"], { href: "/Natraj Niranjan Padwani Resume.pdf", target: "_blank", onClick: toggleNavBar }, "Resume")),
                                !navbar ? ("") : (React.createElement("li", { className: "" },
                                    React.createElement(IconsMobile_1["default"], null)))))))))));
}
exports["default"] = Navigation;
