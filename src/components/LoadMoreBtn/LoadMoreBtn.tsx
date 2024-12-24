import s from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  return (
    <button className={s.btn} onClick={handleLoadMore}>
      Load more...
    </button>
  );
};
export default LoadMoreBtn;
