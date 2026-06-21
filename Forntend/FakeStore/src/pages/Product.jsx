import React, { useState, useEffect } from "react";
import Loading from "../assets/Loading.gif";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchProducts = async () => {
    try {
      setIsLoading(ture);

      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      setIsError(true);
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="w-full h-[90vh] flex justify-center items-center">
          <img src={Loading} alt="" className="w-50" />
        </div>
      ) : (
        <div className="p-10 gird grid-cols-4 gap-5 ">
          {products.length > 0 &&
            products.map((product, index) => (
              <div className=" h-100 w-80 border rounded-xl bg-amber-50 p-3 key={index}">
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
                    The color could be slightly different between on the screen
                    and in practice.
                  </p>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p>5K+ bought in past month</p>
                  <p>677</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Products;
