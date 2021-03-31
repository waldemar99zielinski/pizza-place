import React from "react";

const OrderInfoForm = () => {
  return (
    <div className="order-finalization-order-info-container">
      <form>
        <label>Delivery</label>
        <div>
          <input type="radio" id="male" name="gender" value="male" />
          <label for="male">YES</label>
        </div>
        <div>
          <input type="radio" id="female" name="gender" value="female" />
          <label for="female">NO</label>
        </div>
      </form>
      <form>
        <label>Payment</label>
        <div>
          <input type="radio" id="male" name="gender" value="male" />
          <label for="male">READY MONEY</label>
        </div>
        <div>
          <input type="radio" id="female" name="gender" value="female" />
          <label for="female">CARD</label>
        </div>
      </form>
    </div>
  );
};

export default OrderInfoForm;
