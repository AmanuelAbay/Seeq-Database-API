const MovieTicket = require("../../models/movieTicketModel");
const axios = require("axios");

exports.getAllMovies = async (req, res) => {
  try {
    // TODO: it wll return a list of movies which is availabe in external API
    const { movies } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    );
    res.status(200).json({
      status: "success",
      data: movies,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getMovieTicket = async (req, res) => {
  // console.log(req.params);
  // const id = req.params.id * 1;
  try {
    const movieTicket = await MovieTicket.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        movieTicket,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
  // const tour = tours.find(el => el.id === id);
};

exports.createMovieTicket = async (req, res) => {
  try {
    // TODO: the name will be changed from movieTicket to DisplayedMovie
    // TODO: it will check if the movie is already exist or not
    // TODO: if the Seeq DB contain the movie id, the cinema id will be the part of existed array list else the new array list will be created to collect all cinema ids
    const movieTicket = await MovieTicket.find({ _id: req.body.movie_id });
    if ( movieTicket.length != 0 ) {
      if (
        movieTicket[0].available.some(
          (available) => available.date == req.body.date_and_time.split("T")[0]
        )
      ) {
        try {
          await MovieTicket.findOneAndUpdate(
            {
              _id: req.body.movie_id,
              available: {
                $elemMatch: { date: req.body.date_and_time.split("T")[0] },
              },
            },
            {
              $push: {
                [`available.$[inner].cinemas`]: {
                  _id: req.body.id,
                  room: req.body.room,
                  time: req.body.date_and_time.split("T")[1],
                  token_seat: req.body.token_seat,
                  status:"active"
                },
              },
            },
            {
              arrayFilters: [
                { "inner.date": req.body.date_and_time.split("T")[0] },
              ],
            },
            function (err, result) {
              if (err) {
                res.send(err);
              } else {
                res.send(result);
              }
            }
          );
        } catch (err) {
          res.status(404).json({
            status: "fail",
            message: err,
          });
        }
      } else {
        try {
          await MovieTicket.findOneAndUpdate(
            {
              _id: req.body.movie_id,
            },
            {
              $push: {
                available: [
                  {
                    date: req.body.date_and_time.split("T")[0],
                    cinemas: [
                      {
                        _id: req.body.id,
                        room: req.body.room,
                        time: req.body.date_and_time.split("T")[1],
                        token_seat: req.body.token_seat,
                        status:"active"
                      },
                    ],
                  },
                ],
              },
            },
            {
              arrayFilters: [
                { "inner.date": req.body.date_and_time.split("T")[0] },
              ],
            },
            function (err, result) {
              if (err) {
                res.send(err);
              } else {
                res.send(result);
              }
            }
          );
        } catch (err) {
          res.status(404).json({
            status: "fail",
            message: err,
          });
        }
      }
    } else {
      console.log("this is done");
      const Ticket = {
        _id: req.body.movie_id,
        title: req.body.title,
        movie_poster: req.body.movie_poster,
        rate: req.body.rate,
        available: [
          {
            date: req.body.date_and_time.split("T")[0],
            cinemas: [
              {
                _id: req.body.id,
                room: req.body.room,
                time: req.body.date_and_time.split("T")[1],
                token_seat: req.body.token_seat,
                status:"active"
              },
            ],
          },
        ],
      };
      const TicketInfo = await MovieTicket.create(Ticket);
      res.status(200).json({
        status: "success",
        new_movie_id: TicketInfo._id,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};

exports.updateMovieTicket = async (req, res) => {
  try {
    const movieTicket = await MovieTicket.findByIdAndUpdate(
      req.params.id,
      req.body,
      {}
    );
    res.status(200).json({
      status: "success",
      data: {
        movieTicket,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.deleteMovieTicket = async (req, res) => {
  try {
    await MovieTicket.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      movieTicket_id: req.params.id,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.activeMovie = async (req, res) => {
  try {
    await MovieTicket.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      movieTicket_id: req.params.id,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
