import React, { useState } from "react";
import "./Home.scss";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { BsCollectionPlayFill } from "react-icons/bs";

const apiKey = "f005df7dcaebd74ee21d85d020a9fd4c";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>

    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [tv, setTv] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f005df7dcaebd74ee21d85d020a9fd4c`
      );
      setPopularMovies(results);
    };
    const fetchTrending = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=f005df7dcaebd74ee21d85d020a9fd4c`
      );
      setTrending(results);
    };
    const fetchTvShows = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=f005df7dcaebd74ee21d85d020a9fd4c&language=en-US&page=1`
      );
      setTv(results);
    };
    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=f005df7dcaebd74ee21d85d020a9fd4c&language=en-US&page=1`
      );
      setTopRated(results);
    };

    const getGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=f005df7dcaebd74ee21d85d020a9fd4c&language=en-US`
      );
      setGenre(genres);
    };

    fetchPopular();
    fetchTrending();
    fetchTvShows();
    fetchTopRated();
    getGenre();
  }, []);

  return (
    <section className="name">
      <div
        className="banner"
        style={{
          backgroundImage: `url(https://bingeddata.s3.amazonaws.com/uploads/2022/08/Delhi-Crime-Season-2-Review-Intriguing-Police-Investigation-Drama.jpg)`,
        }}
      >
        <h1>Delhi Crime</h1>
        <h3>2019 | Maturity Rating:A | 2 Seasons | Hindi-Language TV Shows</h3>

        <p>
          Following the police force as they investigate high-profile crimes in
          Delhi, this series has seasons inspired by both real and fictional
          events.
        </p>
        <p>
        Starring: Shefali Shah, Rajesh Tailang, Rasika Dugal
        </p>
        <p>
        Creators: Richie Mehta
        </p>
        

       <div>
       <button>
          Play <FaPlay />
        </button>
        <button>
          Watchlist <BsCollectionPlayFill />
        </button>
       </div>
      </div>

      <Row title={"Popular On Netflix"} arr={popularMovies} />
      <Row title={"Weekly Trending"} arr={trending} />
      <Row title={"TV Shows"} arr={tv} />
      <Row title={"Top Rated"} arr={topRated} />

      <div className="genreBox">
        {genre.map((item) => (
          <Link key={item.id} to="/">
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
