import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import toast from "react-hot-toast";

const Orders = () => {
  const { backendUrl, token, currency, user } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [reviewBox, setReviewBox] = useState({}); // track which item shows review box

  const orders = async () => {
    try {
      if (!token) return null;

      const res = await axios.get(backendUrl + "/api/order/userOrders", {
        headers: { token },
      });

      if (res.data.success) {
        let allOrders = [];
        res.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item.status = order.status;
            item.payment = order.payment;
            item.paymentMethod = order.paymentMethod;
            item.date = order.date;
            allOrders.push(item);
          });
        });
        setOrderData(allOrders.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    orders();
  }, [token]);

  const toggleReviewBox = (index) => {
    setReviewBox((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const submitReview = async (index, item) => {
    try {
      const comment = item.review;
      if (!comment) {
        toast.error("Please enter a review.");
        return;
      }

      const res = await axios.post(
        backendUrl + "/api/user/addReview",
        {
          productId: item._id,
          userId: user._id,
          comment,
          rating: 5, 
        },
        { headers: { token } }
      );

      if (res.data.success) {
        toast.success("Review submitted successfully!");
        toggleReviewBox(index);
        orders(); // refresh orders to reflect review if needed
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error submitting review");
    }
  };

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity:{item.quantity}</p>
                  <p>Size:{item.size}</p>
                </div>
                <p className="mt-2">
                  Date:{" "}
                  <span className="text-gray-400">
                    {new Date(item.date).toDateString()}
                  </span>
                </p>
                <p className="mt-2">
                  Payment:{" "}
                  <span className="text-gray-400">{item.paymentMethod}</span>
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>

              {item.status !== "Delivered" && (
                <button
                  onClick={orders}
                  className="border px-4 py-2 text-sm font-medium rounded-sm"
                >
                  Track Order
                </button>
              )}

              {/* Review Button */}
              {item.status === "Delivered" && !reviewBox[index] && (
                <button
                  onClick={() => toggleReviewBox(index)}
                  className="border px-4 py-2 text-sm font-medium rounded-sm mt-2"
                >
                  Write a Review
                </button>
              )}

              {/* Review Box */}
              {item.status === "Delivered" && reviewBox[index] && (
                <div className="flex flex-col gap-2 mt-2 w-full">
                  <textarea
                    placeholder="Write your review..."
                    className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={item.review || ""}
                    onChange={(e) => {
                      const updatedOrders = [...orderData];
                      updatedOrders[index].review = e.target.value;
                      setOrderData(updatedOrders);
                    }}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => submitReview(index, item)}
                      className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700 transition"
                    >
                      Submit Review
                    </button>
                    <button
                      onClick={() => toggleReviewBox(index)}
                      className="bg-gray-300 text-gray-700 px-4 py-2 text-sm rounded-md hover:bg-gray-400 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
