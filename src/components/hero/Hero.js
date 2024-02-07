import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

export const Hero = ({animes}) => {
    return (
        <div className="anime-carousel-container">
            <Carousel>
                {
                    animes?.map((anime) => {
                        return (
                            <Paper key={anime.imdbId}>
                                <div className="anime-container">
                                    <div className="anime-card">
                                        <div className="anime-detail">
                                            <div className="anime-poster">
                                                <img src={anime.poster} alt={anime.title} />
                                            </div>
                                            <div className="anime-title">
                                                <h4>{anime.title}</h4>
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
