import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="smallcase"
            style={{ width: "60%", maxHeight: "50px", objectFit: "contain" }}
          />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt="streak"
            style={{ width: "50%", maxHeight: "50px", objectFit: "contain" }}
          />
          <p className="text-small text-muted mt-2">Algo & Strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="sensibull"
            style={{ width: "60%", maxHeight: "50px", objectFit: "contain" }}
          />
          <p className="text-small text-muted mt-2">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse"
            style={{ width: "60%", maxHeight: "50px", objectFit: "contain" }}
          />
          <p className="text-small text-muted mt-2">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            style={{ width: "50%", maxHeight: "50px", objectFit: "contain" }}
          />
          <p className="text-small text-muted mt-2">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="ditto"
            style={{ width: "40%", maxHeight: "50px", objectFit: "contain" }}
          />
          <p className="text-small text-muted mt-2">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-4"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
