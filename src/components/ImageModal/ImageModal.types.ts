import { Image } from "../../App.types";

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedImage: Image | null;
}
