import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const MovieList = ({ genreId }: { genreId: number }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, [genreId]);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((response) => {
      setMovieList(response.results);
    });
  };

  const slideLeft = (element: any) => {
    element.scrollLeft -= 500;
  };

  const slideRight = (element: any) => {
    element.scrollLeft += 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className="text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute mt-[150px]"
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-hide pt-5 px-3 pb-5 scroll-smooth"
      >
        {movieList.map((item, index) => (
          <MovieCard key={index} movie={item} />
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className="text-[50px] text-white p-2 z-10 top-0 cursor-pointer hidden md:block absolute right-0 mt-[150px]"
      />
    </div>
  );
};

export default MovieList;
