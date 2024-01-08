"use strict";
exports.__esModule = true;
var bs_1 = require("react-icons/bs");
var md_1 = require("react-icons/md");
function Icons() {
    return (React.createElement("div", { className: "fixed z-30 bottom-0", id: "d-icons", style: { left: "5%" } },
        React.createElement("div", null,
            React.createElement("a", { href: "https://github.com/NexTronick", target: "_blank", className: "max-h-10" },
                React.createElement(bs_1.BsGithub, { size: "25", className: "text-cyan hover:text-cyan-dark my-10 hover:-translate-y-1" })),
            React.createElement("a", { href: "https://www.linkedin.com/in/natraj-niranjan-padwani-6587b1223/", target: "_blank", className: "max-h-10" },
                React.createElement(bs_1.BsLinkedin, { size: "25", className: "text-cyan hover:text-cyan-dark my-10 hover:-translate-y-1" })),
            React.createElement("a", { href: "https://twitter.com/PadwaniNatraj", target: "_blank", className: "max-h-10" },
                React.createElement(bs_1.BsTwitter, { size: "25", className: "text-cyan hover:text-cyan-dark my-10 hover:-translate-y-1" })),
            React.createElement("a", { href: "https://www.instagram.com/natrajpadwani.develops/", target: "_blank", className: "max-h-10" },
                React.createElement(bs_1.BsInstagram, { size: "25", className: "text-cyan hover:text-cyan-dark my-10 hover:-translate-y-1" })),
            React.createElement("a", { href: "mailto:natrajpadwani.contact@gmail.com", className: "max-h-10" },
                React.createElement(md_1.MdContactPage, { size: "30", className: "text-cyan hover:text-cyan-dark mt-10 mb-4 hover:-translate-y-1" })),
            React.createElement("a", { href: "https://wa.me/64909653", target: "_blank", className: "max-h-10" },
                React.createElement(bs_1.BsWhatsapp, { size: "25", className: "text-cyan hover:text-cyan-dark mt-10 ml-1 mb-4 hover:-translate-y-1", title: "Phone and WhatsApp number: 64909653" }))),
        React.createElement("div", { className: "bg-cyan-dark h-32 w-1 mx-auto" })));
}
exports["default"] = Icons;
