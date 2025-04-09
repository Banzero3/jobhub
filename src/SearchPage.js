import React, { useState } from "react";

export default function SearchPage() {
  const [filters, setFilters] = useState({
    search: "",
    region: "",
    jobType: "",
    salary: 0,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="container-fluid">
      <header style={{ height: "100px" }}>
        <div className="container-fluid" style={{ fontFamily: "Arial" }}>
          <nav
            className="navbar navbar-expand-lg navbar-light p-3"
            style={{ backgroundColor: "#37ABC8" }}
          >
            <a className="navbar-brand" href="#">
              <b>JobHub</b>
            </a>
            <div className="d-flex ms-auto">
              <button className="btn text-black">Back to Home</button>
            </div>
            <div className="ms-2">
              <button className="btn text-black">Log in</button>
            </div>
          </nav>
        </div>
      </header>
      <div className="row">
        <div className="col-xl-3 p-3 m-4">
          <div className="rounded-3 p-3 m-2 shadow">
            <div className="filter-group">
              <h6 className="mb-3">Filters</h6>
              <div className="mb-3">
                <label htmlFor="search" className="form-label">
                  Search
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="search"
                  value={filters.search}
                  onChange={handleChange}
                  placeholder="Job, Title, Company or Keyword"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="region" className="form-label">
                  Region
                </label>
                <select
                  className="form-select"
                  id="region"
                  value={filters.region}
                  onChange={handleChange}
                  style={{ width: "150px" }}
                >
                  <option value="">All Categories</option>
                  <option value="1">Category 1</option>
                  <option value="2">Category 2</option>
                  <option value="3">Category 3</option>
                </select>
              </div>
              <div className="mb-2">
                <label htmlFor="jobType" className="form-label">
                  Job Type
                </label>
                <select
                  className="form-select"
                  id="jobType"
                  value={filters.jobType}
                  onChange={handleChange}
                  style={{ width: "150px" }}
                >
                  <option value="">All Categories</option>
                  <option value="1">Category 1</option>
                  <option value="2">Category 2</option>
                  <option value="3">Category 3</option>
                </select>
              </div>
              <div className="mb-2">
                <label htmlFor="industry" className="form-label">
                  Industry
                </label>
                <select
                  className="form-select"
                  id="industry"
                  value={filters.industry}
                  onChange={handleChange}
                  style={{ width: "150px" }}
                >
                  <option value="">All Categories</option>
                  <option value="1">Category 1</option>
                  <option value="2">Category 2</option>
                  <option value="3">Category 3</option>
                </select>
              </div>
              <div className="mb-2">
                <label htmlFor="salary" className="form-label">
                  Salary Range
                </label>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="500000"
                  step={1}
                  id="salary"
                  value={filters.salary}
                  onChange={handleChange}
                />
                <div className="d-flex justify-content-between">
                  <span className="text-muted">$10k</span>
                  <span className="text-muted">$500k</span>
                </div>
              </div>
            </div>
            <button className="btn btn-outline-dark w-100">
              Apply Filters
            </button>
          </div>
        </div>
        <div className="col-xl-8 p-3 m-4">
          <div className="card mb-3 w-100 shadow">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://via.placeholder.com/150"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Software Engineer</h5>
                  <p className="card-text">
                    Join a fast-growing team working on cutting-edge AI
                    technologies in a hybrid work environment.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      San Francisco · Full-time
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
