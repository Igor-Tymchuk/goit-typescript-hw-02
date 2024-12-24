import fetchImg from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import { Image, Error, Data } from "./App.types";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [perPage, setPerPage] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [totalPage, setTotalPages] = useState<number>(0);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [results, setResults] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleQuery = (query: string, perPage: number | null): void => {
    if (!perPage) setPerPage(10);
    else setPerPage(perPage);
    setQuery(query);
    setPage(1);
    setResults([]);
    return;
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
    return;
  };

  const handleModal = (imageData: Image): void => {
    if (!isModalOpen) {
      setSelectedImage(imageData);
      setIsModalOpen(true);
    }
  };

  const onClose = (): void => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!query) return;
    (async () => {
      try {
        setLoader(true);
        setError(null);
        const data: Data = await fetchImg(query, perPage, page);
        setResults((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (err: unknown) {
        if (axios.isAxiosError(err))
          setError({
            errCode: err.status?.toString() || "Unknown",
            errMsg: err?.response?.data?.errors?.join(", ") || "Unknown error",
          });
        else
          setError({
            errCode: "Unknown",
            errMsg: "Unknown error",
          });
      } finally {
        setLoader(false);
      }
    })();
  }, [query, page, perPage]);

  return (
    <>
      <SearchBar handleQuery={handleQuery} />
      {query && results.length > 0 && (
        <ImageGallery data={results} handleModal={handleModal} />
      )}
      {query && !results.length && !loader && <h2>Images not found...</h2>}
      {error && <ErrorMessage code={error.errCode} message={error.errMsg} />}
      {loader && <Loader />}
      {page < totalPage && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      <ImageModal
        isOpen={isModalOpen}
        onClose={onClose}
        selectedImage={selectedImage}
      />
    </>
  );
};

export default App;
