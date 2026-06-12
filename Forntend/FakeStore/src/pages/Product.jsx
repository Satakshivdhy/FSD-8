import React from "react";

const Product = () => {
  return (
    <>
      <div className="p-10">
        <div className=" h-100 w-80 border rounded-xl bg-amber-50 p-3">
          <div className="w-full h-50  bg-amber-100  flex justify-center border-0 rounded-2xl">
            <img
              src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png"
              alt=""
              className="h-full"
            />
          </div>
          <div>
            <p>Mens Casual Slim Fit</p>
            <p>
              The color could be slightly different between on the screen and in
              practice.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
