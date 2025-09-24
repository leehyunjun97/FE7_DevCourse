import useAxios from '../hooks/useAxios';
import MovieLoaderCard from './MovieCardLoader';
import MovieListItem from './MovieListItem';

export default function MovieList({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  const { data: movies, isLoading, error } = useAxios<TMDBDataType>(url);

  if (error) return <h1>{error}</h1>;
  return (
    <>
      <article className='bg-black px-4 pt-4 xs:px-0'>
        <section className='container mx-auto py-8 text-white'>
          <span className='text-yellow-600'>ONLINE STREAMING</span>
          <h2 className='text-[36px] font-bold mb-8'>{title}</h2>
          <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0'>
            {isLoading
              ? Array.from({ length: 10 }).map((_, i) => (
                  <MovieLoaderCard key={i} />
                ))
              : movies?.results.map((movie) => (
                  <MovieListItem key={movie.id} movie={movie} />
                ))}
          </div>
        </section>
      </article>
    </>
  );
}
