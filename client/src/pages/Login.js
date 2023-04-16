import React from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [number, setNumber] = useState("");
  const handlelogin = async (e) => {
     console.log(number);
    try{
      const res = await axios.post("http://localhost:8000/api/v1/user/login",{number});
    }
    catch(err){
    console.log(err);
    }

  }
  return (
    <>
      <Meta title={"Login"} />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="voterid"
                  name="voterId"
                  placeholder="Voter ID No."
                  onChange={(e) => setNumber(e.target.value)}
                />
                {/* <CustomInput
                  type="Aadhaar"
                  name="Aadhaar"
                  placeholder="Aadhaar No."
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                /> */}
                <div>
                  {/* <Link to="/signup">Forgot Password?</Link> */}

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit" onClick={()=>handlelogin(number)}>
                      Login
                    </button>
                    <Link to="/signup" className="button signup text-decoration-none">
                      SignUp
                    </Link>
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

export default Login;
