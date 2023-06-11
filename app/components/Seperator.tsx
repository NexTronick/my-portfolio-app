"use client";
export default function Seperator({ id = "", text = "" }) {
  return (
    <div id={id} className="w-1/2 mx-auto text-cyan-dark pt-20">
      <span className="text-2xl">{text}</span>
      <div
        style={{ height: "1px" }}
        className="w-1/2 border border-solid border-cyan-dark  translate-x-40 -translate-y-3.5 animate-pulse"
      ></div>
    </div>
  );
}
