import React from "react";
import ReactDOM from "react-dom/client";
import { Pagination } from "../lib/main";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Pagination currentPage={1} totalCount={100} onPageChange={() => {}} />
  </React.StrictMode>
);
