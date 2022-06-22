const axios = require("axios");
exports.searchMovies = async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        process.env.MOVIE_API_KEY
      }&language=en-US&query=${req.query.key_word.replace(
        " ",
        "%20"
      )}&page=${req.query.page}&include_adult=false`
    );
    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
