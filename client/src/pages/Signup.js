import React, { useEffect } from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Signup = () => {
  const [voterId, setVoterId] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [number, setNumber] = useState("");
  // const [data, setData] = useState({
  //   voterId: "",
  //   aadhaar: "",
  //   number: "",
  // })
  const handleSignup = async(voterId,aadhaar,number) => {
    console.log(voterId, aadhaar, number);
    console.log("clicked");
   
    try{
    const res = await axios.post("http://localhost:8000/api/v1/user/signup",{voterId, aadhaar, number});
    console.log(res);
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    console.log(voterId, aadhaar, number);
  }, [voterId, aadhaar, number])
  return (
    <>
      <Meta title={"Sign Up"} />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="Voter ID"
                  name="voterId"
                  placeholder="Voter ID No."
                  onChange={(e) =>
                    setVoterId(e.target.value)
                  }
                />
                <CustomInput
                  type="Aadhar"
                  name="aadhaar"
                  placeholder="Aadhar No."
                  onChange={(e) => setAadhaar(e.target.value)}
                />
                <CustomInput
                  type="phone"
                  name="number"
                  placeholder="Phone No."
                  onChange={(e) =>
                    setNumber(e.target.value)
                  }
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">
                      <Link
                        to="/otp"
                        style={{ color: "#ffffff" }}
                        className="text-decoration-none"
                        onClick={()=>handleSignup(voterId,aadhaar,number)}
                      >
                        SignUp
                      </Link>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
