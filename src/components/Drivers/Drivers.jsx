import Avatar1 from "../../assets/avatars/Avatar.png";
import Avatar2 from "../../assets/avatars/Avatar-1.png";
import Avatar3 from "../../assets/avatars/Avatar-2.png";
import LinkedIn from "../../assets/icons/LinkedIn.png";
import Instagram from "../../assets/icons/IG.png";
import "./index.css";

const Drivers = () => {
  return (
    <div className="px-2 md:px-12 pt-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-4 gap-2 md:gap-0">
        <b className="text-[32px]">Наші водії</b>
        <b className="primary-text-color">Усі водії (7)</b>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-5">
        <div className="flex flex-col items-center gray-border p-4 w-full md:w-auto">
          <img src={Avatar1} alt="Avatar" className="h-[80px] w-[80px]" />
          <b>Олександр</b>
          <span>Досвід роботи: 5 років</span>
          <div className="flex flex-row py-2 gap-2">
            <img src={Instagram} alt="Instagram" />
            <img src={LinkedIn} alt="LinkedIn" />
          </div>
        </div>
        <div className="flex flex-col items-center gray-border p-4 w-full md:w-auto">
          <img src={Avatar2} alt="Avatar" className="h-[80px] w-[80px]" />
          <b>Володимир</b>
          <span>Досвід роботи: 7 років</span>
          <div className="flex flex-row py-2 gap-2">
            <img src={Instagram} alt="Instagram" />
            <img src={LinkedIn} alt="LinkedIn" />
          </div>
        </div>
        <div className="flex flex-col items-center gray-border p-4 w-full md:w-auto">
          <img src={Avatar1} alt="Avatar" className="h-[80px] w-[80px]" />
          <b>Ірина</b>
          <span>Досвід роботи: 1 рік</span>
          <div className="flex flex-row py-2 gap-2">
            <img src={Instagram} alt="Instagram" />
            <img src={LinkedIn} alt="LinkedIn" />
          </div>
        </div>
        <div className="flex flex-col items-center gray-border p-4 w-full md:w-auto">
          <img src={Avatar2} alt="Avatar" className="h-[80px] w-[80px]" />
          <b>Михайло</b>
          <span>Досвід роботи: 1 рік</span>
          <div className="flex flex-row py-2 gap-2">
            <img src={Instagram} alt="Instagram" />
            <img src={LinkedIn} alt="LinkedIn" />
          </div>
        </div>
        <div className="flex flex-col items-center gray-border p-4 w-full md:w-auto">
          <img src={Avatar3} alt="Avatar" className="h-[80px] w-[80px]" />
          <b>Юлія</b>
          <span>Досвід роботи: 2 роки</span>
          <div className="flex flex-row py-2 gap-2">
            <img src={Instagram} alt="Instagram" />
            <img src={LinkedIn} alt="LinkedIn" />
          </div>
        </div>
      </div>
      <hr className="border-gray-200 border-t-2 mt-16" />
    </div>
  );
};

export default Drivers;
