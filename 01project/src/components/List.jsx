import "./series.css";
const List =(props)=>{
const {id,img_url,name,rating,description,cast,genre,watch_url}=props.curElem;
     return (
          <li>
            <div>
              <img
                src={img_url}
                alt={id}
                width="450px"
                height="250px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <h2>Name:{name}</h2>
            <h3>Rating:<span className={rating >= 8.5 ? "hit" : "avg"}>{rating}</span></h3>
            <h3>Cast:{cast}</h3>
            <p>Summary:{description}</p>
            <p>Genre:{genre}</p>
            <a href={watch_url} target="_blank">
              <button>Watch Now</button>
            </a>
          </li>
        );
}
export default List; 

