import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/comas";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  const sign_line = transaction.amount < 0 ? "minus" : "plus";

  return (
    <li className={sign_line}>
      {transaction.text}{" "}
      <span>
        {sign}${numberWithCommas(Math.abs(transaction.amount))}
      </span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
