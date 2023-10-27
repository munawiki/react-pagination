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

  // currentPage=1, limit=5, totalPages=10 [1,2,3,4,5,...,10]
  // currentPage=2, limit=5, totalPages=10 [1,2,3,4,5,...,10]
  // currentPage=3, limit=5, totalPages=10 [1,2,3,4,5,...,10]
  // currentPage=4, limit=5, totalPages=10 [1,2,3,4,5,...,10]
  // currentPage=5, limit=5, totalPages=10 [1,...,4,5,6,...,10]
  // currentPage=6, limit=5, totalPages=10 [1,...,5,6,7,...,10]
  // currentPage=7, limit=5, totalPages=10 [1,...,6,7,8,9,10]
  // currentPage=8, limit=5, totalPages=10 [1,...,6,7,8,9,10]
  // currentPage=9, limit=5, totalPages=10 [1,...,6,7,8,9,10]
  // currentPage=10, limit=5, totalPages=10 [1,...,6,7,8,9,10]
  // currentPage=1, limit=5, totalPages=8 [1,2,3,4,5,...,8]
  // currentPage=2, limit=5, totalPages=8 [1,2,3,4,5,...,8]
  // currentPage=3, limit=5, totalPages=8 [1,2,3,4,5,...,8]
  // currentPage=4, limit=5, totalPages=8 [1,2,3,4,5,...,8]
  // currentPage=5, limit=5, totalPages=8 [1,...,4,5,6,7,8]
  // currentPage=6, limit=5, totalPages=8 [1,...,4,5,6,7,8]
  // currentPage=7, limit=5, totalPages=8 [1,...,4,5,6,7,8]
  // currentPage=8, limit=5, totalPages=8 [1,...,4,5,6,7,8]

  const pages = useMemo(() => {}, [currentPage, limit, totalPages]);

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
