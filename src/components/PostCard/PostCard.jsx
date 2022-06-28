import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  startLoadingSinglePost,
  selectOnePost,
} from "../../store/singlePageNews/singlePageNews.actions";

export default function PostCard({ item }) {
  const {
    author,
    content,
    description,
    publishedAt,
    source,
    title,
    url,
    urlToImage,
  } = item;
  const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={urlToImage}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Link to="/single-post">
        <CardActions>
          <Button
            onClick={() => {
              dispatch(startLoadingSinglePost());
              dispatch(selectOnePost(item));
            }}
            size="small"
            color="primary"
          >
            Read more
          </Button>
        </CardActions>
      </Link>
    </Card>
  );
}
