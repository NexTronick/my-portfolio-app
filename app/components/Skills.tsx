import data from "../api/Skills/data";
export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto md:w-3/5 w-4/5 mt-12" id="skills">
      <div className=" grid md:grid-cols-2 gap-24 text-sm">
        <div>
          <h2 className=" text-cyan text-xl">Technical Skills</h2>
          <ul className="mt-4">
            {data.technical.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10 md:mt-0">
          <h2 className=" text-cyan text-xl">Soft Skills</h2>
          <ul className="mt-4">
            {data.soft.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>

        {/* <div className="mt-10 md:mt-0">
          <h2 className=" text-cyan text-xl">Language</h2>
          <ul className="mt-4">
            {data.lang.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
}
