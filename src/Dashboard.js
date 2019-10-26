import React, { Component } from "react";
import "./css/bootstrap.min.css";
import "./css/style.css";
import NumberFormat from "react-number-format";

// const highlights = {
//   companyId: 2,
//   companyName: "Apay Golfers Inc.",
//   totalShares: 7104164,
//   totalShareholders: 7,
//   totalMoneyRaised: 9250000.0
// };

// const prePostFundHighlights = { preAmount: 6000002.0, postAmount: 6123458.0 };

// const raisedPendingFundHighlight = {
//   raisedAmount: 9250000.0,
//   pendingAmount: -9126544.0
// };

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlights: {},
      prePostFundHighlights: {},
      raisedPendingFundHighlight: {}
    };
  }

  async componentDidMount() {
    const url = "http://jaindigital.a2hosted.com/getData";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      highlights: data[0],
      prePostFundHighlights: data[1],
      raisedPendingFundHighlight: data[2]
    });
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <section className="header-wrap">
            <nav className="navbar navbar-expand-md navbar-light">
              <div className="logo">
                <a href="http://iwebgraph.com/dashboard/index.html">
                  <img src={require("./image/logo.png")} />
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="nav-bar collapse navbar-collapse"
                id="collapsibleNavbar"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="http://iwebgraph.com/dashboard/#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a
                      className="nav-link"
                      href="http://iwebgraph.com/dashboard/#"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="http://iwebgraph.com/dashboard/#"
                    >
                      Equity
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="http://iwebgraph.com/dashboard/#"
                    >
                      Agreements
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="http://iwebgraph.com/dashboard/#"
                    >
                      Filings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="http://iwebgraph.com/dashboard/#"
                    >
                      Investor Data
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="http://iwebgraph.com/dashboard/#"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </section>
          <section className="main-content">
            <div className="analysis-wrap">
              <div className="analysis-box">
                <div className="heading-wrap">
                  <h2>{this.state.highlights.companyName}</h2>
                </div>
                <ul className="analysis-list">
                  <li>
                    <NumberFormat
                      value={this.state.highlights.totalShares}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                    <span>shares</span>
                  </li>
                  <li>
                    <NumberFormat
                      value={this.state.highlights.totalMoneyRaised}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                    <span>raised</span>
                  </li>
                  <li>
                    <NumberFormat
                      value={this.state.highlights.totalShareholders}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                    <span>share holders</span>
                  </li>
                </ul>
              </div>
              <div className="wrap-border"></div>
            </div>
            <div className="card-panel">
              <div className="row">
                <div className="card-view col-lg-8">
                  <div className="title-wrap">
                    <h2>Total Shareholders</h2>
                    <a href="http://iwebgraph.com/dashboard/#">
                      View in detail
                    </a>
                  </div>
                  <div className="chart-wrap">
                    <div className="progress-bar-wrap">
                      <div className="common">
                        <div className="img-data">
                          <p>CS</p>
                        </div>
                        <div className="data">
                          <p>25.93%</p>
                          <h3>Common</h3>
                        </div>
                      </div>
                      <div className="prefere">
                        <div className="img-data">
                          <p>PS</p>
                        </div>
                        <div className="data">
                          <p>17.60%</p>
                          <h3>Preferred</h3>
                        </div>
                      </div>
                      <div className="seriesA">
                        <div className="img-data">
                          <p>Series A</p>
                        </div>
                        <div className="data">
                          <p>17.60%</p>
                          <h3>Series A</h3>
                        </div>
                      </div>
                      <div className="seriesB">
                        <div className="img-data">
                          <p>Series B</p>
                        </div>
                        <div className="data">
                          <p>17.60%</p>
                          <h3>Series B</h3>
                        </div>
                      </div>
                      <div className="ps">
                        <div className="img-data">
                          <p>PS</p>
                        </div>
                        <div className="data">
                          <p>17.60%</p>
                        </div>
                      </div>
                      <div className="debt">
                        <div className="img-data">
                          <p>Debt</p>
                        </div>
                        <div className="data">
                          <p>17.60%</p>
                          <h3>Debt</h3>
                        </div>
                      </div>
                    </div>
                    <div className="total-count">
                      <h3>
                        124,532 <span>share holders</span>
                      </h3>
                    </div>
                  </div>

                  <div className="row">
                    <div className="card-view col-lg-12">
                      <div className="title-wrap">
                        <h2>Funding</h2>
                        <a href="http://iwebgraph.com/dashboard/#">
                          View in detail
                        </a>
                      </div>
                      <div className="chart-section">
                        <img src={require("./image/chart.png")} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-view col-lg-4">
                  <div className="title-wrap">
                    <h2>Current Round</h2>
                    <a href="http://iwebgraph.com/dashboard/#">
                      View in detail
                    </a>
                  </div>
                  <div className="chart-wrap">
                    <div className="progress-bar-wrap">
                      <div className="raised">
                        <div className="img-data">
                          <p className="text-left">Raised</p>
                        </div>
                        <div className="data">
                          <h2>
                            <NumberFormat
                              value={
                                this.state.raisedPendingFundHighlight
                                  .raisedAmount
                              }
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"$"}
                            />
                          </h2>
                        </div>
                      </div>
                      <div className="pending">
                        <div className="img-data">
                          <p className="text-right">Pending</p>
                        </div>
                        <div className="data">
                          <h2>
                            <NumberFormat
                              value={
                                this.state.raisedPendingFundHighlight
                                  .pendingAmount
                              }
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"$"}
                            />
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="circle-chart">
                      <img src={require("./image/circle-chart.png")} />
                    </div>
                    <div className="pre-post-money">
                      <div className="row">
                        <div className="col-6">
                          <p>Pre-Money</p>
                          <h2>
                            <NumberFormat
                              value={this.state.prePostFundHighlights.preAmount}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"$"}
                            />
                          </h2>
                        </div>
                        <div className="col-6">
                          <p>Post-Money</p>
                          <h2>
                            <NumberFormat
                              value={
                                this.state.prePostFundHighlights.postAmount
                              }
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"$"}
                            />
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="switches">
                      <div className="card" style={{ border: "0px" }}>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            Switch Currency
                            <label className="switch">
                              <input
                                type="checkbox"
                                className="default"
                                checked="true"
                              />
                              <span className="slider round">usd</span>
                            </label>
                          </li>
                          <li className="list-group-item">
                            Day Mode/Night Mode
                            <label className="switch day-night">
                              <input
                                type="checkbox"
                                className="default"
                                checked="true"
                              />
                              <span className="slider round"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Dashboard;
