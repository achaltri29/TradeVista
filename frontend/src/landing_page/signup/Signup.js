import React, { useState } from "react";

function Signup() {
  const [activeTab, setActiveTab] = useState("signup");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      return;
    }
    if (activeTab === "signup" && !formData.name) {
      setError("Please enter your full name.");
      return;
    }
    // Simulate successful submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "70vh" }}
      >
        <div className="text-center">
          <div style={{ fontSize: "4rem" }}>🎉</div>
          <h2 className="mt-3">
            {activeTab === "signup" ? "Account Created!" : "Welcome Back!"}
          </h2>
          <p className="text-muted">
            {activeTab === "signup"
              ? "Your TradeVista account has been created successfully."
              : "You have been logged in successfully."}
          </p>
          <a href="/" className="btn btn-primary mt-3">
            Go to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh", paddingTop: "40px", paddingBottom: "40px" }}
    >
      <div
        className="card shadow-sm mx-auto"
        style={{ width: "100%", maxWidth: "440px", borderRadius: "12px" }}
      >
        <div className="card-body p-5">
          {/* Logo */}
          <div className="text-center mb-4">
            <img
              src="media/images/logo.svg"
              alt="TradeVista"
              style={{ width: "50%" }}
            />
          </div>

          {/* Tabs */}
          <ul className="nav nav-tabs mb-4" style={{ borderBottom: "2px solid #eee" }}>
            <li className="nav-item" style={{ flex: 1, textAlign: "center" }}>
              <button
                className={`nav-link w-100 ${activeTab === "signup" ? "active" : ""}`}
                style={{
                  fontWeight: "500",
                  border: "none",
                  borderBottom: activeTab === "signup" ? "2px solid #387ed1" : "none",
                  color: activeTab === "signup" ? "#387ed1" : "#888",
                  background: "none",
                }}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </button>
            </li>
            <li className="nav-item" style={{ flex: 1, textAlign: "center" }}>
              <button
                className={`nav-link w-100 ${activeTab === "login" ? "active" : ""}`}
                style={{
                  fontWeight: "500",
                  border: "none",
                  borderBottom: activeTab === "login" ? "2px solid #387ed1" : "none",
                  color: activeTab === "login" ? "#387ed1" : "#888",
                  background: "none",
                }}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
            </li>
          </ul>

          {/* Error Banner */}
          {error && (
            <div className="alert alert-danger py-2" role="alert">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {activeTab === "signup" && (
              <div className="mb-3">
                <label className="form-label text-muted" style={{ fontSize: "0.85rem" }}>
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ borderRadius: "8px" }}
                />
              </div>
            )}

            <div className="mb-3">
              <label className="form-label text-muted" style={{ fontSize: "0.85rem" }}>
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                style={{ borderRadius: "8px" }}
              />
            </div>

            <div className="mb-4">
              <label className="form-label text-muted" style={{ fontSize: "0.85rem" }}>
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                style={{ borderRadius: "8px" }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{ borderRadius: "8px", padding: "10px", fontWeight: "500" }}
            >
              {activeTab === "signup" ? "Create Account" : "Login"}
            </button>
          </form>

          <p className="text-center text-muted mt-4" style={{ fontSize: "0.8rem" }}>
            {activeTab === "signup"
              ? "Already have an account? "
              : "Don't have an account? "}
            <button
              className="btn btn-link p-0"
              style={{ fontSize: "0.8rem", verticalAlign: "baseline" }}
              onClick={() => setActiveTab(activeTab === "signup" ? "login" : "signup")}
            >
              {activeTab === "signup" ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
