import data from "../api/Education/data";
export default function Education() {
  return (
    <div
      className="text-gray flex justify-start pl-3 pt-20 w-1/2 mx-auto sm:text-xs"
      id="edu"
    >
      <ol className="relative border-l border-gray">
        {data.map((d) => {
          return (
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-cyan dark:border-gray-900 dark:bg-gray-700 overflow-hidden">
                <div className="h-3 w-3 bg-cyan-dark"></div>
              </div>
              <time className="mb-1 text-sm  leading-none text-gray-400 dark:text-gray-500">
                {d.time}
              </time>
              <h3 className="text-lg font-semibold text-cyan sm:text-md">
                {d.title}
              </h3>
              <h4 className="text-md font-semibold text-gray-100 ">
                {d.qualification}
              </h4>
              <ul className="mb-4 text-base">
                {d.descriptions.map((desc) => {
                  return <li>{desc}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
