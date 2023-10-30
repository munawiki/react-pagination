import React from "react";
import { Pagination } from "../lib/main";

const App = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={100}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default App;
