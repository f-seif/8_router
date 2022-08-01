import { Link, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { moviesData } from '../Data';

function MoviePage({}) {
  let {title}=useParams()
   let movies = moviesData.find((movie)=>movie.title==title);
   let {video, description, imageSrc}=movies
  return (
    <>
      <main style={{background:`url(${imageSrc})`, backgroundSize:"cover", height:"100%", width:"auto"}}>
        <div className="p-4" style={{width:"640px"}}>
          <h1 className="mb-2" style={{background:"rgba(255, 255, 255, 0.25)", width:"100%", padding:"4px"}}>{title}</h1>
          <iframe className="mb-2" width="100%" height="320" src={video} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div style={{background:"rgba(255, 255, 255, 0.25)", width:"100%", padding:"4px"}}>
            <p className="mb-2">{description}</p>
            <Link to="/">Go back to home</Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default MoviePage;
