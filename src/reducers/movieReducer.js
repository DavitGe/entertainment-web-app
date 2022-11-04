import initialState from "../data.json";

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_BOOKMARK":
      const title = action.data.title;
      const movieToChange = state.find((n) => n.title === title);
      const changedMovie = {
        ...movieToChange,
        isBookmarked: !movieToChange.isBookmarked,
      };
      return state.map((movie) =>
        movie.title !== title ? movie : changedMovie
      );
    default:
      return state;
  }
};

export const toggleBookmark = (title) => {
  return {
    type: "TOGGLE_BOOKMARK",
    data: { title },
  };
};
export default movieReducer;
