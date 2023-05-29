import React from 'react'
import axios from 'axios'
function Movies() {
    const [movies, setMovies] = React.useState([])
    const [index, setIndex] = React.useState(0)
    
    React.useEffect(()=>{
        axios.get("http://www.omdbapi.com/?apikey=50552c5e&s=thriller")
        .then((res)=>{
            console.log(res.data.Search)
            setMovies(res.data.Search);
        })
    },[])
    
    function nextMovie(){
        if(index===movies.length-1){
            setIndex(0);
        }
        else{
            setIndex(index+1)
        }
    }
    function prevMovie(){
        if(index===0){
            setIndex(movies.length-1);
        }
        else{
            setIndex(index-1)
        }
    }
    return (
        <div>
            {
                <div className="d-flex justify-content-center h-100">
                    <div className='w-50 border border-2 text-center'> 
                        {
                            movies[index] &&  (
                                <>
                                    <h1>{ movies[index].Title}</h1>
                                    <img src={movies[index].Poster} alt="" />
                                </>
                            )
                        }
                        <div className='d-flex justify-content-around'>
                            <button onClick={prevMovie}>Prev</button>
                            <button onClick={nextMovie}>Next</button>
                        </div>
                    </div>
                    
                </div>
            }
        </div>
    )

}

export default Movies