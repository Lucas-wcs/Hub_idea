function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src="../../public/images/logo_test.png" alt="logo" />
      </div>
      <div className="nav-right">
        <div className="image-container">
          <img src="../../public/images/icons/avatar_icon.png" alt="avator" />
        </div>
        <div className="image-container">
          <img
            src="../../public/images/icons/notification_icon.png"
            alt="notification"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
