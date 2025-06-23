import React from 'react'
import ReactDom from 'react-dom/client'
import { BuscadorPeliculas } from './BuscadorPeliculas'
import './styles/Busscador.css'

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BuscadorPeliculas/>
    </React.StrictMode>,
)
