import React, { useState } from "react";
export default function JobProviderPage() {
  const [job, setJob] = useState({
    companyName: "",
    hrName: "",
    hrEmail: "",
    hrPhone: "",
    jobTitle: "",
    jobDescription: "",
    numbYrs: "",
    vacancy: "",
    salary:"",
    requirements: "",
    companyAddress: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "hrName") {
      setJob({ ...job, [name]: value.toUpperCase() });
    } else if (name === "companyLogo") {
      const file = files[0];
      if (file && file.size <= 51200) {
        setJob({ ...job, companyLogo: file });
      } else {
        alert("Logo must be less than or equal to 50KB");
      }
    } else {
      setJob({ ...job, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
        const apiUrl="http://localhost:4000/backend/user/post"

        const options={
              method:"POST",
              headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(job),
            mode:'cors'
        }

      const res=await fetch(apiUrl,options)
      const data=await res.json()
      console.log(data)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(job.hrPhone)) {
      alert("Phone number must be exactly 10 digits");
      return;
    }

    console.log("Job Posted:", job);
  };

  return (
    <div className="bg-gray-100">
      <header className="h-24">
        <div className="container-fluid mx-auto">
          <nav className="navbar p-3 flex items-center justify-between bg-[#37ABC8]">
            <a className="text-xl font-bold text-white no-underline" href="#">
              JobHub
            </a>
            <div className="flex items-center space-x-2">
              <button className="btn text-black">Back to Home</button>
              <button className="btn text-black">Log in</button>
            </div>
          </nav>
        </div>
      </header>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-center mb-6">
            Post a New Job
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Company Name
                </label>
                <input
                  name="companyName"
                  value={job.companyName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  HR Name (Uppercase)
                </label>
                <input
                  name="hrName"
                  value={job.hrName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 uppercase"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  HR Email
                </label>
                <input
                  type="email"
                  name="hrEmail"
                  value={job.hrEmail}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  HR Phone (10 digits)
                </label>
                <input
                  type="tel"
                  name="hrPhone"
                  value={job.hrPhone}
                  onChange={handleChange}
                  maxLength="10"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">
                Company Address
              </label>
              <textarea
                name="companyAddress"
                value={job.companyAddress}
                onChange={handleChange}
                rows={2}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">
                Company Logo (Max 50KB)
              </label>
              <input
                type="file"
                name="companyLogo"
                accept="image/*"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Number of vacancy
                </label>
                <input
                  name="vacancy"
                  value={job.vacancy}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Number Of Years
                </label>
                <input
                  name="numbYrs"
                  value={job.numbYrs}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-500">
                Salary
              </label>
              <input
                name="Salary"
                value={job.salary}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">
                JobTitle
              </label>
              <input
                name="jobTitle"
                value={job.jobTitle}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 uppercase"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">
                Job Description
              </label>
              <textarea
                name="jobDescription"
                value={job.jobDescription}
                onChange={handleChange}
                rows={4}
                placeholder="Details of Job. . ."
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">
                Requirements
              </label>
              <textarea
                name="requirements"
                value={job.requirements}
                onChange={handleChange}
                rows={3}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Ex: c++,java,python..etc"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Post Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
