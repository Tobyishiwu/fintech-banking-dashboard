#  FinBank – High-Fidelity Fintech Business Dashboard

FinBank is a premium, pixel-perfect digital banking and business suite interface designed for modern web and mobile viewports. Built using **React (Vite)** and **Tailwind CSS**, this frontend application replicates the premium dark-mode aesthetics and fluid interactivity of top-tier financial apps like Moniepoint.

📱 **[Live Production URL on Vercel](https://fintech-banking-dashboard-nine.vercel.app)**

🔐 **Instant Demo Access Credentials:**
* **Email:** `demo@finbank.com`
* **Password:** `password`

---

---

## 💎 Core Project Features

* **Premium Dark UI/UX:** Styled using custom depth gradients, blur micro-interactions (`backdrop-blur`), and cohesive high-contrast typography designed for financial telemetry.
* **Mobile-First Responsive Layout:** Custom responsive sidebar transitions seamlessly between a desktop side dock and a mobile slide-out drawer, engineered with visual active-state feedback scales.
* **Dynamic Data Persistence:** Balance metrics, operational metrics worksheets, and transaction histories are synced to a `localStorage` runtime engine. Data survives hard page refreshes seamlessly.
* **Robust Client-Side Authentication:** Securely implements a standalone login and registration flow.
* **Advanced Route Guards:** Restricts access to core dashboard layout systems via high-order `ProtectedRoute` checks. Direct URL-bar hacking redirects back to the login gateway.
* **Analytical Metric Cards & Feeds:** Financial history feed automatically transforms currency inputs using localized systems (`.toLocaleString('en-US')`) and dynamically adjusts row coloration bases on ledger classifications (Credit vs Debit).

---

## 🛠️ Tech Stack & Architecture

* **Framework:** React 18 (Powered by Vite for high-speed HMR compilation)
* **Styling:** Tailwind CSS (Utilizing utility layout utilities and responsive breakpoints)
* **Routing System:** React Router DOM v6 (Modular nested route configurations)
* **State Architecture:** Global React Context API (Centralized transactional distribution node)
* **Iconographies:** Lucide React (Clean, geometric stroke vectors)

### 📂 Professional Directory Layout

```text
src/
├── components/          # Reusable structural widgets (Sidebar, Navbar, TransactionCard)
├── context/             # Global application state layer & localStorage engines
├── layout/              # Parent interface structures (MainLayout frame)
├── pages/               # Top-tier view routers (Dashboard, Login, Register, Payments)
├── App.jsx              # Application router core table & guard bindings
└── main.jsx             # DOM element mounts
