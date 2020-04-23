import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

const Pay = () => {
  return (
    <div className="previous py-20 px-20 flex flex-row content-center justify-around align-middle">
      <div class="w-3/4 bg-white rounded overflow-hidden shadow flex flex-col justify-around align-middle">
        <div class="px-10 py-10">
          <div class="flex flex-row items-center justify-around text-red-500 font-black text-center mb-2">
            <div className="p-8  overflow-hidden shadow rounded border-solid border-red-500">
              <p className="mt-1 text-6xl text-red-500 text-center lobster-font">
                your order :
              </p>
              <div className="mt-2 text-4xl text-center lobster-font">
                <p>rose name : red</p>
                <p>quantity : 6</p>
                <p>location : 33.322 / 3.6</p>
                <p>place : house</p>
              </div>
            </div>
            <div className="">
              <p className="mt-1 mb-8 text-6xl text-red-500 text-center lobster-font">
                payment :
              </p>
              <PayPalButton
                amount="0.01"
                currency="USD"
                shippingPreference="NO_SHIPPING"
                onSuccess={(details, data) => {
                  alert(
                    "Transaction completed by " + details.payer.name.given_name
                  );
                }}
                options={{
                  clientId:
                    "AeJnqFw-Xf7swKFf_Rkt7ehBnQDuwR0XhGrg1is1wI-LQWhM9zIEMEnTboQb60Qvg05ylqrHU6mYJQ11",
                  disableFunding: "card",
                }}
                style={{
                  color: "silver",
                  shape: "pill",
                  label: "pay",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
