import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { MdSearch } from "react-icons/md";
import { FormEvent } from "react";
import { SearchBarProps } from "./SearchBar.types";

const SearchBar: React.FC<SearchBarProps> = ({ handleQuery }) => {
  const createQuery = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const newQuery: string = (
      form.elements.namedItem("query") as HTMLInputElement
    ).value
      .trim()
      .toLowerCase();
    if (newQuery === "") return toast.error("Search cannot be empty");
    const perPage: number = Number(
      (form.elements.namedItem("per_page") as HTMLInputElement).value
    );
    form.reset();
    return handleQuery(newQuery, perPage);
  };

  return (
    <header className={s.header}>
      <form onSubmit={createQuery} className={s.form}>
        <input
          type="number"
          name="per_page"
          placeholder="PerPage"
          min="1"
          max="30"
          step="1"
          className={s.inputNum}
        />
        <input
          className={s.inputText}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <button type="submit">
          <MdSearch className={s.btn} />
        </button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
};
export default SearchBar;
