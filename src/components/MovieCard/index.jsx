import { MovieCardBg, MovieGenres, MovieImage, MovieName } from "./styledComponents";
import { Link } from "react-router-dom"

const MovieCard = ({ details }) => {
    const { show } = details
    const { image, name, genres, id } = show;
    const medium = (image) ? image.medium : "https://cdn.shopify.com/s/files/1/2122/6609/products/0_8848e0ab-a58f-4c93-b334-56a02cfb1af7_300x300.jpg?v=1675332332";

    console.log(details);
    return (
        <MovieCardBg>
            <Link to={`/movies/${id}`} style={{textDecoration:'none',}}>
                <MovieImage src={medium} alt={name} />
                <div>
                    <MovieName>{name}</MovieName>
                    <MovieGenres>{genres.join(', ')}</MovieGenres>
                </div>
            </Link>
        </MovieCardBg>
    )
}

export default MovieCard