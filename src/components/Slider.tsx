import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const screenWidth = window.innerWidth;

type Movie = {
  id: number;
  backdrop_path: string | null;
};

const Slider = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const response = await GlobalApi.getTrendingVideos();
        setMovieList(response?.results || []);
        console.log(response?.results);
      } catch (error) {
        console.error("Failed to fetch trending movies:", error);
      }
    };

    getTrendingMovies();
  }, []);

  const sliderRight = () => {
    if (elementRef) {
      elementRef.current?.scrollBy({
        left: screenWidth - 110,
        behavior: "auto",
      });
    }
  };

  const sliderLeft = () => {
    if (elementRef) {
      elementRef.current?.scrollBy({
        left: -screenWidth + 110,
        behavior: "auto",
      });
    }
  };

  return (
    <div>
      <BiChevronLeft
        className="hidden md:block text-white absolute text-[30px] mx-8 mt-37.5 cursor-pointer"
        onClick={() => sliderLeft()}
      />
      <BiChevronRight
        className="hidden md:block text-white absolute text-[30px] mx-8 mt-37.5 cursor-pointer right-0"
        onClick={() => sliderRight()}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            key={item.id}
            src={`${IMAGE_BASE_URL}${item.backdrop_path}`}
            alt="movie backdrop"
            className="min-w-full md:h-77.5 object-cover object-top-left mr-5 rounded-md hover:border border-gray-300 cursor-pointer transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
