import { Image } from "../../App.types";
import s from "./ImageCard.module.css";

interface ImageCardProps {
  image: Image;
  handleModal: (ImageData: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, handleModal }) => {
  return (
    <div>
      <img
        className={s.img}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => handleModal(image)}
      />
    </div>
  );
};
export default ImageCard;
