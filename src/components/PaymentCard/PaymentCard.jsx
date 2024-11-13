import { Link } from "react-router-dom";
import css from "./PaymentCard.module.css";

const PaymentCard = ({ payment: { id, cardOwner, amount, description } }) => {
  return (
    <div className={css.wrapper}>
      <p>
        <b>Card owner: {cardOwner}</b>
      </p>
      <p>
        <b>Amount: {amount}</b>
      </p>
      <p>
        <b>Description: {description}</b>
      </p>

      <Link to={`/payments/${id}`}>Details</Link>
    </div>
  );
};

export default PaymentCard;
