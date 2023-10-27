import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <form className="container-fluid justify-content-start">
          <button className="btn btn-outline-success me-2" type="button">
            Main button
          </button>
          <button className="btn btn-sm btn-outline-secondary" type="button">
            Smaller button
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
