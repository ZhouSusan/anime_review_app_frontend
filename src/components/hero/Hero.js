import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Hero = ({animes}) => {
    return (
        <div className="anime-carousel-container">
            <Carousel>
                {
                    animes?.map((anime) => {
                        return (
                            <Paper key={anime.imdbId}>
                                <div className="anime-container">
                                    <div className="anime-card" style={{"--img": `url(${anime.backdrops[0]})`}}>
                                        <div className="anime-detail">
                                            <div className="anime-poster">
                                                <img src={anime.poster} alt={anime.title} />
                                            </div>
                                            <div className="anime-title">
                                                <h4>{anime.title}</h4>
                                            </div>
                                            <div className="button-container">
                                                <Link to={`/Trailer/${anime.trailerLink.substring(anime.trailerLink.length - 11)}`}>
                                                    <div className="play-button-icon-container">
                                                        <FontAwesomeIcon 
                                                            className="play-button-icon"
                                                            icon = {faCirclePlay}
                                                        />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>    
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
