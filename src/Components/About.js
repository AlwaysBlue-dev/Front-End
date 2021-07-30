import React from "react";
// import userpic from "../Images/userpic.png";
import mypic from "../Images/mypic.png";

const About = () => {
  return (
    <>
      <div className="container emp-profile mt-5">
        <form>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img mt-5">
                <img src={mypic} alt="profile-pic" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="profile-head mt-5">
                <h5>Mirza Abdullah Baig</h5>
                <h6>Web Developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKINGS: <span>5/10</span>
                </p>
                {/* right side data*/}
                <h6 className="about text-uppercase">Information</h6>
                <div className="col-md-8 mt-5 about-info">
                  <div className="row">
                    <div className="col-md-6">
                      <label className="font">User ID:</label>
                    </div>
                    <div className="col-md-6">
                      <p className="font_color">#123456789</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="font">Name:</label>
                    </div>
                    <div className="col-md-6">
                      <p className="font_color">Mirza Abdullah Baig</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="font">Email:</label>
                    </div>
                    <div className="col-md-6">
                      <p className="font_color">abd@gmail.com</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="font">Phone:</label>
                    </div>
                    <div className="col-md-6">
                      <p className="font_color">0312345678</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="font">Profession:</label>
                    </div>
                    <div className="col-md-6">
                      <p className="font_color">Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2 edit_btn">
              <input
                type="submit"
                className="profile-edit-btn btn btn-danger mt-3 "
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>
          <div className="row">
            {/* left side url */}
            <div className="col-md-4">
              <div className="profile-work mt-3 mb-3">
                <p className="text-uppercase">Some Links:</p>
                <a
                  href="https://www.facebook.com/a4abdullah/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                <br />
                <a
                  href="https://www.instagram.com/abd.baig/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <br />
                <a
                  href="https://alwaysblue-dev.github.io/portfolio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  My Website
                </a>
                <br />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
