const axios = require("axios");
exports.getAllMovies = async (req, res) => {
    const page = req.query.page;
  try {
    // TODO: it wll return a list of movies which is availabe in external API
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
    );
    res.status(200).json({
      status: "success",
      data: data
    });
  } catch (err) {
   console.log(err);
  }
};
