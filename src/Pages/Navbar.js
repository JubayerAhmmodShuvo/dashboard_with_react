import React from 'react';
import one from "../images/1.jpg"

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
              <li class="nav-item ">
                <a
                  class="nav-link active font-bold"
                  aria-current="page"
                  href="#"
                >
                  Teams
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link font-bold" href="#">
                  U19
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link font-bold" href="#">
                  U23
                </a>
              </li>
            </ul>
            <form class="d-flex align-items-center justify-content-center me-3" role="search">
              <div class="profile-image"><img src={one} alt="Avatar" class="avatar"/></div>
              <li class="nav-item dropdown me-5">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Marcus
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                     Setting
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                     Logout
                    </a>
                  </li>
                </ul>
              </li>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;