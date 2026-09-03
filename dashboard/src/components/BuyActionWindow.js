import React, { useState, useContext } from "react";

import axios from "axios";
import API_BASE_URL from "../config";

import GeneralContext from "./GeneralContext";
import { watchlist } from "../data/data";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode = "BUY" }) => {
  const { closeBuyWindow, closeSellWindow } = useContext(GeneralContext);

  const stock = watchlist.find((s) => s.name === uid);
  const initialPrice = stock ? stock.price : 0.0;

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(initialPrice);

  const handleClose = () => {
    if (mode === "BUY") {
      closeBuyWindow();
    } else {
      closeSellWindow();
    }
  };

  const handleOrderClick = () => {
    axios.post(`${API_BASE_URL}/newOrder`, {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: mode,
    }).then(() => {
      handleClose();
    }).catch((err) => {
      console.error("Error creating order:", err);
    });
  };

  const handleCancelClick = () => {
    handleClose();
  };

  const marginRequired = (stockQuantity * stockPrice).toFixed(2);

  return (
    <div className={`container ${mode === "SELL" ? "sell-mode" : ""}`} id="buy-window" draggable="true">
      <div className="header">
        <h3>{mode === "BUY" ? "Buy" : "Sell"} {uid}</h3>
        <div className="market-options">
          <label>
            <input type="radio" name="order-type-market" defaultChecked />
            Regular
          </label>
        </div>
      </div>

      <div className="tab">
        <button className="active">Regular</button>
      </div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{marginRequired}</span>
        <div>
          <button className="btn btn-blue" onClick={handleOrderClick}>
            {mode === "BUY" ? "Buy" : "Sell"}
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
