import * as API from 'services/apiService';

import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import { Container, Title } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await API.getTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      <MovieList movies={trendingMovies} />
    </Container>
  );
};

export default Home;
