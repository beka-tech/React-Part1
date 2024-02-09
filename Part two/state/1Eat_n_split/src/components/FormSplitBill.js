import React from "react";
import Button from "./Button";

function FormSplitBill({ onhandleSelect, selectedFriend }) {
  function handleSplitBill(e) {
    e.preventDefault();
  }

  return (
    <form className="form-split-bill">
      <h2>split A Bill With {selectedFriend.name}</h2>

      <label>Bill Value</label>
      <input type="text" />

      <label>Your Expense</label>
      <input type="text" />

      <label> {selectedFriend.name} Expense</label>
      <input type="text" />

      <label>Expense</label>
      <select>
        <option value="user">You</option>
        <option value="user">{selectedFriend.name}</option>
      </select>

      <Button onclick={handleSplitBill}>split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
