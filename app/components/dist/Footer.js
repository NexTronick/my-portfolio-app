"use strict";
exports.__esModule = true;
function Footer() {
    var year = new Date().getFullYear();
    return (React.createElement("footer", { className: "mt-32 my-5 text-gray mx-auto w-3/4" },
        React.createElement("hr", { className: "my-6 border-gray sm:mx-auto dark:border-gray-700 lg:my-8 " }),
        React.createElement("span", { className: "block text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-4 text-center" },
            "\u00A9 ",
            year + " ",
            React.createElement("a", { href: "/", className: "hover:underline hover:text-white" }, "Natraj Padwani\u2122"),
            ". All Rights Reserved.")));
}
exports["default"] = Footer;
