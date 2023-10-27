import "./index.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  perPage?: number;
  limit?: number;
  className?: string;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  className,
  onPageChange,
}: PaginationProps) => {
  const goToPage = (page: number) => {};

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <button className="pagination__button">
            <i className="fas fa-chevron-left" />
          </button>
        </li>

        <li className="pagination__item">
          <button className="pagination__button">
            <i className="fas fa-chevron-right" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
