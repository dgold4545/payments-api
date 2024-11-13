import { Route, Routes } from "react-router-dom";

import ProductsPage from "../../pages/ProductsPage";
import AboutPage from "../../pages/AboutPage";
import HomePage from "../../pages/HopePage";
import NotFoundPage from "../../pages/NotFoundPage";
import Header from "../Header/Header";
import Login from "../../pages/Login";
import Payments from "../../pages/Payments";
import PaymentDetails from "../../pages/PaymentDetails";
import BankInfo from "../BankInfo/BankInfo";
import PaymentReceipt from "../PaymentReceipt/PaymentReceipt";

const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <hr />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/payments/:paymentId" element={<PaymentDetails />}>
            <Route path="bank" element={<BankInfo />} />
            <Route path="receipt" element={<PaymentReceipt />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <hr />
      </main>
    </div>
  );
};

export default App;
