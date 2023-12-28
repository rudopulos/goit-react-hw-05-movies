import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from 'services/apiService';
import { Container, SearchBtn, SearchForm, SearchInput } from './Movies.styled';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }

    const fetchSearchMovies = async searchQuery => {
      try {
        const { results } = await API.searchMovies(searchQuery);
        setSearchMovies(results);
        if (results.length === 0) {
          alert(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchSearchMovies(query);
  }, [searchParams]);

  const handleSubmit = event => {
    event.preventDefault();
    if (searchValue.trim() === '') {
      return;
    }
    setSearchParams({ query: searchValue });
    setSearchValue('');
  };

  const handleChangeInput = event => {
    setSearchValue(event.target.value);
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={searchValue}
          onInput={handleChangeInput}
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </SearchForm>
      <MovieList movies={searchMovies} />
    </Container>
  );
};

export default Movies;
