
import './App.css';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div class="wrapper">
      <div class="sidebar">
        <h2>Dashboard Logo</h2>
        <ul>
          <li>
            <a href="/">
              <i class="fas fa-solid fa-gauge"></i>Dashboard
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fas fa-solid fa-vault"></i>Tactics Vault
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fas fa-solid fa-people-group"></i>Teams
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fas fa-solid fa-clipboard-list"></i>Schedule Generator
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fas fa-solid fa-calendar-days"></i>Weekly Training Plans
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fas fa-solid fa-arrow-up-right-dots"></i>Team Matrics
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-solid fa-gear"></i>Customization
            </a>
          </li>
        </ul>

        <div class="" id="bottom">
          <div class="dropup">
            <h6>Select Your Team</h6>
            <div class="dropdown">
              <a
                class="btn btn-success dropdown-toggle "
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Team Name
              </a>

              <ul
                class="dropdown-menu text-white  bg-success"
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item text-white bg-transparent " href="#">
                    Teams
                  </a>
                </li>
                <li>
                  <a class="dropdown-item text-white bg-transparent " href="#">
                    U23
                  </a>
                </li>
                <li>
                  <a class="dropdown-item text-white bg-transparent  " href="#">
                    U29
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
       <div class="main_content">
        <div class="header">
       <Navbar />
        </div>  
        <div class="info">
      

         
      </div>
    </div>
    </div>
    
  );
}

export default App;
