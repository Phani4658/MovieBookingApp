import {AiOutlineStar} from 'react-icons/ai'
import { GenreCard, GenreContainer, ImageCard, ImageCardText, MovieDetailsBg, MovieDetailsContainer, MovieImageBg, MovieName, GenreText, Description, BookTicketsBtn } from "./styledcomponents";

const MovieDetails = () => {
    const movieDetails = JSON.parse(localStorage.getItem("movieDetails"));
    const {score,show} = movieDetails;
    const {image,runtime,status,rating,name,genres,summary,premiered,language} = show
    const avgRating = rating.average ? rating.average : 0;
    const originalImg = image ? image.original : "https://cdn.shopify.com/s/files/1/2122/6609/products/0_8848e0ab-a58f-4c93-b334-56a02cfb1af7_300x300.jpg?v=1675332332";
    return(
        <MovieDetailsBg>
            <MovieImageBg image={originalImg}>
                <ImageCard>
                    <ImageCardText>{runtime ? runtime : 0} min</ImageCardText>
                </ImageCard>
                <ImageCard>
                    <ImageCardText>{status} </ImageCardText>
                </ImageCard>
                <ImageCard>
                    <AiOutlineStar  />
                    <ImageCardText>{avgRating} </ImageCardText>
                </ImageCard>
            </MovieImageBg>
            <MovieDetailsContainer>
                <MovieName>{name}</MovieName>
                <GenreContainer>
                    {genres.map(genre => (
                        <GenreCard key={genre}>
                            <GenreText>{genre}</GenreText>
                        </GenreCard>
                    ))}
                </GenreContainer>
                <Description>{summary.replace("<p>","").replace("</p>","")}</Description> 
                <br />
                <Description style={{color:"white"}}>Premiered At: {premiered}</Description>
                <Description style={{color:"white"}}>Language: {language}</Description>
                <BookTicketsBtn>Book Tickets</BookTicketsBtn>     
            </MovieDetailsContainer>
        </MovieDetailsBg>
    )
}

export default MovieDetails
