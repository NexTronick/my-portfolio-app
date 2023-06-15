import Image from "next/image";

export default function About() {
  const styleOptions = {
    position: "fixed",
    top: "50%",
    left: "50%",
    marginTop: "-50px",
    marginLeft: "-100px",
  };
  return (
    <div
      style={{ minHeight: "92vh" }}
      className="max-w-4xl mx-auto overflow-hidden w-3/4"
      id="about-container"
    >
      <div style={{ minHeight: "30vh" }}></div>
      <div className="md:flex">
        <div className="md:shrink-0 relative">
          <img
            className="h-72 w-full object-cover md:h-full md:w-72 "
            src="/img/myPic.jpg"
            alt="Picture of Natraj Padwani"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-72 w-full object-cover md:h-full md:w-72 overflow-hidden bg-gradient-to-r from-gray via-cyan to-cyan-dark opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
        </div>
        <div className="p-8" id="text-div">
          <h1 className="text-4xl text-cyan">Natraj Niranjan Padwani</h1>
          <h2 className="text-xl">Software Engineer & Web Developer</h2>
          <br />
          <p>
            I am a <span className="text-cyan-dark">fresh graduate</span> of BSC
            (Hons) Information Communications and Technology. Inspiring to be{" "}
            Software Engineer and Web Developer . I develop{" "}
            <span className="text-cyan-dark">Web & Mobile Applications</span> as
            projects for school or personal projects. I love{" "}
            <span className="text-cyan-dark">
              challenges and solving problems
            </span>
            . In spare time, exploring computer technology and learning new
            programming languages and frameworks.
          </p>
        </div>
      </div>
    </div>
  );
}
