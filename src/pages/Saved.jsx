import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsCard from "../components/NewsCard";
import { removeArticle } from "../redux/newsSlice";
import { Typography } from "@mui/material";

function Saved() {
  const savedArticles = useSelector((state) => state.news.savedArticles);
  const dispatch = useDispatch();

  const handleRemove = (articleId) => {
    dispatch(removeArticle(articleId));
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "50px" }}>
      {savedArticles.length > 0 ? (
        savedArticles.map((article, index) => <NewsCard key={index} article={article} onRemove={() => handleRemove(article._id)} />)
      ) : (
        <Typography variant="h6" align="center">
          No saved articles
        </Typography>
      )}
    </div>
  );
}

export default Saved;
