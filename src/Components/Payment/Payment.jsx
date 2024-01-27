import { Link } from "react-router-dom";
import { CreditCardIcon, PaypalIcon, CashIcon } from "../../Constants";

function Payment({ setActivePayment }) {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 bg-rgba z-50 flex justify-end">
      <div
        className="absolute top-0 right-0 bottom-0 left-0"
        onClick={() => setActivePayment(false)}
      ></div>
      <div className="w-[405px] h-full min-h-screen bg-midnight pt-8 px-6 rounded-s-xl relative">
        <div className="pb-6 border-b border-b-base-dark-line mb-6">
          <h2 className="text-[28px] font-semibold leading-[39.2px] mb-2">
            Payment
          </h2>
          <p className="leading-[22.4px] text-lighter">
            3 payment method available
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl leading-7 mb-4">
            Payment Method
          </h3>
          <ul className="flex gap-2 w-[319px] h-16 mb-4">
            <li className="w-[101px] h-16 rounded-lg border border-base-dark-line">
              <div className="text-center">
                <CreditCardIcon />
              </div>
              <p className="text-sm font-semibold text-center">Credit Card</p>
            </li>
            <li className="w-[101px] h-16 rounded-lg border border-base-dark-line">
              <div>
                <PaypalIcon />
                <p className="text-sm font-semibold text-center">PayPal</p>
              </div>
            </li>
            <li className="w-[101px] h-16 rounded-lg border border-base-dark-line">
              <div>
                <CashIcon />
                <p className="text-sm font-semibold text-center">Cash</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full h-[74px] mb-4">
          <h3 className="text-sm leading-[18.4px] mb-2">Cardholder Name</h3>
          <input
            className="w-[357px] h-12 ps-[14px] rounded-lg border border-base-dark-line bg-base-dark text-sm font-normal text-lighter flex items-center justify-start"
            type="text"
            placeholder="Enter your name..."
          />
        </div>
        <div className="w-full h-[74px] mb-4">
          <h3 className="text-sm leading-[18.4px] mb-2">Card Number</h3>
          <input
            className="w-[357px] h-12 ps-[14px] rounded-lg border border-base-dark-line bg-base-dark text-sm font-normal text-lighter flex items-center justify-start"
            type="text"
            placeholder="Enter card number..."
          />
        </div>
        <div className="w-full flex justify-between items-center gap-3 border-b border-b-base-dark-line pb-4 mb-4">
          <div className="w-[172px]">
            <h3 className="mb-2 text-sm">Expiration Date</h3>
            <input
              className="bg-base-dark border border-base-dark-line h-12 w-full rounded-lg ps-[14px] text-sm"
              type="text"
              placeholder="Enter card date..."
            />
          </div>
          <div className="w-[172px]">
            <h3 className="mb-2 text-sm">CVV</h3>
            <input
              className="bg-base-dark border border-base-dark-line h-12 w-full rounded-lg ps-[14px] text-sm"
              type="password"
              maxLength={3}
              placeholder="Enter card CVV..."
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-3 mb-8">
          <div className="w-[172px]">
            <h3 className="leading-[18.2px] text-sm mb-2">Order Type</h3>
            <div className="w-full h-full flex items-center justify-between">
              <button className="w-10 h-full ps-1 border-t border-t-base-border-color border-s border-s-base-border-color border-b border-b-base-border-color py-[11px] rounded-s-lg">
                <i className="fa-solid fa-angle-down"></i>
              </button>
              <select className="w-[132px] cursor-pointer bg-midnight ps-0 p-[14px] flex items-center gap-[10px] rounded-e-lg border-t border-t-base-border-color border-e border-e-base-border-color border-b border-b-base-border-color leading-[18.2px] appearance-none focus:outline-none">
                <option value="dish in">Dish In</option>
                <option value="to go">To Go</option>
                <option value="Delivery">Delivery</option>
              </select>
            </div>
          </div>
          <div className="w-[172px]">
            <h3 className="leading-[18.2px] text-sm mb-2">Table no.</h3>
            <input
              className="bg-base-dark border border-base-dark-line h-12 w-full rounded-lg ps-[14px] text-sm"
              type="text"
              placeholder="Enter your table no..."
            />
          </div>
        </div>
        <div className="flex w-full h-12 justify-between items-center gap-2">
          <button
            className="border border-primary w-full h-full rounded-lg text-primary duration-75 text-sm font-semibold hover:bg-primary hover:shadow-primary-shadow hover:text-[#FAFAFA]"
            onClick={() => setActivePayment(false)}
          >
            Cancel
          </button>
          <Link
            className="border border-primary w-full h-full rounded-lg text-[#FAFAFA] duration-75 bg-primary shadow-primary-shadow text-sm font-semibold hover:bg-transparent hover:shadow-none hover:text-primary flex justify-center items-center"
            to={"/confirm-payment"}
          >
            <button className="">Confirm Payment</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Payment;
