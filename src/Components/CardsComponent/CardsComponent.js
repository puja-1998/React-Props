import "./CardsComponent.css";
import { FaShare, FaHeart, FaComment } from "react-icons/fa";  // FontAwesome icons

export default function CardsComponent(props){
    let {name, release_year,duration,genre,description,image_url,poster_image} = props.card;

    return(
        <div className="card-container">
            <div className="movie-data">
                <div className="card-data">
                <img src={image_url} alt="card-image" className="img"></img>

                <div className="details"> 
                    <h1>{name}</h1>
                    <p>{release_year}</p><br/>
                    
                    <p>{duration}  <span>{genre}</span></p>
                    
                </div>
                </div>
                <p>{description}</p>

                <div className="icons" style={{ display: "flex", gap: "15px", fontSize: "24px" }}>
                <FaShare title="Share" />
                <FaHeart title="Like" />
                <FaComment title="Comment" />
                </div>
            </div>
            <div className="image">
                <img src={poster_image} alt="poster-image" className="poster-image"></img>
            </div>

        </div>
    );
}