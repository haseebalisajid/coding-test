import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Navbar: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-900 px-10 text-white py-5 flex flex-row">
      <h1
        className="text-lg font-semibold mr-2 cursor-pointer border p-2 rounded hover:bg-white hover:text-black"
        onClick={() => navigate("/Welcome")}
      >
        Welcome
      </h1>
      <h1
        className="text-lg font-semibold ml-2 cursor-pointer border p-2 rounded hover:bg-white hover:text-black"
        onClick={() => navigate("/Transactions")}
      >
        Transactions
      </h1>
    </div>
  );
};

export default Navbar;
