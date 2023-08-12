function Settings() {
  return (
    <div className="settings">
      <h1 class="p-relative">Settings</h1>
      <div className="settings-page m-20 mb-15 d-grid gap-20">
        <div className="widget">
          <h2 className="mt-0 mb-10">Site Control</h2>
          <p className="title c-grey fs-15">
            Control The Website If There Is Maintenance
          </p>
          <div className="mb-15 between-flex">
            <div>
              <span> Website Control </span>
              <p className="c-grey mt-5 mb-0 fs-13">
                Connect/Disconnect Website And Type The Reason
              </p>
            </div>
            <div>
              <label>
                <input className="toggle-checkbox" type="checkbox" checked />
                <div className="toggle-switch"></div>
              </label>
            </div>
          </div>
          <textarea
            className="close-message b-none p-10 rad-6 border-ccc d-block w-full"
            placeholder="Type Your Comment Here..."
          ></textarea>
        </div>
        <div className="widget">
          <h2 className="mt-0 mb-10">General Info</h2>
          <p className="title c-grey fs-15">
            General Information About Your Account
          </p>
          <div className="mb-15">
            <label className="fs-14 c-grey d-block mb-10" htmlFor="first">
              First Name
            </label>
            <input
              className="b-none border-ccc p-10 rad-6 d-block w-full"
              type="text"
              id="first"
              placeholder="First Name"
            />
          </div>
          <div className="mb-15">
            <label className="fs-14 c-grey d-block mb-10" htmlFor="last">
              Last Name
            </label>
            <input
              className="b-none border-ccc p-10 rad-6 d-block w-full"
              type="text"
              id="last"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-15">
            <label className="fs-14 c-grey d-block mb-10" htmlFor="email">
              Email
            </label>
            <input
              className="email b-none border-ccc p-10 rad-6 w-full mr-10"
              type="email"
              id="email"
              value="Zeadhajebrahem@outlook.com"
              disabled
            />
            <a className="c-blue" href="#">
              Change
            </a>
          </div>
        </div>
        <div className="widget">
          <h2 className="mt-0 mb-10">Security Info</h2>
          <p className="title c-grey fs-15">
            Security Information About Your Account
          </p>
          <div className="sec-box mb-15 between-flex">
            <div>
              <span>Password</span>
              <p className="c-grey mt-5 mb-0 fs-13">
                Last Changed On 25/10/2022
              </p>
            </div>
            <div>
              <a className="button bg-blue c-white btn-shape" href="#">
                Change
              </a>
            </div>
          </div>
          <div className="sec-box mb-15 between-flex">
            <div>
              <span>Two-Factor Authentication</span>
              <p className="c-grey mt-5 mb-0 fs-13">
                Enable/Disable This Feature
              </p>
            </div>
            <div>
              <label>
                <input className="toggle-checkbox" type="checkbox" />
                <div className="toggle-switch"></div>
              </label>
            </div>
          </div>
          <div className="sec-box between-flex">
            <div>
              <span>Devices</span>
              <p className="c-grey mt-5 mb-0 fs-13">
                Check The Logged In Devices
              </p>
            </div>
            <div>
              <a className="bg-eee c-black btn-shape" href="#">
                Devices
              </a>
            </div>
          </div>
        </div>
        <div className="widget social-boxes">
          <h2 className="mt-0 mb-10">Social Info</h2>
          <p className="title c-grey fs-15">Social Media Information</p>
          <div className="d-flex align-center mb-15">
            <i className="fa-brands fa-twitter center-flex c-grey twitter"></i>
            <input
              className="w-full"
              type="text"
              placeholder="Twitter Username"
            />
          </div>
          <div className="d-flex align-center mb-15">
            <i className="fa-brands fa-facebook-f center-flex c-grey facebook"></i>
            <input
              className="w-full"
              type="text"
              placeholder="Facebook Username"
            />
          </div>
          <div className="d-flex align-center mb-15">
            <i className="fa-brands fa-linkedin-in center-flex c-grey linkedin"></i>
            <input
              className="w-full"
              type="text"
              placeholder="LinkedIn Username"
            />
          </div>
          <div className="d-flex align-center mb-15">
            <i className="fa-brands fa-youtube center-flex c-grey youtube"></i>
            <input
              className="w-full"
              type="text"
              placeholder="Youtube Username"
            />
          </div>
        </div>
        <div class="widget widgets-control">
          <h2 class="mt-0 mb-10">Widgets Control</h2>
          <p class="title c-grey fs-15">Show/Hide Widgets</p>
          <div class="control d-flex align-center mb-15">
            <input type="checkbox" id="one" />
            <label for="one">Quick Draft</label>
          </div>
          <div class="control d-flex align-center mb-15">
            <input type="checkbox" id="two" />
            <label for="two">Yearly Targets</label>
          </div>
          <div class="control d-flex align-center mb-15">
            <input type="checkbox" id="three" />
            <label for="three">Tickets Statistics</label>
          </div>
          <div class="control d-flex align-center mb-15">
            <input type="checkbox" id="four" checked />
            <label for="four">Latest News</label>
          </div>
          <div class="control d-flex align-center mb-15">
            <input type="checkbox" id="five" checked />
            <label for="five">Latest Tasks</label>
          </div>
          <div class="control d-flex align-center mb-15">
            <input type="checkbox" id="six" checked />
            <label for="six">Top Search Items</label>
          </div>
        </div>
        <div class="widget backup-control">
          <h2 class="mt-0 mb-10">Backup Manager</h2>
          <p class="title c-grey fs-15">Control Backup Time And Provider</p>
          <div class="date d-flex align-center mb-15">
            <input type="radio" name="time" id="daily" checked />
            <label for="daily">Daily</label>
          </div>
          <div class="date d-flex align-center mb-15">
            <input type="radio" name="time" id="weekly" />
            <label for="weekly">Weekly</label>
          </div>
          <div class="date d-flex align-center mb-15">
            <input type="radio" name="time" id="monthly" />
            <label for="monthly">Monthly</label>
          </div>
          <div class="servers d-flex align-center txt-c">
            <input type="radio" name="servers" id="server-one" />
            <div class="server mb-15 rad-10 w-full">
              <label class="d-block m-15" for="server-one">
                <i class="fa-solid fa-server d-block mb-10"></i>
                Bluehost
              </label>
            </div>
            <input type="radio" name="servers" id="server-two" checked />
            <div class="server mb-15 rad-10 w-full">
              <label class="d-block m-15" for="server-two">
                <i class="fa-solid fa-server d-block mb-10"></i>
                Liquid Web
              </label>
            </div>
            <input type="radio" name="servers" id="server-three" />
            <div class="server mb-15 rad-10 w-full">
              <label class="d-block m-15" for="server-three">
                <i class="fa-solid fa-server d-block mb-10"></i>
                SiteGround
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Settings;
