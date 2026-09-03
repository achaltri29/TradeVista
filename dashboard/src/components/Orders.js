import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../config";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  const fetchOrders = () => {
    axios
      .get(`${API_BASE_URL}/allOrders`)
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleCancelOrder = (orderId) => {
    axios
      .delete(`${API_BASE_URL}/cancelOrder/${orderId}`)
      .then(() => {
        fetchOrders();
      })
      .catch((err) => {
        console.error("Error cancelling order:", err);
      });
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <>
          <h3 className="title">Orders ({allOrders.length})</h3>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Price (₹)</th>
                  <th>Mode</th>
                  <th>Status</th>
                  <th>Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((order, index) => {
                  const modeClass = order.mode === "BUY" ? "profit" : "loss";
                  const isCancelled = order.status === "CANCELLED";
                  return (
                    <tr key={index} style={{ opacity: isCancelled ? 0.5 : 1 }}>
                      <td>{order.name}</td>
                      <td>{order.qty}</td>
                      <td>{order.price.toFixed(2)}</td>
                      <td className={modeClass}>{order.mode}</td>
                      <td>
                        <span
                          style={{
                            padding: "2px 8px",
                            borderRadius: "4px",
                            fontSize: "0.75rem",
                            fontWeight: "500",
                            backgroundColor: isCancelled
                              ? "#f5f5f5"
                              : order.status === "EXECUTED"
                              ? "#e8f5e9"
                              : "#fff3e0",
                            color: isCancelled
                              ? "#9e9e9e"
                              : order.status === "EXECUTED"
                              ? "#2e7d32"
                              : "#e65100",
                          }}
                        >
                          {order.status || "EXECUTED"}
                        </span>
                      </td>
                      <td style={{ fontSize: "0.75rem", color: "#666" }}>
                        {formatDate(order.createdAt)}
                      </td>
                      <td>
                        {!isCancelled ? (
                          <button
                            onClick={() => handleCancelOrder(order._id)}
                            style={{
                              border: "1px solid #ff5722",
                              background: "transparent",
                              color: "#ff5722",
                              borderRadius: "4px",
                              padding: "2px 10px",
                              cursor: "pointer",
                              fontSize: "0.75rem",
                            }}
                          >
                            Cancel
                          </button>
                        ) : (
                          <span style={{ color: "#bbb", fontSize: "0.75rem" }}>
                            —
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
