import { Component } from "react"
import { ViewContainer, MainBackground, MainHeading, MoviesContainer, FailureHeading, PrimaryButton } from "./styledComponents";
import { ColorRing } from "react-loader-spinner";
import MovieCard from "../MovieCard";

const APISTATUSCONSTANTS = {
    'SUCCESS': 'success',
    'FAILURE': 'failed',
    'LOADING': 'Loading',
}
class MoviesList extends Component {
    state = { apiStatus: APISTATUSCONSTANTS.LOADING, moviesList: [] }

    componentDidMount() {
        //As soon as component mounts then we will perform the fetch operation on API
        this.getMoviesList();
    }

    getMoviesList = async () => {
        // Fetches The Data from the API
        const apiUrl = 'https://api.tvmaze.com/search/shows?q=all';
        const result = await fetch(apiUrl);
        if (result.ok) {
            //Successfully Fetched the Data from API
            const list = await result.json();
            this.setState({ moviesList: list, apiStatus: APISTATUSCONSTANTS.SUCCESS})
        }
        else {
            //There is a failure in Fetching the Data from API
            this.setState({ apiStatus: APISTATUSCONSTANTS.FAILURE })
        }
    }

    saveMovieDetails = (movieDetails) => {
        console.log(movieDetails)
        localStorage.setItem("movieDetails",JSON.stringify(movieDetails));
    }

    renderSuccessView = () => {
        // This method is called when the API Call gets successful and the movies List will be loaded
        const { moviesList } = this.state;

        return (
            <>
                {
                    moviesList.map((movieDetails) => {
                        return <MovieCard details={movieDetails} key={movieDetails.show.id} saveMovieDetails = {this.saveMovieDetails} />
                    })
                }
            </>
        )

    }

    refetchMoviesList = () => {
        //This is used when the fetch operation is failed and the Failure view Function is displayed on screen
        this.getMoviesList();
    }

    renderLoadingView = () => (
        // This displays a color ring loader until the API is fetched
        <ViewContainer>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </ViewContainer>
    )

    renderFailureView = () => (
        //Displays the Failure View when the API failed to fetch details
        <ViewContainer>
        <FailureHeading>There is a error loading</FailureHeading>
        <PrimaryButton onClick={this.refetchMoviesList}>Retry</PrimaryButton>
        </ViewContainer>
    )

    renderView = () => {
        // This Method Render the view of API Based on its status.
        const { apiStatus } = this.state;

        switch (apiStatus) {
            case APISTATUSCONSTANTS.SUCCESS:
                return this.renderSuccessView()
                break;
            case APISTATUSCONSTANTS.LOADING:
                return this.renderLoadingView()
                break;
            case APISTATUSCONSTANTS.FAILURE:
                return this.renderFailureView()
                break;
            default:
                return null
        }
    }



    render() {
        return (
            <MainBackground>
                <MainHeading>Movies List</MainHeading>
                <MoviesContainer>
                    {this.renderView()}
                </MoviesContainer>
            </MainBackground>
        )
    }
}

export default MoviesList