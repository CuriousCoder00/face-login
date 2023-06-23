import React, { useState, useEffect } from "react";
import faceIO from "@faceio/fiojs";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [faceio, setFaceio] = useState(null);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("Facial ID")
  const navigate = useNavigate();
  useEffect(() => {
    const initializeFaceIO = async () => {
      const faceioInstance = new faceIO("fioa42f7");
      setFaceio(faceioInstance);
    };
    initializeFaceIO();
  },[]);
  
  let id;
  // Define function to handle enrollment
  const handleEnroll = async () => {
    try {
      // Call the enroll method of the FaceIO instance with necessary options
      const response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "example@gmail.com",
          pin: "12345",
        },
      });
      id = response.facialId;
      const node = document.createElement("h4");
      const textNode = document.createTextNode(id);
      node.appendChild(textNode);
      document.getElementById("appendChild").appendChild(node);
      // Log enrollment details to the console
      console.log({
        "Unique Facial ID": response.facialId,
        "Enrollment Date": response.timestamp,
        "Gender": response.details.gender,
        "Age Approximation": response.details.age,
      });
    } catch (error) {
      // Set error state if enrollment fails
      setError("Enrollment failed: " + error.message);
    }
  };

  let enteredFacialID;
  const onClickChange = () => {
    setInputValue("");
  }

  const handleOnChange = (e) => {
    enteredFacialID = e.target.value;
    setInputValue(e.target.value);
  }

  const handleLogin = async () => {
      if(enteredFacialID===id){
        navigate("/loginSuccess");
      } else{
        navigate("/");
      }
  };

  return (
    <div id="appendChild" className="text-center my-5">
      <h5>Face Authentication by FaceIO</h5>
      <p className="card-text">Login via Face Recognition</p>
      <button
        type="button"
        className="btn btn-primary my-3"
        onClick={handleEnroll}
      >
        Authenticate via Face Recognition
      </button>
      <br />
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Login
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Login using Provided Facial ID</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="facialIdInput" className="form-label">Enter Your Generated Facial ID</label>
                  <input type="text" className="form-control" id="facialIdInput" name="facialIdInput" value={inputValue} onChange={handleOnChange} onFocus={onClickChange}/>
                </div>
              </form>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default Login;
