"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    
  };
  return (
    <main className="pt-24 w-full flex justify-center text-gray">
      <div className="w-full">
        <div className=" bg-opacity-1 bg-gradient-to-b from-cyan to-cyan-dark h-96"></div>
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
          <div className="bg-blue-dark w-full shadow rounded p-8 sm:p-12 -mt-72 ">
            <p className="text-3xl font-bold leading-7 text-center">
              Contact me
            </p>
            <form action="" method="post">
              <div className="md:flex items-center mt-12">
                <div className="w-full md:w-1/2 flex flex-col">
                  <label className="font-semibold leading-none">Name</label>
                  <input
                    type="text"
                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-cyan-dark mt-4 bg-gray-100 border rounded border-gray-200 text-black"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="font-semibold leading-none">Email</label>
                  <input
                    type="email"
                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-cyan-dark mt-4 bg-gray-100 border rounded border-gray-200 text-black"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="md:flex items-center mt-12">
                <div className="w-full md:w-1/2 flex flex-col">
                  <label className="font-semibold leading-none">Subject</label>
                  <input
                    type="text"
                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-cyan-dark mt-4 bg-gray-100 border rounded border-gray-200 text-black"
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="font-semibold leading-none">Phone</label>
                  <input
                    type="text"
                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-cyan-dark mt-4 bg-gray-100 border rounded border-gray-200 text-black"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col mt-8">
                  <label className="font-semibold leading-none">Message</label>
                  <textarea
                    typeof="text"
                    className="h-40 text-base leading-none text-gray-900 p-3 border focus:oultine-none focus:border-cyan-dark mt-4 bg-gray-100 rounded text-black"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <button
                  className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-cyan-dark rounded hover:bg-cyan focus:ring-2 focus:ring-offset-2 focus:ring-cyan-dark focus:outline-none"
                  onClick={submitForm}
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
