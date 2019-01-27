import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <ul className="juiheader">
          <li className="juiheaderbutton">Find My Tutors</li>
          <li className="juiheaderbutton active">Search</li>
          <li>
            <button className="juiaccount">
              <i
                class="material-icons md-light"
                style={{ float: "right", fontSize: "47px" }}
              >
                account_circle
              </i>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
