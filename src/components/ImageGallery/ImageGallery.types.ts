import { Image } from "../../App.types";

export interface ImageGalleryProps {
  data: Image[];
  handleModal: (ImageData: Image) => void;
}
