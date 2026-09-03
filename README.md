# TradeVista

> A full-stack stock trading platform and investment ecosystem inspired by Zerodha (Kite). TradeVista features a real-time trading dashboard, dynamic order placement & cancellation modals, live portfolio management (Holdings & Positions), an interactive client marketing portal with Sign Up / Login, and a production-ready Express backend connected to MongoDB Atlas.

---

## Live Render Deployments

| Service | Live URL | Description |
|---|---|---|
| **Marketing Frontend** | [https://tradevista-frontend.onrender.com](https://tradevista-frontend.onrender.com) | Client-facing landing pages, products, pricing & Sign Up / Login |
| **Trading Dashboard** | [https://tradevista-dashboard-eibc.onrender.com](https://tradevista-dashboard-eibc.onrender.com) | Real-time Kite-style trading dashboard, order book & portfolio |
| **Backend API** | [https://tradevista-backend-eibc.onrender.com](https://tradevista-backend-ei10.onrender.com) | RESTful API server connected to MongoDB Atlas |

---

## Key Features

### Trading Dashboard (`/dashboard`)
* **Live Search & Watchlist**: Filter stocks dynamically as you type with live counts, change percentages, and portfolio allocation charts.
* **Unified Action Window (Buy / Sell)**: 
  * Dynamic header and button themes (Blue for **BUY**, Orange/Red for **SELL**).
  * Auto-lookup for Last Traded Price (LTP).
  * Real-time margin requirement calculations.
  * Micro-animations and slide-up modal transitions.
* **Portfolio & Dynamic P&L**:
  * **Holdings**: Real-time table of long-term investments with dynamic `reduce()` P&L, day change, total investment calculations, and visual bar graphs.
  * **Positions**: Intraday and derivative contracts with live profit/loss breakdown.
* **Order Management & Cancellation**:
  * Live order book showing instrument, quantity, price, execution mode, status badges (`EXECUTED` / `CANCELLED`), and timestamps.
  * Instant order cancellation (`DELETE /cancelOrder/:id`).
* **Funds & Margin Overview**: Equity and commodity margin balances and cash accounts.

### Client Portal / Marketing Site (`/frontend`)
* **Interactive Landing Pages**: Complete suite including Home, About Us, Products, Pricing Calculator, and Support Ticket creation.
* **Sign Up & Login Portal**: Tabbed authentication page with client-side form validation, error banners, and clean responsive design.
* **Automated Unit Testing**: Comprehensive test suite using Jest and `@testing-library/react`.

### Backend API (`/backend`)
* **RESTful Endpoints**: Express backend supporting `/allHoldings`, `/allPositions`, `/newOrder`, `/allOrders`, and `/cancelOrder/:id`.
* **Database Integration**: MongoDB Atlas via Mongoose schemas and models.
* **CORS & Environment Configurations**: Configured for cross-origin deployment across Render services.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend Marketing** | React.js, Bootstrap 5, React Router DOM, Jest, Testing Library |
| **Trading Dashboard** | React.js, Material-UI (MUI), Chart.js, React-Chartjs-2, Vanilla CSS |
| **Backend API** | Node.js, Express.js, Mongoose, Passport.js, Dotenv, Cors |
| **Database** | MongoDB Atlas |
| **Deployment** | Render (Static Sites & Web Services), Render Blueprint (`render.yaml`) |

---

## Repository Structure

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
│   │   ├── components/       # WatchList, BuyActionWindow, Holdings, Positions, Orders, Summary, Funds
│   │   ├── config.js         # API Base URL environment configuration
│   │   └── data/             # Stock list & market mock data
│   └── package.json
├── frontend/                 # Client marketing website & landing pages
│   ├── src/
│   │   ├── landing_page/     # Home, About, Pricing, Products, Support, Signup
│   │   └── test/             # Jest component unit tests
│   └── package.json
├── render.yaml               # Render Blueprint multi-service deployment spec
└── README.md
```

---

## Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/achaltri29/TradeVista.git
cd TradeVista
```

### 2. Setup Backend
```bash
cd backend
npm install
# Create .env and set MONGO_URL
npm start
```
*Runs on `http://localhost:3002`.*

### 3. Setup Trading Dashboard
```bash
cd dashboard
npm install
npm start
```
*Runs on `http://localhost:3000` (or `3001`).*

### 4. Setup Marketing Frontend
```bash
cd frontend
npm install
npm start
```

---

## Running Tests

To run the automated Jest test suite in the frontend:
```bash
cd frontend
npm test -- --watchAll=false
```

---

## License
This project is open-source and available under the [MIT License](LICENSE).
