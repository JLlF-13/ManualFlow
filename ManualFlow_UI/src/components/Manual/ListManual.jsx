import React, { useState, useTransition, useEffect } from "react";
import { Link } from "react-router-dom";

const apiUrl = process.env.API_URL;

export const ListManual = () => {
  const [programs, setPrograms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/programs/`, {
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        method: "GET",
      });
      const jsonData = await response.json();
      console.log(jsonData)
      return jsonData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    startTransition(async () => {
      const data = await fetchData();
      setPrograms(data);
    });
  }, []);

  const filteredPrograms = programs.filter(program =>
    program.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white p-8 bg-base-200">
      <div className="relative w-full p-6 z-50 flex flex-col items-center">
        <h1 className="text-2xl font-semibold text-center">Browse Our Manuals</h1>
        <div className="w-full max-w-md mt-4">
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Search for a program..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {isPending ? (
        <div className="flex items-center justify-center mt-8">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="border border-gray-600 bg-black/30 shadow-md p-4 rounded-lg">
            <div className="relative w-full h-20 flex items-center justify-center rounded p-2">
              <div
                className="relative z-10 w-24 h-24 text-purple-500 flex items-center justify-center"
                dangerouslySetInnerHTML={{ __html: program.logo_svg }}
              />
            </div>
            <Link
              to={`/view/manual/${program.id}`}
              className="btn bg-black-700 hover:bg-black-800 w-full text-center py-2 text-white font-bold mt-3"
            >
              {program.name}
            </Link>
          </div>
          ))}
        </div>
      )}
    </section>
  );
};
