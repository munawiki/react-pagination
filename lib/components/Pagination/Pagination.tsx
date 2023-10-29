import { useMemo } from "react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  perPage?: number;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  customStyles?: {
    pagination?: string;
    pagination__list?: string;
    pagination__item?: string;
    pagination__button?: string;
  };
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalCount,
  perPage = 10,
  prevIcon = "<",
  nextIcon = ">",
  customStyles,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalCount / perPage);

  const pages = useMemo(() => {
    const pagesArray = [];
    if (totalPages <= 5 || currentPage <= 4) {
      for (let i = 1; i <= Math.min(5, totalPages); i++) {
        pagesArray.push(i);
      }
      if (totalPages > 5) pagesArray.push("...", totalPages);
    } else if (currentPage >= totalPages - 3) {
      pagesArray.push(1, "...");
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pagesArray.push(i);
      }
    } else {
      pagesArray.push(1, "...");
      pagesArray.push(currentPage - 1, currentPage, currentPage + 1);
      pagesArray.push("...", totalPages);
    }
    return pagesArray;
  }, [currentPage, totalPages]);

  const goToPage = (page: number) => onPageChange(page);
  const goToPreviousPage = () => goToPage(currentPage - 1);
  const goToNextPage = () => goToPage(currentPage + 1);

  const handleClickPrevious = () => goToPreviousPage();
  const handleClickNext = () => goToNextPage();
  const handleClickPaginationList = (
    event: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    const target = event.target as HTMLElement;
    const page = target.closest("li");
    const index = page?.dataset.index;

    if (index !== undefined) goToPage(Number(index));
  };

  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <div className={`${styles["pagination"]} ${customStyles?.pagination}`}>
      <ul
        className={`${styles["pagination__list"]} ${customStyles?.pagination__list}`}
        onClick={handleClickPaginationList}
      >
        <li
          className={`${styles["pagination__item"]} ${customStyles?.pagination__item}`}
        >
          <button
            className={`${styles["pagination__button"]} ${customStyles?.pagination__button}`}
            onClick={handleClickPrevious}
            disabled={isPreviousDisabled}
          >
            {prevIcon}
          </button>
        </li>

        {pages.map((page, index) => (
          <li
            key={index}
            className={`${styles["pagination__item"]} ${
              customStyles?.pagination__item
            } ${
              page === currentPage
                ? `${styles["pagination__item--active"]} ${
                    customStyles?.pagination__item + "--active"
                  }`
                : ""
            }`}
            data-index={page !== "..." ? page : undefined}
          >
            <button
              className={`${styles["pagination__button"]} ${customStyles?.pagination__button}`}
            >
              {page}
            </button>
          </li>
        ))}

        <li
          className={`${styles["pagination__item"]} ${customStyles?.pagination__item}`}
        >
          <button
            className={`${styles["pagination__button"]} ${customStyles?.pagination__button}`}
            onClick={handleClickNext}
            disabled={isNextDisabled}
          >
            {nextIcon}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
