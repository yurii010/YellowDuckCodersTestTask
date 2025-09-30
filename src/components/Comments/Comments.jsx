import Avatar1 from "../../assets/avatars/avatar1.png";
import Avatar2 from "../../assets/avatars/avatar2.png";
import star from "../../assets/Vector.png";
import purpleCircle from "../../assets/icons/purpleCircle.png";
import grayCircle from "../../assets/icons/grayCircle.png";
import BG from "../../assets/backgrounds/BG.png";

const Comments = () => {
  return (
    <div
      className="w-full h-full px-2 md:px-12 py-20 flex flex-col md:flex-row items-center md:justify-between gap-10 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${BG})`,
      }}
    >
      <div className="flex flex-col max-w-[450px] items-center md:items-start justify-center text-center md:text-left gap-4">
        <b className="text-[32px] md:text-[48px]">
          Що <span className="text-[#26A4FF]">кажуть люди?</span>
        </b>
        <span className="gray-text text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </span>
        <div className="pt-4 md:pt-8">
          <button className="primary-div-color text-white rounded-md py-2 md:py-3 px-4 md:px-5">
            <b>Залишити відгук</b>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:gap-8 items-center">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
          <div className="max-w-[350px] w-full py-5 px-3 bg-white rounded-md" style={{ boxShadow: "0px 4px 16px 0px #25324B26" }}>
            <div className="flex flex-row gap-4 items-start">
              <img src={Avatar1} alt="avatar" className="w-12 h-12 md:w-auto md:h-auto" />
              <div className="flex flex-col">
                <b className="text-[20px] md:text-[24px]">Ben Yardley</b>
                <span className="text-[12px] md:text-[14px] primary-text-color">Київ - Кишинів</span>
                <span className="text-[12px] md:text-[14px] gray-text">1 May 2023</span>
              </div>
            </div>
            <div className="py-4 min-h-[200px] md:min-h-[250px]">
              <span className="gray-text text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
            <div className="flex flex-row">
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
            </div>
          </div>
          <div className="max-w-[350px] w-full py-5 px-3 bg-white rounded-md" style={{ boxShadow: "0px 4px 16px 0px #25324B26" }}>
            <div className="flex flex-row gap-4 items-start">
              <img src={Avatar2} alt="avatar" className="w-12 h-12 md:w-auto md:h-auto" />
              <div className="flex flex-col">
                <b className="text-[20px] md:text-[24px]">Craig Martin</b>
                <span className="text-[12px] md:text-[14px] primary-text-color">Львів - Париж</span>
                <span className="text-[12px] md:text-[14px] gray-text">1 May 2023</span>
              </div>
            </div>
            <div className="py-4 min-h-[200px] md:min-h-[250px]">
              <span className="gray-text text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor.
              </span>
            </div>
            <div className="flex flex-row">
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-3 mt-6 justify-center">
          <img src={purpleCircle} alt="icon" />
          <img src={grayCircle} alt="icon" />
          <img src={grayCircle} alt="icon" />
          <img src={grayCircle} alt="icon" />
          <img src={grayCircle} alt="icon" />
          <img src={grayCircle} alt="icon" />
          <img src={grayCircle} alt="icon" />
          <img src={grayCircle} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Comments;
