import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import { useDispatch } from "react-redux";
import { saveArticle } from "../redux/newsSlice";
import { CircularProgress } from "@mui/material";

function Indonesia() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
    const query = "indonesia";
    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`;

    axios
      .get(URL)
      .then((response) => {
        setNews(response.data.response.docs || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching NYT API:", error);
        setIsLoading(false);
      });
  }, []);

  const handleSave = (article) => {
    dispatch(saveArticle(article));
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <CircularProgress />
        </div>
      ) : (
        news.map((article, index) => <NewsCard key={index} article={article} onSave={() => handleSave(article)} />)
      )}
    </div>
  );
}

export default Indonesia;
