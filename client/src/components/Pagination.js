import React from "react";
import { PaginationContainer, PaginationButton } from "./PaginationElements";

const Pagination = ({ current, setPage, max }) => {
  const switchPrev = () => {
    if (current > 0) {
      setPage(current - 1);
    }
  };

  const switchNext = () => {
    if (current + 1 < max) {
      setPage(current + 1);
    }
  };

  return (
    <PaginationContainer>
      <PaginationButton onClick={() => switchPrev()}>{"<"}</PaginationButton>
      <PaginationButton selected>{current + 1}</PaginationButton>
      <PaginationButton onClick={() => switchNext()}>{">"}</PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
