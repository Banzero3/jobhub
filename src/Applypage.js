import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Applypage.css' 

function Applypage() {
  const hist=useNavigate()
  const [formDetails,setFormDetails]=useState({firstName:"",lastName:"",email:"",phoneNumber:"",posFor:"",coverLetter:"",heardFrom:""})
    const formredirect=async (e)=>
    {
        e.preventDefault();

        const formData=formDetails 
        const apiUrl="http://localhost:4000/backend/user/apply"

        const options={
              method:"POST",
              headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            mode:'cors'
        }

        const res=await fetch(apiUrl,options)
        const data=await res.json()
        console.log(data)
    }

    

    const onChangeFormDetails=(e)=>{
         setFormDetails({...formDetails,[e.target.id]:e.target.value});
    }
  return (
    <div>
    <div className="container-fluid">
      <header className="row" height={100}>
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
      <div className="col-5"></div>
      <div className="row m-4" width={18}>
        <div className="col-3"></div>
        <div className="col-7">
          <div className="shadow card">
            <form className="p-4 m-1 " onSubmit={formredirect}>
              <h2 className="m-0 ">Apply Now</h2>
              <p className="abc">please fill out all required field</p>
              <div>
                <h4>Personal Details</h4>
                <hr size={3}></hr>
              </div>
              <div className="row g-2 px-4">
                <div className="col-auto m-4">
                  <label htmlFor="firstName" className="form-label abc">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name"
                    value={formDetails.firstName}
                    onChange={onChangeFormDetails}
                  />
                </div>
                <div className="col-auto m-4">
                  <label htmlFor="lastName" className="form-label abc">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Last Name"
                    value={formDetails.lastName}
                    onChange={onChangeFormDetails}
                  />
                </div>
              </div>
              <div className="row g-2 px-4 ">
                <div className="col-auto m-4">
                  <label htmlFor="email" className="form-label abc">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control "
                    id="email"
                    placeholder="example@gmail.com"
                    value={formDetails.email}
                    onChange={onChangeFormDetails}
                  />
                </div>
                <div className="col-auto  m-4">
                  <label htmlFor="phoneNumber" className="form-label abc">
                    Phone No
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="phoneNumber"
                    placeholder="Phone Number"
                    value={formDetails.phoneNumber}
                    onChange={onChangeFormDetails}
                    />
                </div>
                <div>
                  <h4>Application Details</h4>
                  <hr size={3}></hr>
                </div>
                <p className="form-label abc">position You're Applying For</p>
                <div className="p-1">
                  <input
                    type="text"
                    className="form-control"
                    id="posFor"
                    placeholder="Select a position"
                    value={formDetails.posFor}
                    onChange={onChangeFormDetails}
                  />
                  <p className="form-label abc p-1">Resume/CV</p>
                  <div className="a p-3 rounded border border-dark bg-light">
                    <div className="mb-3">
                      <input
                        className="form-control form-control-sm"
                        type="file"
                        id="File"
                      />
                      <label className="b pt-4">
                        Accepted formats: PDF,DOC,DOCX(Max=5mb)
                      </label>
                    </div>
                  </div>
                  <p className="form-label abc m-1 py-2 ">Cover Letter</p>
                  <div className="form-floating mt">
                    <textarea
                      className="form-control "
                      placeholder="Leave a comment here"
                      id="coverLetter"
                      value={formDetails.coverLetter}
                      onChange={onChangeFormDetails}
                    ></textarea>
                    <label htmlFor="coverLetter" className="form-label abc">
                      Tell us why your insterested in this position and what can
                      bring us to our team
                    </label>
                  </div>
                  <p className="form-label abc mt-2">How did you hear about us</p>
                  <div>
                    <div className="">
                      <label className="visually-hidden" htmlFor="heardFrom">
                        Preference
                      </label>
                      <select className="form-select" id="heardFrom" value={formDetails.heardFrom}  onChange={onChangeFormDetails}>
                        <option value="">Select option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="m-4">
                      <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary" >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
    </div>
  )
}

export default Applypage