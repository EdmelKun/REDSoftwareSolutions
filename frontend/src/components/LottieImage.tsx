import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import CEO from "../assets/animations/CEO.json";
import CTO from "../assets/animations/CTO.json";
import COO from "../assets/animations/COO.json";

interface LottieImagesProps {
  startIndex?: number;
  duration?: number;
  founderImage: string;
}

const LottieImages = ({
  startIndex = 0,
  duration,
  founderImage,
}: LottieImagesProps) => {
  const lottieFiles = [CEO, CTO, COO];
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {}, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block"
    >
      <Lottie
        animationData={lottieFiles[startIndex]}
        loop={!isHovered}
        autoplay={true}
        className="w-64 h-64"
      />
      {isHovered && (
        <img
          src={founderImage}
          alt="Founder"
          className="rounded-xl absolute top-0 left-0 w-full h-full z-0 object-cover object-top border-2 border-gray-200 shadow-lg"
        />
      )}
    </div>
  );
};

export default LottieImages;
