import Movie from '../components/Movie.vue'
import movies from '../store/movies';

export default {
    component: Movie,
    title: 'Movie'
}

export const withJSX = () => ({
    render() {
        return (
            <div style="background-color: #232323">
                <Movie
                    name={movies[0].name}
                    genre={movies[0].genre}
                    year={movies[0].year}
                    duration={movies[0].duration}
                    rating={movies[0].rating}
                    image={movies[0].image}
                    description={movies[0].description}
                />
            </div>
        );
  }
});
