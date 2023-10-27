import { useState } from "react";
import Pagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalCount={70}
        perPage={10}
        limit={3}
      />
    </>
  );
}

export default App;
