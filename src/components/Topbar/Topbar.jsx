import logo from "../../assets/logos/bus-logo.png";
import planet from "../../assets/icons/planet.png";
import phone from "../../assets/icons/phone.png";
import fire from "../../assets/icons/fire.png";
import people from "../../assets/icons/people.png";
import train from "../../assets/icons/train.png";
import mark from "../../assets/icons/mark.png";
import building from "../../assets/icons/building.png";
import background from "../../assets/backgrounds/background.jpg";

const Topbar = () => {
  return (
    <div className="px-2 md:px-12 pb-20 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${background})` }}>
      <div className="py-10">
        <span className="text-gray-500 text-sm md:text-base">
          Головна / Профіль перевізника / <b>Stripe</b>
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-3">
        <div className="pr-0 md:pr-6 flex justify-center md:justify-start">
          <img src={logo} alt="Stripe bus logo" className="w-32 md:w-auto" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <b className="text-3xl sm:text-[48px] text-center sm:text-left">Stripe</b>
            <div className="div-border-color primary-text-color p-2 text-center sm:text-left">43 Поїздок</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div className="flex flex-row items-center gap-2">
              <img src={planet} alt="Planet icon" className="w-5 h-5 sm:w-auto sm:h-auto" />
              <span className="primary-text-color break-all text-sm sm:text-base">https://stripe.com</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img src={phone} alt="Phone icon" className="w-5 h-5 sm:w-auto sm:h-auto" />
              <span className="primary-text-color text-sm sm:text-base">+38 (073) 555 55 55</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <img src={fire} alt="Fire icon" className="w-8 h-8 sm:w-11 sm:h-11" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm gray-text">На ринку від</span>
                <b className="text-sm sm:text-base">Травень 31, 2011</b>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={people} alt="People icon" className="w-8 h-8 sm:w-11 sm:h-11" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm gray-text">Перевезених пасажирів:</span>
                <b className="text-sm sm:text-base">4000+</b>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={train} alt="Train icon" className="w-8 h-8 sm:w-11 sm:h-11" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm gray-text">Автопарк</span>
                <b className="text-sm sm:text-base">8 бусів</b>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={mark} alt="Mark icon" className="w-8 h-8 sm:w-11 sm:h-11" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm gray-text">Обслуговуємо</span>
                <b className="text-sm sm:text-base">8 країн</b>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={building} alt="Building icon" className="w-8 h-8 sm:w-11 sm:h-11" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm gray-text">Місто</span>
                <b className="text-sm sm:text-base">Львів</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
