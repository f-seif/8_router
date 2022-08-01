import Nav from './Nav';
import MovieList from './MovieList';


function Home({movies, searchValue, handleSearch, searchRating, handleRating, AddMovie}) {
  return (
    <>
    <div>
      <Nav searchValue={searchValue} handleSearch={handleSearch} searchRating={searchRating} handleRating={handleRating}/>
      <div className="m-2">
        <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modal">Add movie</button>
      </div>
      <MovieList moviesProps={movies.filter(
        (movie) =>  movie.title.toLowerCase()
        .includes(searchValue.toLowerCase().trim()
        ) &&
        movie.rating >= searchRating
        )}/>
      <div id="modal" className="modal fade" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Enter new movie details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form className="modal-body" name="newMovieForm">
              <input type="text" name="title" className="form-control mb-2" placeholder="Enter movie name" aria-label=""/>
              <input type="url" name="imageSrc" className="form-control mb-2" placeholder="Enter movie image url" aria-label=""/>
              <input type="number" name="rating" min="0" max="5" className="form-control mb-2" placeholder="Enter movie rating" aria-label=""/>
              <input type="text" name="des" className="form-control" placeholder="Enter movie description" aria-label=""/>
            </form>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button id="sc" type="submit" className="btn btn-primary" onClick={AddMovie} data-bs-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
