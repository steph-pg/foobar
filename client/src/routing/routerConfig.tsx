import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { Layout } from "pages/Layout";
import { Login } from "pages/Login";
import { ProtectedRoute } from "routing/ProtectedRoute";

export const routerConfig = createRoutesFromElements(
  <Route>
    <Route path="/" element={<ProtectedRoute />}>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/customer" element={<div>Customers</div>} />
        <Route path="/quote" element={<div>Quotes</div>} />
        <Route path="/order" element={<div>Orders</div>} />
        <Route path="/invoice" element={<div>Invoices</div>} />
        <Route path="/product" element={<div>Products</div>} />
        <Route path="/transaction" element={<div>Transactions</div>} />
        <Route path="/shipment" element={<div>Shipments</div>} />
      </Route>
    </Route>
    <Route path="/login" element={<Login />} />
  </Route>
)

const router = createBrowserRouter(routerConfig)

export default router
