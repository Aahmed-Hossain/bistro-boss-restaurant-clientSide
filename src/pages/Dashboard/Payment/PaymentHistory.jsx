import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { axiosHook } from "../../../hooks/useAxios";

const PaymentHistory = () => {
    const {user} = useAuth();
    const {data:payments=[]} = useQuery({
        queryKey: ['paymentHistory'],
        queryFn: async()=> {
            const res  = await axiosHook.get(`/payments/${user?.email}`)
            return res.data;
        }
       
    })
    return (
        <div>
            <h2 className="text-center font-semibold text-3xl"></h2>
            <div>
            {payments.map((item, index) => (
  <div key={item._id} className="flex items-center justify-between gap-2 py-2 border border-slate-200 rounded-xl mb-4 p-4">
    {/* left div */}
    <div className="flex items-center gap-6">
      <span className=" text-xl font-semibold p-3">{index + 1}</span>
      <div>
        <p> Total Food: {item?.cartIds?.length || item?.cartId?.length}</p>
      </div>
      <div>
      <p className="text-[#A2A2A2">Transaction ID: {item.transactionId}</p>
        <p className="text-[#A2A2A2">Price: {item.price}</p>
        
      </div>
    </div>
    {/* right div */}
    <div className="flex items-center gap-4 pr-2">
      <div>
        <p>{item.status}</p>
      </div>
    </div>
  </div>
))}
            </div>
            
           
            
        </div>
    );
};

export default PaymentHistory;