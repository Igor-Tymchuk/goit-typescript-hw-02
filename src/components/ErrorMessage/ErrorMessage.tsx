import s from "./ErrorMessage.module.css";
import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ code, message }) => {
  return (
    <div className={s.error}>
      <h2>{code}</h2>
      <p>{message}</p>
    </div>
  );
};
export default ErrorMessage;
