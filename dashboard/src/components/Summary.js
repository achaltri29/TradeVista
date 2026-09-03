import React, { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../config";

const Summary = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/allHoldings`).then((res) => {
      setAllHoldings(res.data);
    });
    axios.get(`${API_BASE_URL}/allPositions`).then((res) => {
      setAllPositions(res.data);
    });
  }, []);

  const totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty, 0
  );
  const currentValue = allHoldings.reduce(
    (acc, stock) => acc + stock.price * stock.qty, 0
  );
  const totalPnL = currentValue - totalInvestment;
  const pnlPercent =
    totalInvestment > 0
      ? ((totalPnL / totalInvestment) * 100).toFixed(2)
      : "0.00";
  const isPnLProfit = totalPnL >= 0;

  const formatK = (val) => {
    if (Math.abs(val) >= 1000) {
      return (val / 1000).toFixed(2) + "k";
    }
    return val.toFixed(2);
  };

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={isPnLProfit ? "profit" : "loss"}>
              {isPnLProfit ? "+" : ""}{formatK(totalPnL)}{" "}
              <small>{isPnLProfit ? "+" : ""}{pnlPercent}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{formatK(currentValue)}</span>{" "}
            </p>
            <p>
              Investment <span>{formatK(totalInvestment)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {allPositions.length > 0 && (
        <div className="section">
          <span>
            <p>Positions ({allPositions.length})</p>
          </span>
          <hr className="divider" />
        </div>
      )}
    </>
  );
};

export default Summary;
