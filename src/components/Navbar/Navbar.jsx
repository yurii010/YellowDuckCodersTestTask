import logo from "../../assets/logos/logo.png";
import "./index.css";

const Navbar = () => {
  return (
    <div className="px-2 md:px-12 pt-4 flex flex-col md:flex-row justify-between pb-6 md:pb-0">
      <div className="flex flex-col md:flex-row gap-4 md:gap-10">
        <div className="pb-4">
          <img src={logo} alt="Logo" className="h-10 md:h-auto" />
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-start md:items-center">
          <div>Головна</div>
          <div>Перевізникам</div>
          <div>Про нас</div>
          <div className="primary-text-color active-page">Профіль перевізника</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5 pt-2 md:pt-0">
        <div className="pl-0 md:pl-5 border-l-0 md:border-l border-l-gray-400">
          <span className="primary-text-color">Створити профіль</span>
        </div>
        <div>
          <button className="primary-div-color text-white py-2 px-4 md:py-3 md:px-6">Увійти</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
