function Dashboard() {
  return (
    <div className="DashboardPage">
      <h1 class="p-relative">Dashboard</h1>
      <div class="wrapper d-grid gap-20">
        <div class="welcome bg-white rad-10 txt-c-mobile block-mobile">
          <div class="intro p-20 d-flex space-between bg-eee">
            <div>
              <h2 class="m-0">Welcome</h2>
              <p class="c-grey mt-5">Zead Hajebrahem</p>
            </div>
            <img src="assets/imgs/welcome.png" alt="" class="hide-mobile" />
          </div>
          <img src="assets/imgs/avatar.png" alt="avatar" class="avatar" />
          <div class="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
            <div>
              Zead Hajebrahem
              <span class="d-block c-grey fs-14 mt-10">Developer</span>
            </div>
            <div>
              16 <span class="d-block c-grey fs-14 mt-10">Projects</span>
            </div>
            <div>
              $1800 <span class="d-block c-grey fs-14 mt-10">Earned</span>
            </div>
          </div>
          <a
            href="profile.html"
            class="visit d-block fs-14 bg-blue c-white w-fit btn-shape"
          >
            Profile
          </a>
        </div>
        <div class="quick-draft widget">
          <h2 class="mt-0 mb-10">Quick Draft</h2>
          <p class="title c-grey fs-15">Write A Draft For Your Ideas</p>
          <form action="">
            <input
              class="d-block mb-20 w-full p-10 b-none bg-eee rad-6"
              type="text"
              placeholder="Title"
            />
            <textarea
              class="d-block mb-20 w-full p-10 b-none bg-eee rad-6"
              placeholder="Your Thoughts"
            ></textarea>
            <input
              class="save d-block fs-14 bg-blue c-white b-none w-fit btn-shape"
              type="submit"
              value="Save"
            />
          </form>
        </div>
        <div className="targets widget">
          <h2 className="mt-0 mb-10">Yearly Targets</h2>
          <p className="title c-grey fs-15">Targets Of The Year</p>
          <div className="target-row mb-20 center-flex blue">
            <div className="icon center-flex">
              <i className="fa-solid fa-dollar-sign c-blue"></i>
            </div>
            <div className="details">
              <span className="fs-14 c-grey">Earnings</span>
              <span className="d-block mt-5 mb-10 fw-bold">$20,000</span>
              <div className="progress p-relative">
                <span className="bg-blue blue" style={{ width: "45%" }}>
                  <span className="bg-blue">45%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="target-row mb-20 center-flex orange">
            <div className="icon center-flex">
              <i className="fa-solid fa-code c-orange"></i>
            </div>
            <div className="details">
              <span className="fs-14 c-grey">Projects</span>
              <span className="d-block mt-5 mb-10 fw-bold">24</span>
              <div className="progress p-relative">
                <span className="bg-orange orange" style={{ width: "55%" }}>
                  <span className="bg-orange">55%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="target-row mb-20 center-flex green">
            <div className="icon center-flex">
              <i className="fa-solid fa-users c-green"></i>
            </div>
            <div className="details">
              <span className="fs-14 c-grey">Team</span>
              <span className="d-block mt-5 mb-10 fw-bold">12</span>
              <div className="progress p-relative">
                <span className="bg-green green" style={{ width: "75%" }}>
                  <span className="bg-green">75%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="tickets widget">
          <h2 className="mt-0 mb-10">Tickets Statistics</h2>
          <p className="title c-grey fs-15">Everything About Support Tickets</p>
          <div className="d-flex txt-c gap-20 f-wrap">
            <div className="box p-20 rad-10 fs-13 c-grey">
              <i className="fa-regular fa-rectangle-list fa-2x mb-10 c-orange"></i>
              <span className="d-block c-black fw-bold fs-25 mb-5">2500</span>
              Total
            </div>
            <div className="box p-20 rad-10 fs-13 c-grey">
              <i className="fa-solid fa-spinner fa-2x mb-10 c-blue"></i>
              <span className="d-block c-black fw-bold fs-25 mb-5">500</span>
              Pending
            </div>
            <div className="box p-20 rad-10 fs-13 c-grey">
              <i className="fa-regular fa-circle-check fa-2x mb-10 c-green"></i>
              <span className="d-block c-black fw-bold fs-25 mb-5">1900</span>
              Closed
            </div>
            <div className="box p-20 rad-10 fs-13 c-grey">
              <i className="fa-regular fa-rectangle-xmark fa-2x mb-10 c-red"></i>
              <span className="d-block c-black fw-bold fs-25 mb-5">100</span>
              Deleted
            </div>
          </div>
        </div>
        <div className="latest-news widget txt-c-mobile">
          <h2 className="title">Latest News</h2>
          <div className="news-row block-mobile d-flex align-center">
            <img src="assets/imgs/news-01.png" alt="" />
            <div className="info">
              <h3>Created SASS Section</h3>
              <p className="m-0 fs-14 c-grey">New SASS Examples & Tutorials</p>
            </div>
            <div className="rad-6 bg-eee fs-13 label">3 Days Ago</div>
          </div>
          <div className="news-row block-mobile d-flex align-center">
            <img src="assets/imgs/news-02.png" alt="" />
            <div className="info">
              <h3>Changed The Design</h3>
              <p className="m-0 fs-14 c-grey">A Brand New Website Design</p>
            </div>
            <div className="rad-6 bg-eee fs-13 label">5 Days Ago</div>
          </div>
          <div className="news-row block-mobile d-flex align-center">
            <img src="assets/imgs/news-03.png" alt="" />
            <div className="info">
              <h3>Team Increased</h3>
              <p className="m-0 fs-14 c-grey">3 Developers Joined The Team</p>
            </div>
            <div className="rad-6 bg-eee fs-13 label">7 Days Ago</div>
          </div>
          <div className="news-row block-mobile d-flex align-center">
            <img src="assets/imgs/news-04.png" alt="" />
            <div className="info">
              <h3>Added Payment Gateway</h3>
              <p className="m-0 fs-14 c-grey">
                Many New Payment Gateways Added
              </p>
            </div>
            <div className="rad-6 bg-eee fs-13 label">9 Days Ago</div>
          </div>
        </div>
        <div class="tasks widget">
          <h2 class="title">Latest Tasks</h2>
          <div class="task-row between-flex">
            <div class="info">
              <h3 class="mt-0 mb-5 fs-15">Record One Video</h3>
              <p class="m-0 c-grey">Record React Create Web Project</p>
            </div>
            <i class="fa-regular fa-trash-can delete"></i>
          </div>
          <div class="task-row between-flex">
            <div class="info">
              <h3 class="mt-0 mb-5 fs-15">Write Article</h3>
              <p class="m-0 c-grey">Write Low Level vs High Level Languages</p>
            </div>
            <i class="fa-regular fa-trash-can delete"></i>
          </div>
          <div class="task-row between-flex">
            <div class="info">
              <h3 class="mt-0 mb-5 fs-15">Finish Project</h3>
              <p class="m-0 c-grey">Publish Academy Programming Project</p>
            </div>
            <i class="fa-regular fa-trash-can delete"></i>
          </div>
          <div class="task-row between-flex done">
            <div class="info">
              <h3 class="mt-0 mb-5 fs-15">Attend The Meeting</h3>
              <p class="m-0 c-grey">
                Attend The Project Business Analysis Meeting
              </p>
            </div>
            <i class="fa-regular fa-trash-can delete"></i>
          </div>
          <div class="task-row between-flex">
            <div class="info">
              <h3 class="mt-0 mb-5 fs-15">Finish Lesson</h3>
              <p class="m-0 c-grey">Finish Teaching Flex Box</p>
            </div>
            <i class="fa-regular fa-trash-can delete"></i>
          </div>
        </div>
        <div className="search-items widget">
          <h2 className="title">Top Searched</h2>
          <div className="items-head d-flex space-between c-grey mb-10">
            <div>Keyword</div>
            <div>Search Count</div>
          </div>
          <div className="items d-flex space-between pt-15">
            <span>Programming</span>
            <span className="bg-eee fs-13 rad-6 stat-shape">220</span>
          </div>
          <div className="items d-flex space-between pt-15">
            <span>JavaScript</span>
            <span className="bg-eee fs-13 rad-6 stat-shape">180</span>
          </div>
          <div className="items d-flex space-between pt-15">
            <span>React</span>
            <span className="bg-eee fs-13 rad-6 stat-shape">160</span>
          </div>
          <div className="items d-flex space-between pt-15">
            <span>Code</span>
            <span className="bg-eee fs-13 rad-6 stat-shape">145</span>
          </div>
          <div className="items d-flex space-between pt-15">
            <span>Design</span>
            <span className="bg-eee fs-13 rad-6 stat-shape">115</span>
          </div>
          <div className="items d-flex space-between pt-15">
            <span>Logic</span>
            <span className="bg-eee fs-13 rad-6 stat-shape">105</span>
          </div>
        </div>
        <div className="latest-uploads widget">
          <h2 className="title">Latest Uploads</h2>
          <ul>
            <li className="between-flex pb-10 mb-10">
              <div className="d-flex align-center">
                <img className="mr-10" src="assets/imgs/pdf.svg" alt="" />
                <div>
                  <span className="d-block">my-file.pdf</span>
                  <span className="fs-15 c-grey">Zead</span>
                </div>
              </div>
              <div className="bg-eee stat-shape rad-6 fs-13">2.9mb</div>
            </li>
            <li className="between-flex pb-10 mb-10">
              <div className="d-flex align-center">
                <img className="mr-10" src="assets/imgs/avi.svg" alt="" />
                <div>
                  <span className="d-block">my-video.avi</span>
                  <span className="fs-15 c-grey">Admin</span>
                </div>
              </div>
              <div className="bg-eee stat-shape rad-6 fs-13">4.9mb</div>
            </li>
            <li className="between-flex pb-10 mb-10">
              <div className="d-flex align-center">
                <img className="mr-10" src="assets/imgs/psd.svg" alt="" />
                <div>
                  <span className="d-block">my-design.psd</span>
                  <span className="fs-15 c-grey">Zead</span>
                </div>
              </div>
              <div className="bg-eee stat-shape rad-6 fs-13">4.5mb</div>
            </li>
            <li className="between-flex pb-10 mb-10">
              <div className="d-flex align-center">
                <img className="mr-10" src="assets/imgs/zip.svg" alt="" />
                <div>
                  <span className="d-block">my-code.zip</span>
                  <span className="fs-15 c-grey">User</span>
                </div>
              </div>
              <div className="bg-eee stat-shape rad-6 fs-13">8.4mb</div>
            </li>
            <li className="between-flex pb-10 mb-10">
              <div className="d-flex align-center">
                <img className="mr-10" src="assets/imgs/dll.svg" alt="" />
                <div>
                  <span className="d-block">msvcr120.dll</span>
                  <span className="fs-15 c-grey">Admin</span>
                </div>
              </div>
              <div className="bg-eee stat-shape rad-6 fs-13">0.5mb</div>
            </li>
          </ul>
        </div>
        <div className="current-project widget p-relative">
          <h2 className="title">Current Project Progress</h2>
          <ul className="m-0 p-relative">
            <li className="mt-25 d-flex align-center done">
              Received The Project
            </li>
            <li className="mt-25 d-flex align-center done">
              Started The Project
            </li>
            <li className="mt-25 d-flex align-center done">
              About To Finish The Project
            </li>
            <li className="mt-25 d-flex align-center current">
              Test The Project
            </li>
            <li className="mt-25 d-flex align-center">
              Finish The Project And Deploy
            </li>
          </ul>
          <img
            className="launch-icon hide-mobile"
            src="assets/imgs/project.png"
            alt=""
          />
        </div>
        <div className="reminders widget p-relative">
          <h2 className="mt-0 mb-25">Reminders</h2>
          <ul>
            <li className="d-flex align-center mt-15">
              <span className="key bg-blue mr-15 d-block rad-half"></span>
              <div className="pl-15 blue">
                <p className="fs-14 fw-bold mt-0 mb-5">Check My Task List</p>
                <span className="fs-13 c-grey">28/03/2023 - 12:00am</span>
              </div>
            </li>
            <li className="d-flex align-center mt-15">
              <span className="key bg-green mr-15 d-block rad-half"></span>
              <div className="pl-15 green">
                <p className="fs-14 fw-bold mt-0 mb-5">Check My Projects</p>
                <span className="fs-13 c-grey">02/04/2023 - 10:30am</span>
              </div>
            </li>
            <li className="d-flex align-center mt-15">
              <span className="key bg-orange mr-15 d-block rad-half"></span>
              <div className="pl-15 orange">
                <p className="fs-14 fw-bold mt-0 mb-5">Call My Clients</p>
                <span className="fs-13 c-grey">06/04/2023 - 02:30pm</span>
              </div>
            </li>
            <li className="d-flex align-center mt-15">
              <span className="key bg-red mr-15 d-block rad-half"></span>
              <div className="pl-15 red">
                <p className="fs-14 fw-bold mt-0 mb-5">
                  Finish The Development Workshop
                </p>
                <span className="fs-13 c-grey">11/05/2023 - 11:00am</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="latest-post widget p-relative">
          <h2 className="mt-0 mb-25">Latest Post</h2>
          <div className="top d-flex align-center">
            <img className="avatar mr-15" src="assets/imgs/avatar.png" alt="" />
            <div className="info">
              <span className="d-block mb-5 fw-bold">Zead Hajebrahem</span>
              <span className="c-grey">About 3 Hours Ago</span>
            </div>
          </div>
          <div className="post-content txt-c-mobile pt-20 pb-20 mt-20 mb-20">
            if you don't achieve success today it's not the end of the world.
            Tomorrow is another day so just keep on trying your best.
          </div>
          <div className="post-stats between-flex c-grey">
            <div>
              <i className="fa-solid fa-heart like-icon"></i>
              <span>1.8k</span>
            </div>
            <div>
              <i className="fa-regular fa-comment"></i>
              <span>500</span>
            </div>
          </div>
        </div>
        <div className="social-media widget p-relative">
          <h2 className="mt-0 mb-25">Social Media Statistics</h2>
          <div className="p-15 p-relative mb-10 between-flex box twitter">
            <i className="fa-brands fa-twitter fa-2x c-white h-full center-flex"></i>
            <span>30K Followers</span>
            <a className="fs-13 c-white stat-shape" href="#">
              Follow
            </a>
          </div>
          <div className="p-15 p-relative mb-10 between-flex box facebook">
            <i className="fa-brands fa-facebook fa-2x c-white h-full center-flex"></i>
            <span>11K Likes</span>
            <a className="fs-13 c-white stat-shape" href="#">
              Like
            </a>
          </div>
          <div className="p-15 p-relative mb-10 between-flex box youtube">
            <i className="fa-brands fa-youtube fa-2x c-white h-full center-flex"></i>
            <span>23K Subscribers</span>
            <a className="fs-13 c-white stat-shape" href="#">
              Subscribe
            </a>
          </div>
          <div className="p-15 p-relative mb-10 between-flex box linkedin">
            <i className="fa-brands fa-linkedin fa-2x c-white h-full center-flex"></i>
            <span>18K Followers</span>
            <a className="fs-13 c-white stat-shape" href="#">
              Follow
            </a>
          </div>
        </div>
      </div>
      <div className="projects widget m-20 ">
        <h2 className="title">Projects</h2>
        <div className="responsive-table">
          <table className="fs-15 w-full">
            <thead>
              <tr>
                <td>Name</td>
                <td>Finish Date</td>
                <td>Client</td>
                <td>Price</td>
                <td>Team</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ministry Wikipedia</td>
                <td>10 May 2023</td>
                <td>Ministry</td>
                <td>$5300</td>
                <td>
                  <img src="assets/imgs/team-01.png" alt="" />
                  <img src="assets/imgs/team-02.png" alt="" />
                  <img src="assets/imgs/team-03.png" alt="" />
                  <img src="assets/imgs/team-05.png" alt="" />
                </td>
                <td>
                  <span className="label bg-orange c-white stat-shape">
                    Pending
                  </span>
                </td>
              </tr>
              <tr>
                <td>eCommerce Shop</td>
                <td>12 Oct 2022</td>
                <td>eTech Company</td>
                <td>$1500</td>
                <td>
                  <img src="assets/imgs/team-01.png" alt="" />
                  <img src="assets/imgs/team-02.png" alt="" />
                  <img src="assets/imgs/team-05.png" alt="" />
                </td>
                <td>
                  <span className="label bg-blue c-white stat-shape">
                    In Progress
                  </span>
                </td>
              </tr>
              <tr>
                <td>Wonder App</td>
                <td>05 Sep 2022</td>
                <td>Immersion</td>
                <td>$800</td>
                <td>
                  <img src="assets/imgs/team-02.png" alt="" />
                  <img src="assets/imgs/team-03.png" alt="" />
                </td>
                <td>
                  <span className="label bg-green c-white stat-shape">
                    Completed
                  </span>
                </td>
              </tr>
              <tr>
                <td>Zead Website</td>
                <td>22 Aug 2022</td>
                <td>Zead</td>
                <td>$600</td>
                <td>
                  <img src="assets/imgs/team-01.png" alt="" />
                  <img src="assets/imgs/team-02.png" alt="" />
                </td>
                <td>
                  <span className="label bg-green c-white stat-shape">
                    Completed
                  </span>
                </td>
              </tr>
              <tr>
                <td>Osama Website</td>
                <td>24 May 2022</td>
                <td>Osama</td>
                <td>$300</td>
                <td>
                  <img src="assets/imgs/team-01.png" alt="" />
                  <img src="assets/imgs/team-03.png" alt="" />
                </td>
                <td>
                  <span className="label bg-red c-white stat-shape">
                    Rejected
                  </span>
                </td>
              </tr>
              <tr>
                <td>Arena Application</td>
                <td>01 Mar 2022</td>
                <td>Arena Company</td>
                <td>$2600</td>
                <td>
                  <img src="assets/imgs/team-01.png" alt="" />
                  <img src="assets/imgs/team-02.png" alt="" />
                  <img src="assets/imgs/team-03.png" alt="" />
                  <img src="assets/imgs/team-04.png" alt="" />
                </td>
                <td>
                  <span className="label bg-green c-white stat-shape">
                    Completed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
