import React, { useState, useEffect } from "react";
import {
  PagDividerContainer,
  PagDivLabel,
  PagDivSelect,
} from "./PagDividerElements";

const PagDivider = ({ setDivider, total, pagNum, pagDiv }) => {
  const [range, setRange] = useState(pagNum * pagDiv);
  const [maxRange, setMaxRange] = useState(
    Number(pagDiv) + Number(pagNum) * Number(pagDiv)
  );

  useEffect(() => {
    setRange(pagNum * pagDiv);
    setMaxRange(Number(pagDiv) + Number(pagNum) * Number(pagDiv));
  }, [pagNum, pagDiv]);

  return (
    <PagDividerContainer>
      <PagDivSelect
        name="divider"
        id="divider"
        onChange={({ target }) => setDivider(target.value)}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </PagDivSelect>
      <PagDivLabel>
        Showing {range}-{maxRange} of {total}
      </PagDivLabel>
    </PagDividerContainer>
  );
};

export default PagDivider;
