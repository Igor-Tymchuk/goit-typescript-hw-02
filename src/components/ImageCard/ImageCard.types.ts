import { Image } from "../../App.types";

export interface ImageCardProps {
  image: Image;
  handleModal: (ImageData: Image) => void;
}
