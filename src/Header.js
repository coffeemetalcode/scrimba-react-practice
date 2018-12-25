import React from "react";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Link 1
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Link 2
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Link 3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
