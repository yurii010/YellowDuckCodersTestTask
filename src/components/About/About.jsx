import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const About = () => {
  return (
    <div className="px-2 md:px-12 flex flex-col md:flex-row justify-between gap-10 pt-0 md:py-10">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default About;
