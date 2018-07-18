import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movies';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends PureComponent {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=1845b49f35d902797a73fa469b2a073c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;

    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            {movie.title ? (
              <h1>
              YOOOO!
              </h1>
            ) : (
              <h1>
              HIIII!
              </h1>
            )}
            <h1>
              {movie.title}
            </h1>
            <h3>
              {movie.release_date}
            </h3>
            <p>
              {movie.overview}
            </p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}


export default MovieDetail;

const MovieWrapper = styled.div`
    position: relative;
    padding-top: 50vh;
    background: url(${props => props.backdrop}) no-repeat;
    background-size: cover;
`;

const MovieInfo = styled.div`
    background: white;
    text-align: left;
    padding: 2rem 10%;
    display: flex;
    > div{
        margin-left: 20px;
    }
    img{
        position: relative;
        top: -5rem;
    }
`;