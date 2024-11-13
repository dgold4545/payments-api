import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { getPaymentsById } from "../payments-api";

import css from "../components/Header/Header.module.css";
import clsx from "clsx";
const PaymentDetails = () => {
  const [paymentData, setPaymentData] = useState(null);
  const { paymentId } = useParams();

  useEffect(() => {
    async function getPaymentDetails() {
      const data = await getPaymentsById(paymentId);
      setPaymentData(data);
    }
    getPaymentDetails();
  }, [paymentId]);

  const addActiveClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div>
      <h2>
        PaymentDetails user{" "}
        {paymentData !== null && ` cardOwner is ${paymentData.cardOwner}`} - id:{" "}
        {paymentId}
      </h2>
      {paymentData !== null && (
        <ul>
          <li>"id": {paymentData.id}</li>
          <li>"cardNumber": {paymentData.cardNumber}</li>
          <li>"cardType": {paymentData.cardType}</li>
          <li>"cardOwner": {paymentData.cardOwner}</li>
          <li> "date": {paymentData.date}</li>
          <li> "amount": {paymentData.amount}</li>
          <li> "description": {paymentData.description}</li>
          <li> "isPaid": {paymentData.isPaid}</li>
        </ul>
      )}

      <ul className={css.flex}>
        <li>
          <NavLink to="bank" className={addActiveClass}>
            Bank info
          </NavLink>
        </li>
        <li>
          <NavLink to="receipt" className={addActiveClass}>
            Receipt info
          </NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export default PaymentDetails;
