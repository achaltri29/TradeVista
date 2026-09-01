# 📈 TradeVista

> A full-stack stock trading platform and investment ecosystem inspired by Zerodha (Kite). TradeVista features a real-time trading dashboard, dynamic order placement modals, portfolio management (Holdings & Positions), and a comprehensive marketing & client-facing portal.

---

## 🌟 Features

### 💻 Trading Dashboard (`/dashboard`)
* **Watchlist**: Real-time stock ticker with visual up/down change indicators and portfolio allocation doughnut chart.
* **Unified Action Window (Buy / Sell)**: 
  * Dynamic header and button themes (Blue for **BUY**, Orange/Red for **SELL**).
  * Auto-lookup for Last Traded Price (LTP).
  * Real-time margin requirement calculations.
  * Micro-animations and slide-up modal transitions.
* **Portfolio & Risk Management**:
  * **Holdings**: Real-time table of long-term investments with P&L, day change, and visual bar charts.
  * **Positions**: Intraday and derivative contracts with live profit/loss breakdown.
* **Orders Management**: Live order book listing executed BUY and SELL trades fetched from MongoDB.
* **Funds & Margin Overview**: Equity and commodity margin balances and cash accounts.

### 🌐 Client Portal / Marketing Site (`/frontend`)
* **Interactive Landing Pages**: Complete suite including Home, About Us, Products, Pricing Calculator, and Support Ticket creation.
* **Automated Unit Testing**: Comprehensive test suite using Jest and `@testing-library/react`.

### ⚡ Backend API (`/backend`)
* **RESTful Endpoints**: Built with Node.js and Express.
* **Database**: MongoDB Atlas via Mongoose models for `Holdings`, `Positions`, and `Orders`.
* **CORS & Body-Parser**: Full cross-origin and payload support.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend Marketing** | React.js, Bootstrap 5, React Router DOM, Jest, Testing Library |
| **Trading Dashboard** | React.js, Material-UI (MUI), Chart.js, React-Chartjs-2, Vanilla CSS |
| **Backend API** | Node.js, Express.js, Mongoose, Passport.js, Dotenv, Cors |
| **Database** | MongoDB Atlas |

---

## 📁 Repository Structure

```
TradeVista/
├── backend/                  # Express REST API & MongoDB models
│   ├── index.js              # Server entry point & routes
│   ├── model/                # Mongoose database models
│   ├── schemas/              # Mongoose schemas (Orders, Holdings, Positions)
│   ├── .env.example          # Environment variables template
│   └── package.json
├── dashboard/                # Kite-style React trading dashboard
│   ├── src/
│   │   ├── components/       # WatchList, BuyActionWindow, Holdings, Positions, Orders, Funds
│   │   └── data/             # Stock list & market mock data
│   └── package.json
├── frontend/                 # Client marketing website & landing pages
│   ├── src/
│   │   ├── landing_page/     # Home, About, Pricing, Products, Support
│   │   └── test/             # Jest component unit tests
│   └── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites
* [Node.js](https://nodejs.org/) (v16 or higher)
* [npm](https://www.npmjs.com/)
* [MongoDB Atlas](https://www.mongodb.com/atlas) account (or local MongoDB)

### 2. Clone the Repository
```bash
git clone https://github.com/achaltri29/TradeVista.git
cd TradeVista
```

---

### 3. Setup Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   npm install
   ```
2. Create your `.env` file from the template:
   ```bash
   cp .env.example .env
   ```
3. Update `MONGO_URL` in `.env` with your MongoDB connection string.
4. Start the backend server:
   ```bash
   npm start
   ```
   *The backend runs on `http://localhost:3002`.*

---

### 4. Setup Trading Dashboard
1. Open a new terminal and navigate to the dashboard directory:
   ```bash
   cd dashboard
   npm install
   ```
2. Start the dashboard application:
   ```bash
   npm start
   ```
   *The dashboard runs on `http://localhost:3000` (or `3001`).*

---

### 5. Setup Marketing Frontend
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   npm install
   ```
2. Start the marketing website:
   ```bash
   npm start
   ```

---

## 🧪 Running Tests

To run the automated Jest test suite in the frontend:
```bash
cd frontend
npm test -- --watchAll=false
```

---

## 🗺️ Roadmap & Upcoming Features

- [ ] **Authentication System**: User registration, login, and JWT-based session authorization.
- [ ] **Interactive Watchlist Search**: Real-time filtering across instruments.
- [ ] **Live P&L & Portfolio Calculations**: Dynamic aggregate computation across holdings.
- [ ] **Real-time Price Engine**: WebSockets / Socket.io live market tick simulator.
- [ ] **Funds Top-up & Withdrawal**: Dynamic margin adjustments on order placement.
- [ ] **Order Cancellation & Statuses**: Support for `OPEN`, `EXECUTED`, and `CANCELLED` order lifecycles.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
