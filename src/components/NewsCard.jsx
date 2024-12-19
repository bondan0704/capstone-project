import React from "react";
import { Card, CardContent, Typography, CardMedia, Button } from "@mui/material";

function NewsCard({ article, onSave, onRemove }) {
  const imageUrl = article.multimedia && article.multimedia.length > 0 ? `https://static01.nyt.com/${article.multimedia[0].url}` : "https://via.placeholder.com/300x200.png?text=No+Image"; // Gambar default jika tidak ada

  const articleUrl = article.web_url || "#";

  return (
    <Card style={{ width: 300, margin: 10 }}>
      <CardMedia component="img" alt="Article Image" height="200" image={imageUrl} title={article.headline ? article.headline.main : "No title"} />
      <CardContent>
        <Typography variant="h6">{article.headline ? article.headline.main : "No title available"}</Typography>
        <Typography variant="body2" color="textSecondary">
          {article.snippet || "No snippet available"}
        </Typography>

        {/* Tombol Save Article */}
        {onSave && (
          <Button
            size="small"
            color="primary"
            onClick={onSave}
            style={{
              marginTop: 10,
              marginRight: 20,
              transition: "background-color 0.3s, transform 0.3s",
            }}
            sx={{
              "&:hover": {
                backgroundColor: "#1976d2",
                transform: "scale(1.05)",
              },
            }}
          >
            Save Article
          </Button>
        )}

        {/* Tombol Remove */}
        {onRemove && (
          <Button
            size="small"
            color="secondary"
            onClick={onRemove}
            style={{
              marginTop: 10,
              transition: "background-color 0.3s, transform 0.3s",
            }}
            sx={{
              "&:hover": {
                backgroundColor: "#d32f2f",
                transform: "scale(1.05)",
              },
            }}
          >
            Remove
          </Button>
        )}

        {/* Tombol Read More */}
        <Button
          size="small"
          color="secondary"
          href={articleUrl}
          target="_blank"
          style={{
            marginTop: 10,
            marginRight: 80,
            transition: "background-color 0.3s, transform 0.3s",
          }}
          sx={{
            "&:hover": {
              backgroundColor: "#0288d1",
              transform: "scale(1.05)",
            },
          }}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
}

export default NewsCard;
