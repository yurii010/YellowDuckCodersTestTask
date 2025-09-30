import Logo from "../../assets/footer/FooterLogo.png";
import Phone from "../../assets/footer/Phone.png";
import Sms from "../../assets/footer/sms.png";
import Facebook from "../../assets/footer/Facebook.png";
import Instagram from "../../assets/footer/Instagram.png";
import Dribbble from "../../assets/footer/Dribbble.png";
import LinkedIn from "../../assets/footer/LinkedIn.png";
import Twitter from "../../assets/footer/Twitter.png";

const Footer = () => {
  return (
    <div className="px-2 md:px-12 pt-10 pb-8 bg-[#202430] text-white flex flex-col gap-8">
      <div className="grayest-border-bottom flex flex-col md:flex-row justify-between gap-8 md:gap-5 pb-5">
        <div className="flex flex-col gap-4 md:gap-9 items-center md:items-start text-center md:text-left">
          <img src={Logo} alt="Logo icon" className="w-[160px]" />
          <span className="font-thin text-[16px] md:text-[18px]">
            Платформа пошуку перевізників <br /> та бронювання поїздок
          </span>
        </div>
        <div className="flex flex-col gap-2 md:gap-4 items-center md:items-start">
          <b>Клієнтам</b>
          <span className="font-thin">Головна</span>
          <span className="font-thin">Про нас</span>
          <span className="font-thin">Ціни</span>
          <span className="font-thin">Маршрути</span>
          <span className="font-thin">Політика приватності</span>
        </div>
        <div className="flex flex-col gap-2 md:gap-4 items-center md:items-start">
          <b>Перевізникам</b>
          <span className="font-thin">Help Docs</span>
          <span className="font-thin">Особистий кабінет</span>
          <span className="font-thin">Оновлення</span>
          <span className="font-thin">Контакти</span>
        </div>
        <div className="flex flex-col gap-2 md:gap-4 items-center md:items-start w-full md:w-auto">
          <b>Зворотній зв'язок</b>
          <span className="font-thin text-center md:text-left">
            Маєш пропозиції щодо покращення
            <br /> сервісу - пиши нам!
          </span>
          <div className="flex flex-col sm:flex-row gap-2">
            <input type="text" className="w-full sm:w-[220px] bg-white px-3 text-black" placeholder="Email Address" />
            <button className="primary-div-color h-[50px] w-full sm:w-[133px]">
              <b>Надіслати</b>
            </button>
          </div>
          <div className="flex flex-row gap-2 justify-center md:justify-start">
            <img src={Phone} alt="Phone icon" className="w-[24px]" />
            <span className="gray-text">+38 (073) 555 55 55</span>
          </div>
          <div className="flex flex-row gap-2 justify-center md:justify-start">
            <img src={Sms} alt="sms icon" className="w-[24px]" />
            <span className="gray-text">gmail@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 pt-5 text-center md:text-left">
        <b className="text-[#8e8e8e] text-sm md:text-base">2024 @ Sprinters. All rights reserved.</b>
        <div className="flex flex-row gap-5 justify-center md:justify-start">
          <img src={Facebook} alt="Facebook icon" />
          <img src={Instagram} alt="Instagram icon" />
          <img src={Dribbble} alt="Dribbble icon" />
          <img src={LinkedIn} alt="LinkedIn icon" />
          <img src={Twitter} alt="Twitter icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
