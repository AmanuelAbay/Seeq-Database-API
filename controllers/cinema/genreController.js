const axios = require("axios");
exports.getGenres = async(req, res) => {
    try {
        // TODO: it wll return a list of movies which is availabe in external API
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOVIE_API_KEY}&language=en-US`
          );
        res.status(200).json({
            status: "success",
            data: data,
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};