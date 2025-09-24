import MovieHeader from './MovieHeader';
import MovieList from './MovieList';
import MovieMain from './MovieMain';

export default function Movie() {
  return (
    <>
      <MovieHeader />
      <MovieMain />
      <MovieList title='Popular' url='/popular' />
      <MovieList title='Now_playing' url='/now_playing' />
      <MovieList title='Upcoming' url='/upcoming' />
      {/* <MovieLoader title='Popular' /> */}
    </>
  );
}
