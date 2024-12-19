import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import { CircularProgress, Typography, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { saveArticle } from "../redux/newsSlice";

function Search() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm) {
      setIsLoading(true);
      const API_KEY = "AYPHyCAe5dr1dVbTmqLjzQV1w6uqAAIC";
      const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${API_KEY}`;

      axios
        .get(URL)
        .then((response) => {
          setNews(response.data.response.docs);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching NYT API:", error);
          setIsLoading(false);
        });
    }
  }, [searchTerm]);

  const handleSearchClick = () => {
    setSearchTerm(query);
  };

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchTerm(query);
    }
  };

  const handleSave = (article) => {
    dispatch(saveArticle(article));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {/* Input Search */}
        <TextField type="text" placeholder="Search news..." value={query} onChange={handleSearchChange} onKeyPress={handleKeyPress} variant="outlined" size="small" style={{ width: "300px" }} />
        {/* Button Search */}
        <Button variant="contained" color="primary" onClick={handleSearchClick} style={{ padding: "7px 15px" }}>
          Search
        </Button>
      </div>

      {/* News Display */}
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <CircularProgress />
        </div>
      ) : news && news.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {news.map((article, index) => (
            <NewsCard key={index} article={article} onSave={() => handleSave(article)} />
          ))}
        </div>
      ) : (
        searchTerm && (
          <Typography variant="h6" style={{ marginTop: "20px" }}>
            No articles found for your search.
          </Typography>
        )
      )}
    </div>
  );
}

export default Search;
