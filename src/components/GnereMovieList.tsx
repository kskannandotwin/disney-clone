import GenereList from "../constant/GenresList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <div>
      {GenereList.genere.map(
        (item, index) =>
          index <= 4 && (
            <div key={index} className="p-8 px-6 md:px-16">
              <h2 className="text-[20px] text-white font-bold mb-5">
                {item.name}
              </h2>
              <MovieList genreId={item.id} />
            </div>
          ),
      )}
    </div>
  );
};

export default GenreMovieList;
