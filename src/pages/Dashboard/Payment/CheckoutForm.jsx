import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "./../../../hooks/useCart";
import { axiosHook } from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const [clientSecret, setClientSecret] = useState();
  const elements = useElements();
  const [cart,refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosHook
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log("res.data.clientsecret", res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [totalPrice]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("payment intent ", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        // now save the payment in the database
        const payment = {
          email: user?.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), //utc date convert use moment js
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };
        const res = await axiosHook.post("/payments", payment);
        console.log("payment saved", res.data);
        if(res.data?.paymentResult?.insertedId){
          Swal.fire('Nice', "Payment Successfull", 'success')
        }
        if(res.data?.deletedResult?.deletedCount){
          refetch();
        }
        navigate('/dashboard/paymentHistory')
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-6">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#1a202c", // Text color
                "::placeholder": {
                  color: "#718096", // Placeholder color
                },
              },
              invalid: {
                color: "#e53e3e", // Error text color
              },
            },
          }}
        />

        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay Now
        </button>

        <p className="text-red-600 mt-2">{error}</p>
        {transactionId && (
          <p className="text-xl text-green-400">
            Your Transaction Id:{transactionId}{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
