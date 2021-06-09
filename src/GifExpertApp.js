import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categories = ['The Godfather', 'Goodfellas', 'Scarface'];
    const [categories, setCategories] = useState(['The Godfather']);

   /*  const handleAdd = ()=>{
        setCategories([...categories, 'Casino']);
    } */

    return (
        <div>
            <div className = "GifTitulo">
                <img src = "img/banana.gif"/>
                <h2>Busca Gif</h2>
            </div>
            <AddCategory  setCategories ={setCategories}/>
            <hr />

          

            <ol>
                {categories.map(category =>(
                    <GifGrid key = {category} category={category} />
                ))
                } 
            </ol>
        </div>
    )
}
