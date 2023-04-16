import React from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Login = () => {
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
                  type="number"
                  name="Phone"
                  placeholder="Phone No."
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
                    <Link to="/pass">
                      <button className="button border-0" type="submit">
                        Login
                      </button>
                    </Link>
                    <Link
                      to="/signup"
                      className="button signup text-decoration-none"
                    >
                      {/* <button className="button border-0" type="submit"> */}
                      SignUp
                      {/* </button> */}
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
