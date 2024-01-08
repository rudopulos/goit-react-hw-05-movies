import MovieItem from 'components/MovieItem/MovieItem';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import * as API from 'services/apiService';
import {
  AddInfo,
  Container,
  StyledLinkBtn,
  Title,
} from './MovieDetails.styled';
import {
  List,
  ListItem,
  StyledLink,
} from 'components/MovieList/MovieList.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async movieId => {
      try {
        const movieDetails = await API.getMovieDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <Container>
      <StyledLinkBtn to={backLinkLocationRef.current}>
        &larr; Go back
      </StyledLinkBtn>
      <MovieItem movieDetails={movieDetails} />
      <AddInfo>
        <Title>Additional information</Title>
        <List>
          <ListItem>
            <StyledLink to="cast" state={backLinkLocationRef.current}>
              Cast
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="reviews">Reviews</StyledLink>
          </ListItem>
        </List>
      </AddInfo>
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
