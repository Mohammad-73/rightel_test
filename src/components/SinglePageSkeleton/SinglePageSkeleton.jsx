import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import classes from "./SinglePageSkeleton.module.scss";

export default function SinglePageSkeleton() {
  return (
    <Stack className={classes.root} spacing={2}>
      <Skeleton variant="text" width={1300} height={30} />
      <Skeleton variant="text" width={800} height={30} />
      <div className={classes.container}>
        <div className={classes.item}>
          <Skeleton variant="rectangular" width={800} height={400} />
        </div>
        <div className={classes.item}>
          <Skeleton variant="text" width={400} height={30} />
          <Skeleton variant="text" width={460} height={20} />
          <Skeleton variant="text" width={420} height={20} />
          <Skeleton variant="text" width={460} height={20} />
          <Skeleton variant="text" width={420} height={20} />
          <Skeleton variant="text" width={400} height={30} />
          <Skeleton variant="text" width={460} height={20} />
          <Skeleton variant="text" width={420} height={20} />
          <Skeleton variant="text" width={460} height={20} />
          <Skeleton variant="text" width={420} height={20} />
          <Skeleton variant="text" width={460} height={20} />
          <Skeleton variant="text" width={420} height={20} />
          <Skeleton variant="text" width={420} height={20} />
          <Skeleton variant="text" width={460} height={20} />
          <Skeleton variant="text" width={420} height={20} />
          <Skeleton variant="text" width={460} height={20} />
          <Skeleton variant="text" width={420} height={20} />
          <Skeleton variant="text" width={80} height={30} />
        </div>
      </div>
    </Stack>
  );
}
