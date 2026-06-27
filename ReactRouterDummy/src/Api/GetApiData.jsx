export const GetApiData = async () =>{
    try {
        const res= await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
        );
        const data = await res.json();
        console.log(data);
        return data;
        
    } catch (error) {
        console.log(error)
        return {results: []};
        
    }
    
}