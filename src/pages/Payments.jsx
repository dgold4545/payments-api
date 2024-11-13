import { useEffect, useState } from "react";
import { getPayments } from "../payments-api";
import PaymentList from "../components/PaymentList/PaymentList";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getPayments();
      setPayments(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Payments page</h1>
      {payments.length > 0 && <PaymentList payments={payments} />}
    </div>
  );
};

export default Payments;
