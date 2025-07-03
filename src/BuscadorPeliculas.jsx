import { useState } from "react"

export const BuscadorPeliculas = () => {
    
    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = '1f8a7dd3e92e11985676bcff8a37fec7'
    const [busqueda, setBusqueda] = useState('')
    const [peliculas, setPeliculas] = useState([])
    
    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchPeliculas()
    }
    const fetchPeliculas = async () => {
        try{
            if (!API_KEY) {
                console.error('Error: ');
                return; // Detener la ejecución si la API_KEY no está presente
            }

            const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json()
            setPeliculas(data.results)
            
        }catch(error){
            console.error('Error al buscar películas:', error)
        }
    }

    return (
    <div className="container">
        <h1 className="title">Buscador de Peliculas</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Escribi tu pelicula"
            value={busqueda}
            onChange={handleInputChange}
            />
            <button type="submit" className="search-button">Buscar</button>
        </form>
        {/* Aquí puedes renderizar las películas */}
        <div className="movie-list">
            {peliculas.map( (pelicula) => (
                <div key={pelicula.id} className="movie-card">
                    <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
                    <h2>{pelicula.title}</h2>
                    <p>{pelicula.overview}</p>
                </div>
            ))}
        </div>
    </div>
    )
}

