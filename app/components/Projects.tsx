import data from "../api/Projects/data";
export default function Projects() {
  return (
    <div
      className="text-gray flex justify-start pl-3 pt-20 w-1/2 mx-auto"
      id="proj"
    >
      <div className="relative">
        {data.map((d) => {
          return (
            <div className="my-9 mb-20">
              <img
                src={d.image}
                alt={"Picture of " + d.title}
                className="float-left min-h-64"
              />
              <div className="float-right">
                <h3 className=" text-lg font-semibold text-cyan">{d.title}</h3>
                <h4 className="text-md font-semibold text-gray-100 ">
                  {d.type} | {d.developed}
                </h4>
                <p>{d.description}</p>
              </div>
              <br />
              <div className="h-20 fill-div"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
