import React from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Enter OTP</h3>
              <p className="text-center mt-2 mb-3">
                You will recieve an OTP on your registered Mobile No.
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="OTP" name="OTP" placeholder="OTP" />
                <div>
                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Re-Send OTP
                    </button>
                    <button className="button border-0" type="submit">
                      Submit
                    </button>
                  </div>
                    <Link to="/login">Cancel</Link>
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

export default Forgotpassword;
