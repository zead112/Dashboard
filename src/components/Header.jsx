function Header() {
  return (
    <div className="head bg-white p-15 between-flex">
      <div className="search p-relative">
        <input
          className="p-10 border-ccc rad-10"
          type="search"
          placeholder="Type to search..."
        />
      </div>
      <div className="icons d-flex align-center">
        <span className="notification p-relative">
          <i className="fa-regular fa-bell fa-lg"></i>
        </span>

        <img
          src={process.env.PUBLIC_URL + "/assets/imgs/MyLogo.png"}
          alt="avatar"
        />
      </div>
    </div>
  );
}
export default Header;
