import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  DescMovie,
  DescSubtitle,
  DescText,
  Image,
  Title,
} from './MovieItem.styled';

const MovieItem = ({ movieDetails }) => {
  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  const getGenres = () => {
    return genres?.map(({ name }) => name).join(', ');
  };

  const posterPath =
    poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`;
  return (
    <Container>
      <Image src={posterPath} alt={title} width="200" />
      <DescMovie>
        <Title>{title}</Title>
        <DescText>
          User Score: {Math.round((vote_average * 100) / 10)}%
        </DescText>
        <DescSubtitle>Overview</DescSubtitle>
        <DescText>{overview}</DescText>
        <DescSubtitle>Genres</DescSubtitle>
        <DescText>{getGenres()}</DescText>
      </DescMovie>
    </Container>
  );
};

MovieItem.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};

export default MovieItem;
