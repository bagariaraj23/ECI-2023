import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";
const Signup = () => {
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
                  name="Voter ID"
                  placeholder="Voter ID No."
                />
                <CustomInput
                  type="Aadhar"
                  name="Aadhar"
                  placeholder="Aadhar No."
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">
                      <Link
                        to="/otp"
                        style={{ color: "#ffffff" }}
                        className="text-decoration-none"
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
