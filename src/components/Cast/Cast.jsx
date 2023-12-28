import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/apiService';
import { DescText, Image, List, ListItem } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async movieId => {
      try {
        const { cast } = await API.getMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieCredits(movieId);
  }, [movieId]);

  return (
    <>
      <List>
        {cast.map(({ id, profile_path, name, character }) => {
          const porofilePath =
            profile_path && `https://image.tmdb.org/t/p/w200${profile_path}`;
          return (
            <ListItem key={id}>
              <Image src={porofilePath} alt={name} width="80" />
              <DescText>{name}</DescText>
              <DescText>Character: {character}</DescText>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default Cast;
