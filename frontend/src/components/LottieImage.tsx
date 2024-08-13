import { useState } from "react";
import Lottie from "lottie-react";

interface LottieImagesProps {
  founderImage: string;
  lottieAnimation: object;
}

const LottieImages = ({ founderImage, lottieAnimation }: LottieImagesProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block"
    >
      <Lottie
        animationData={lottieAnimation}
        loop={true}
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
