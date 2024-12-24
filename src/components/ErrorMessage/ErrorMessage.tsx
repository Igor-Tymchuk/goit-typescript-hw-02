import s from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  code: string | undefined;
  message: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ code, message }) => {
  return (
    <div className={s.error}>
      <h2>{code}</h2>
      <p>{message}</p>
    </div>
  );
};
export default ErrorMessage;
