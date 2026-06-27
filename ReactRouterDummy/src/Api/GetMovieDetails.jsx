export const GetMovieDetails = async ({params}) =>{
    console.log(params);
    const id=params.id;
    try {
        const res= await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
        );
        const data = await res.json();
        console.log(data);
        return data;
        
    } catch (error) {
        console.log(error)
        
    }
    
}