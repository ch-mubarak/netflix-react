const key = "052009152ae535ba7f64f0b8d90f9260"

const requests={
    requestRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestTrending:`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestTv:`https://api.themoviedb.org/3/tv/popular?api_key=${key}`

}

export default requests

