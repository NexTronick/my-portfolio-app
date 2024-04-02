"use strict";
exports.__esModule = true;
function About() {
    var styleOptions = {
        position: "fixed",
        top: "50%",
        left: "50%",
        marginTop: "-50px",
        marginLeft: "-100px"
    };
    return (React.createElement("div", { style: { minHeight: "92vh" }, className: "max-w-4xl mx-auto overflow-hidden w-3/4", id: "about-container" },
        React.createElement("div", { style: { minHeight: "30vh" }, className: "about-div-h" }),
        React.createElement("div", { className: "md:flex" },
            React.createElement("div", { className: "md:shrink-0 relative" },
                React.createElement("img", { className: "h-72 w-full object-cover md:h-full md:w-72 ", src: "/img/myPic.jpg", alt: "Picture of Natraj Padwani" }),
                React.createElement("div", { className: "absolute bottom-0 left-0 right-0 top-0 h-72 w-full object-cover md:h-full md:w-72 overflow-hidden bg-gradient-to-r from-gray via-cyan to-cyan-dark opacity-0 transition duration-300 ease-in-out hover:opacity-70" })),
            React.createElement("div", { className: "p-8", id: "text-div" },
                React.createElement("h1", { className: "text-4xl text-cyan" }, "Natraj Niranjan Padwani"),
                React.createElement("h2", { className: "text-xl" }, "Software Engineer"),
                React.createElement("br", null),
                React.createElement("p", null,
                    "An Software Engineer that develops mobile/web applications. Currently working as",
                    " ",
                    React.createElement("span", { className: "text-cyan-dark" }, "Full Stack Web Developer"),
                    " for an start up company to lead their development. Hobbies are to",
                    " ",
                    React.createElement("span", { className: "text-cyan-dark" }, "learn, improve, and grow"),
                    " as developer or an human being. In spare time, developing fun projects and exploring computer technology to keep learning new programming languages and frameworks.")))));
}
exports["default"] = About;
