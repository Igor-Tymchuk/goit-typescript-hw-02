import s from "./ImageModal.module.css";
import Modal from "react-modal";
import { FaRegHeart, FaWindowClose } from "react-icons/fa";
import { Image } from "../../App.types";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedImage: Image | null;
}

const ImageModal = ({ isOpen, onClose, selectedImage }: ImageModalProps) => {
  if (!selectedImage) {
    return null;
  }
  const { urls, alt_description, description, likes } = selectedImage;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={s.overlay}
      className={s.content}
      ariaHideApp={false}
      closeTimeoutMS={200}
      contentLabel={description}
      bodyOpenClassName={s.reactModal}
    >
      <button onClick={onClose} className={s.btn}>
        <FaWindowClose className={s.icon} />
      </button>
      {likes && (
        <p className={s.likes}>
          <FaRegHeart className={s.iconLikes} />
          {likes}
        </p>
      )}
      <img src={urls?.regular} alt={alt_description} className={s.img} />
      {description && <p className={s.description}>{description}</p>}
    </Modal>
  );
};

export default ImageModal;
