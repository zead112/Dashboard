function Profile() {
  return (
    <div className="profile">
      <h1 className="p-relative">Profile</h1>
      <div className="profile-page m-20">
        <div className="overview rad-10 bg-white d-flex align-center">
          <div className="avatar-box p-20 txt-c">
            <img
              className="mb-10 rad-half"
              src={process.env.PUBLIC_URL + "/assets/imgs/avatar.png"}
              alt=""
            />
            <h3 className="m-0">Zead Hajebrahem</h3>
            <p className="c-grey mt-10">Level 20</p>
            <div className="level rad-6 bg-eee p-relative">
              <span style={{ width: "70%" }}></span>
            </div>
            <div className="rating mt-10 mb-10">
              <i className="fa-solid fa-star c-orange fs-13"></i>
              <i className="fa-solid fa-star c-orange fs-13"></i>
              <i className="fa-solid fa-star c-orange fs-13"></i>
              <i className="fa-solid fa-star c-orange fs-13"></i>
              <i className="fa-regular fa-star c-orange fs-13"></i>
            </div>
            <p className="c-grey m-0 fs-13">550 Rating</p>
          </div>
          <div className="info-box w-full txt-c-mobile">
            <div className="box p-20 d-flex align-center">
              <h4 className="c-grey fs-15 m-0 w-full">General Information</h4>
              <div className="fs-14">
                <span className="c-grey">Full Name:</span>
                <span>Zead Hajebrahem</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Gender:</span>
                <span>Male</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Country:</span>
                <span>Syria</span>
              </div>
              <div className="fs-14">
                <label>
                  <input
                    className="toggle-checkbox"
                    type="checkbox"
                    defaultChecked
                  />
                  <div className="toggle-switch"></div>
                </label>
              </div>
            </div>
            <div className="box p-20 d-flex align-center">
              <h4 className="c-grey fs-15 m-0 w-full">Personal Information</h4>
              <div className="fs-14">
                <span className="c-grey">Email:</span>
                <span>email@website.com</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Phone:</span>
                <span>0123456789</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Date Of Birth:</span>
                <span>12/10/1996</span>
              </div>
              <div className="fs-14">
                <label>
                  <input className="toggle-checkbox" type="checkbox" />
                  <div className="toggle-switch"></div>
                </label>
              </div>
            </div>
            <div className="box p-20 d-flex align-center">
              <h4 className="c-grey fs-15 m-0 w-full">Work Information</h4>
              <div className="fs-14">
                <span className="c-grey">Title:</span>
                <span>Front End Web Developer</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Programming Language:</span>
                <span>JavaScript</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Years Of Experience:</span>
                <span>2</span>
              </div>
              <div className="fs-14">
                <label>
                  <input className="toggle-checkbox" type="checkbox" checked />
                  <div className="toggle-switch"></div>
                </label>
              </div>
            </div>
            <div className="box p-20 d-flex align-center">
              <h4 className="c-grey fs-15 m-0 w-full">Billing Information</h4>
              <div className="fs-14">
                <span className="c-grey">Payment Method:</span>
                <span>Paypal</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Email:</span>
                <span>email@website.com</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Subscription:</span>
                <span>Monthly</span>
              </div>
              <div className="fs-14">
                <label>
                  <input className="toggle-checkbox" type="checkbox" checked />
                  <div className="toggle-switch"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="other-data d-flex gap-20">
          <div className="skills-card widget mt-20">
            <h2 className="mt-0 mb-10">My Skills</h2>
            <p className="title c-grey fs-15">Complete Skills List</p>
            <ul className="m-0 txt-c-mobile">
              <li>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
              </li>
              <li>
                <span>React.js </span>
                <span>Redux</span>

                <span>Redux Toolkit</span>
              </li>
              <li>
                <span>Tailwind CSS</span>
                <span>Material UI</span>
              </li>
              <li>
                <span>RESTful API</span>
                <span>Axios</span>
              </li>
              <li>
                <span>Firebase</span>
              </li>

              <li>
                <span>Git</span>
                <span>Github</span>
              </li>
            </ul>
          </div>
          <div className="activities widget mt-20">
            <h2 className="mt-0 mb-10">Latest Activities</h2>
            <p className="title c-grey fs-15">
              Latest Activities Done By The User
            </p>
            <div className="activity d-flex align-center txt-c-mobile">
              <img
                src={process.env.PUBLIC_URL + "/assets/imgs/activity-01.png"}
                alt=""
              />
              <div className="info">
                <span className="d-block mb-10">Store</span>
                <span className="c-grey">
                  Bought The Mastering Redux Course
                </span>
              </div>
              <div className="date">
                <span className="d-block mb-10">18:10</span>
                <span className="c-grey">Yesterday</span>
              </div>
            </div>
            <div className="activity d-flex align-center txt-c-mobile">
              <img
                src={process.env.PUBLIC_URL + "/assets/imgs/activity-02.png"}
                alt=""
              />
              <div className="info">
                <span className="d-block mb-10">Academy</span>
                <span className="c-grey">Got The React Certificate</span>
              </div>
              <div className="date">
                <span className="d-block mb-10">16:05</span>
                <span className="c-grey">Yesterday</span>
              </div>
            </div>
            <div className="activity d-flex align-center txt-c-mobile">
              <img
                src={process.env.PUBLIC_URL + "/assets/imgs/activity-03.png"}
                alt=""
              />
              <div className="info">
                <span className="d-block mb-10">Badges</span>
                <span className="c-grey">Unlocked The 10 Skills Badge</span>
              </div>
              <div className="date">
                <span className="d-block mb-10">18:05</span>
                <span className="c-grey">Yesterday</span>
              </div>
            </div>
            <div className="activity d-flex align-center txt-c-mobile">
              <img
                src={process.env.PUBLIC_URL + "/assets/imgs/activity-01.png"}
                alt=""
              />
              <div className="info">
                <span className="d-block mb-10"> Store </span>
                <span className="c-grey">Bought The Typescript Course</span>
              </div>
              <div className="date">
                <span className="d-block mb-10">12:05</span>
                <span className="c-grey">Yesterday</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
