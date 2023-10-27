import { useMemo } from "react";
import "./index.css";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  perPage?: number;
  limit?: number;
  className?: string;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalCount,
  perPage = 10,
  limit = 5,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalCount / perPage);
  // currentPage=1, limit=3, totalpages=6    // [1,2,3,...,6]
  // currentPage=4, limit=3, totalpages=6    // [1,...,4,5,6]
  // currentPage=1, limit=3, totalpages=7    // [1,2,3,...,7]
  // currentPage=4, limit=3, totalpages=7    // [1,...,4,5,6,...,7]
  // currentPage=7, limit=3, totalpages=99    // [1,...,4,5,6,...,99]

  const pages = useMemo(() => {
    let startPage: number;
    let endPage: number;

    if (totalPages <= limit + 1) {
      startPage = 1;
      endPage = Math.min(limit, totalPages);
    } else {
      if (currentPage <= Math.floor(limit / 2) + 1) {
        startPage = 1;
        endPage = limit;
      } else if (currentPage >= totalPages - Math.floor(limit / 2)) {
        startPage = totalPages - limit + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(limit / 2);
        endPage = currentPage + Math.floor(limit / 2);
      }
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (startPage > 2) pages.unshift(1, "...");
    else if (startPage === 2) pages.unshift(1);

    if (endPage < totalPages - 1) pages.push("...", totalPages);
    else if (endPage === totalPages - 1) pages.push(totalPages);

    return pages;
  }, [currentPage, limit, totalPages]);

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
    <div className="pagination">
      <ul className="pagination__list" onClick={handleClickPaginationList}>
        <li className="pagination__item">
          <button
            className="pagination__button"
            onClick={handleClickPrevious}
            disabled={isPreviousDisabled}
          >
            {/* <i className="fas fa-chevron-left" /> */}
            {"<"}
          </button>
        </li>

        {pages.map((page, index) => (
          <li
            key={index}
            className={`pagination__item ${
              page === currentPage ? "pagination__item--active" : ""
            }`}
            data-index={page !== "..." ? page : undefined}
          >
            <button className="pagination__button">{page}</button>
          </li>
        ))}

        <li className="pagination__item">
          <button
            className="pagination__button"
            onClick={handleClickNext}
            disabled={isNextDisabled}
          >
            {/* <i className="fas fa-chevron-right" /> */}
            {">"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
