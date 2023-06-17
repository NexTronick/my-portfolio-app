import data from "../api/Projects/data";
export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto w-3/5" id="proj">
      {data.map((d, i) => {
        return (
          <div className="mt-20 lg:flex proj-con">
            <div className="w-full">
              <img
                className="w-full"
                src={d.image}
                alt={"Picture of " + d.title}
              />
            </div>
            <div className="pl-8 pt-3 md:w-3/4" id="text-div">
              <h1 className="text-xl md:text-2xl text-cyan">{d.title}</h1>
              <h2 className=" text-base md:text-lg text-gray-100">
                {d.developed} | {d.type}
              </h2>
              <br />
              <p className="text-gray">{d.shortDesc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
