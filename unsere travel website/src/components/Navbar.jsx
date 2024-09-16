const Navbar = () => {
  return (
    <div className="navbar bg-base-100 mx-10">
      <div className="flex-1">
        <img src="/src/Logo.png" alt="Logo" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-16 font-bold">
          <li>
            <a>Destinations</a>
          </li>
          <li>
            <a>Hotels</a>
          </li>
          <li>
            <a>Flights</a>
          </li>
          <li>
            <a>Boookings</a>
          </li>
          <li>
            <a>Login</a>
          </li>
          <li>
            <a>Signup</a>
          </li>
          <li>
            <details>
              <summary>Language</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>EN</a>
                </li>
                <li>
                  <a>DE</a>
                </li>
                <li>
                  <a>FR</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
