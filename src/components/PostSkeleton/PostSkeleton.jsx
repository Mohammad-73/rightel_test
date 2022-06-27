import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function PostSkeleton() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={310} height={118} />
      <Skeleton variant="text" width={200} height={30} />
      <Skeleton variant="text" width={260} height={20} />
      <Skeleton variant="text" width={220} height={20} />
      <Skeleton variant="text" width={40} height={30} />
    </Stack>
  );
}
