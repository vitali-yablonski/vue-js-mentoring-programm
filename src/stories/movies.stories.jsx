import Movies from '../components/Movies.vue'
import movies from '../store/movies';

export default {
    component: Movies,
    title: 'Movies'
}

export const withJSX = () => ({
    render() {
        return (
            <div style="background-color: #232323;">
                <Movies movies={movies} />
            </div>
        );
  }
});
