import React from 'react'


import dis1 from '../images/dis/diseño1.svg'
import dis2 from '../images/dis/diseño2.svg'
import dis3 from '../images/dis/diseño3.svg'
import SlickPlus from '../utils/SlickPlus'

import fot1 from '../images/fondo1.jpg'
import fot2 from '../images/fondo.jpg'
import fot3 from '../images/fondo1.jpg'
import fot4 from '../images/dis/fondoDiseño.jpg'
import fot5 from '../images/hanna.png'
import fot6 from '../images/fab/fondoFab.jpg'

const ventanas = [
    {
        src: fot1,
        alt: "",
        id: '1'
    },
    {
        src: fot2,
        alt: "",
        id: '2'
    },
    {
        src: fot3,
        alt: "",
        id: '3'
    },
    {
        src: fot4,
        alt: "",
        id: '4'
    },
    {
        src: fot5,
        alt: "",
        id: '5'
    },
    {
        src: fot6,
        alt: "",
        id: '6'
    }
]

const cards = [
    {
        src: dis1,
        srcbig: dis1,
        id: "1",
        class: "tarjeta",
        alt: "Nombre del primer diseño",
        text: "Descripción muy motivadora",
        footer: "La letra pequeña (precio o fecha)"
    },
    {
        src: dis2,
        srcbig: dis2,
        id: "2",
        class: "tarjeta",
        alt: "Otro diseño de calidad superior",
        text: "Otra descripción muy motivadora",
        footer: "La letra pequeña (precio o fecha)"
    },
    {
        src: dis3,
        srcbig: dis3,
        id: "3",
        class: "tarjeta",
        alt: "Diseño número 3",
        text: "Aquí algo de información adicional. Puede ser mucho texto o solamente dos o tres palabras, es muy probable que nadie lo lea de todas formas.",
        footer: "La letra pequeña (precio o fecha)"
    },
    {
        src: dis1,
        srcbig: dis1,
        id: "4",
        class: "tarjeta",
        alt: "Un cuarto diseño",
        text: "Aquí algo de información adicional. Puede ser mucho texto o solamente dos o tres palabras, es muy probable que nadie lo lea de todas formas. Estoy reciclando la primera imagen porque soy muy vago",
        footer: "La letra pequeña (precio o fecha)"
    },
    {
        src: dis1,
        srcbig: dis1,
        id: "5",
        class: "tarjeta",
        alt: "Un cuarto diseño",
        text: "Aquí algo de información adicional. Puede ser mucho texto o solamente dos o tres palabras, es muy probable que nadie lo lea de todas formas. Estoy reciclando la primera imagen porque soy muy vago",
        footer: "La letra pequeña (precio o fecha)"
    },
    {
        src: dis1,
        srcbig: dis1,
        id: "6",
        class: "tarjeta",
        alt: "Un cuarto diseño",
        text: "Aquí algo de información adicional. Puede ser mucho texto o solamente dos o tres palabras, es muy probable que nadie lo lea de todas formas. Estoy reciclando la primera imagen porque soy muy vago",
        footer: "La letra pequeña (precio o fecha)"
    },
    {
        src: dis1,
        srcbig: dis1,
        id: "7",
        class: "tarjeta",
        alt: "Un cuarto diseño",
        text: "Aquí algo de información adicional. Puede ser mucho texto o solamente dos o tres palabras, es muy probable que nadie lo lea de todas formas. Estoy reciclando la primera imagen porque soy muy vago",
        footer: "La letra pequeña (precio o fecha)"
    }
]

 const estilo = {
     width: "100%",
     backgroundColor: "#112f3e",
     color: "white",
     paddingLeft: "1rem",
     paddingTop: "0.5rem",
     paddingBottom: "0.5rem",
     textAlign: "left"
 }       

const Gallery = () => {
    return (
        <div className="page-2" style = {{paddingTop: "2rem"}} >
            <h1>Diseños</h1>

            <h2 style={estilo} >Ventanas</h2>
            <SlickPlus images = {ventanas}/>

            <h2 style={estilo} >Puertas</h2>
            <SlickPlus images = {cards}/>
            

            <h2 style={estilo} >Canceles</h2>
            <SlickPlus images = {ventanas}/>

            <h2 style={estilo} >Barandales</h2>
            <SlickPlus images = {cards}/>

            <h2 style={estilo} >Muro Cortina</h2>
            <SlickPlus images = {ventanas}/>

            <h2 style={estilo} >Louvers</h2>
            <SlickPlus images = {cards}/>
            
            
        </div>
    )
}

export default Gallery
