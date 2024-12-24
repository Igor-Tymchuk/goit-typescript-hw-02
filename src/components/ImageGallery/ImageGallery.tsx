import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../../App.types";

interface ImageGalleryProps {
  data: Image[];
  handleModal: (ImageData: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ data, handleModal }) => {
  return (
    <ul className={s.gallery}>
      {data.map((image) => (
        <li className={s.card} key={image.id}>
          <ImageCard image={image} handleModal={handleModal} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
