import { useState } from "react";
import Pagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalCount={80}
        perPage={10}
        limit={5}
      />
    </>
  );
}

export default App;
