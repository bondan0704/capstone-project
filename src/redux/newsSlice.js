import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    savedArticles: [],
  },
  reducers: {
    saveArticle: (state, action) => {
      const article = action.payload;
      console.log("Saving article:", article);
      const exists = state.savedArticles.find((a) => a._id === article._id);
      if (!exists) {
        state.savedArticles.push(article);
      }
    },
    removeArticle: (state, action) => {
      const articleId = action.payload;
      state.savedArticles = state.savedArticles.filter((article) => article._id !== articleId); // Menghapus artikel berdasarkan _id
    },
  },
});

export const { saveArticle, removeArticle } = newsSlice.actions;
export default newsSlice.reducer;
