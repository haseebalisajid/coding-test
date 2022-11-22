import { FC, useState, useEffect } from "react";
import useAPI from "../hooks/useAPI";
import { useSelector, actions, useDispatch } from "../store";
import Navbar from "./Navbar";
const Transactions: FC = () => {
  const { getTransactions } = useAPI();
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (Object.keys(transactions).length) {
      setCurrentPage(0);
      dispatch(actions.clearStore());
    }
    getTransactions(currentPage).then((transactions) => {
      dispatch(actions.addTransactions({ transactions }));
    });
    console.log("checking useEffect calls");
  }, []);

  const loadMoreData = () => {
    setCurrentPage((current) => current + 1);
    getTransactions(currentPage).then((transactions) => {
      dispatch(actions.addTransactions({ transactions }));
    });
  };

  return (
    <div>
      <Navbar />
      <div className="overflow-x-auto w-50">
        <table className="w-full border-collapse border border-slate-400">
          <thead className="bg-white text-black w-full">
            <tr className="bg-gray-100 flex flex-row justify-center border border-slate-400">
              <th className="px-4 py-2 w-4/5 border">ID</th>
              <th className="px-4 py-2 w-4/5 border">From</th>
              <th className="px-4 py-2 w-1/5 border">Amount</th>
              <th className="px-4 py-2 w-4/5 border">To</th>
              <th className="px-4 py-2 w-4/5 border">Token</th>
              <th className="px-4 py-2 w-1/5 border">Token Name</th>
            </tr>
          </thead>
          <tbody
            className="bg-white flex flex-col justify-between overflow-y-scroll w-full"
            style={{ height: "60vh" }}
          >
            {Object.values(transactions).map((value) => (
              <tr className="mb-4" key={value.id}>
                <td className="p-4 w-1/5">{value.id}</td>
                <td className="p-4 w-1/5">{value.from}</td>
                <td className="p-4 w-1/5">{value.amount}</td>
                <td className="p-4 w-1/5">{value.to}</td>
                <td className="p-4 w-1/5">{value.token}</td>
                <td className="p-4 w-1/5">{value.tokenName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row justify-around mt-2">
        <button
          className="text-lg cursor-pointer font-semibold border rounded bg-white text-black p-2"
          onClick={loadMoreData}
        >
          Load More
        </button>
        <h2 className="text-lg cursor-pointer font-semibold border rounded bg-white text-black p-2">
          {`Total Count: ${Object.keys(transactions).length}`}
        </h2>
      </div>
    </div>
  );
};

export default Transactions;
