import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import classes from "./Pagination.module.scss";

export default function PaginationRounded({
  perPage,
  count = [],
  page,
  handlePageChange,
  variant,
  shape,
}) {
  const countNum = Math.ceil(count?.length / perPage);
  return (
    <Stack className={classes.root} spacing={2}>
      <Pagination
        count={countNum}
        variant={variant}
        shape={shape}
        page={page}
        onChange={handlePageChange}
      />
    </Stack>
  );
}
