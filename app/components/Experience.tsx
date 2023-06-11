import data from "../api/Experience/data";
export default function Experience() {
  return (
    <div className="text-gray flex justify-start pl-3 pt-20 w-1/2 mx-auto">
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
              <h3 className="text-lg font-semibold text-cyan ">{d.title}</h3>
              <h4 className="text-md font-semibold text-gray-100 ">
                {d.company}
              </h4>
              <ul className="mb-4 text-base">
                {d.descriptions.map((desc) => {
                  return <li>{desc}</li>;
                })}
              </ul>
            </li>
          );
        })}

        {/*
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-cyan dark:border-gray-900 dark:bg-gray-700 overflow-hidden">
              <div className="h-3 w-3 bg-cyan-dark"></div>
            </div>
            <time className="mb-1 text-sm  leading-none text-gray-400 dark:text-gray-500">
              June - August 2022
            </time>
            <h3 className="text-lg font-semibold text-cyan ">
              Part-time Software Engineer
            </h3>
            <h4 className="text-md font-semibold text-gray-100 ">
              Technet LTD
            </h4>
            <ul className="mb-4 text-base">
              <li>To develop metaverse meeting room.</li>
              <li>Meeting room using Unity Engine.</li>
              <li>
                Developed whiteboard functionalities such as eraser & pen.
              </li>
              <li>Developed meeting room with Multiplayer.</li>
            </ul>
          
        <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Learn more{" "}
            <svg
              className="w-3 h-3 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a> </li>*/}
      </ol>
    </div>
  );
}