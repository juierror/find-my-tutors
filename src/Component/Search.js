import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      price_tag: "None",
      subject_tag: "None",
      price_list: ["None", 100, 150, 200, 250, 300],
      subject_list: [
        "None",
        "Computer",
        "Physics",
        "Math",
        "Chemistry",
        "Biology",
        "Other"
      ],
      result: [
        { name: "Jui", subject: "Computer", price: "200", address: "test" }
      ]
    };
  }

  render() {
    return (
      <div style={{ padding: "1vw", width: "100vw" }}>
        <div style={{ padding: "1vw", width: "100vw" }}>
          <h4 style={{ float: "left" }}>Search By:</h4>
          <h4 style={{ float: "left" }}>Price</h4>
          <select
            style={{ float: "left", display: "inline" }}
            value={this.state.price_tag}
            name="price"
            onChange={e => {
              this.setState({ price_tag: e.target.value });
            }}
          >
            {this.state.price_list.map((val, idx) => {
              return <option value={val}>{val}</option>;
            })}
          </select>
          <h4 style={{ float: "left", padding: "1vw" }}>Subject</h4>
          <select
            style={{ float: "left", display: "inline" }}
            value={this.state.subject_tag}
            name="subject"
            onChange={e => {
              this.setState({ subject_tag: e.target.value });
            }}
          >
            {this.state.subject_list.map((val, idx) => {
              return <option value={val}>{val}</option>;
            })}
          </select>
          <div style={{ padding: "1vw", maxWidth: "100%" }}>
            <ul style={{ listStyleType: "none" }}>
              {this.state.result.map((val, idx) => {
                return (
                  <li style={{display : "block"}}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{val.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          Subject
                        </h6>
                        <p className="card-text">{val.subject}</p>
                        <h6 className="card-subtitle mb-2 text-muted">Price</h6>
                        <p className="card-text">{val.price}</p>
                        <h6 className="card-subtitle mb-2 text-muted">
                          Address
                        </h6>
                        <p className="card-text">{val.address}</p>
                        <a href="#" className="card-link">
                          Register
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
