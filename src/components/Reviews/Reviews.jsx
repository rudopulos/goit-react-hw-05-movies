import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/apiService';
import {
  Container,
  DescSubtitle,
  DescText,
  List,
  ListItem,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async movieId => {
      try {
        const { results } = await API.getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovieReviews(movieId);
  }, [movieId]);

  return (
    <Container>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <List>
          {reviews.map(({ id, author, content }) => (
            <ListItem key={id}>
              <DescSubtitle>Author: {author}</DescSubtitle>
              <DescText>
                {content ?? "We don't have any reviews for this movie."}
              </DescText>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Reviews;
