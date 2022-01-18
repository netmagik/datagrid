import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const PhotoTable = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then(data => data.json())
            .then(data => setPhotos(data))
            .catch(error => console.log(error));
    }, []);
    
    console.log(photos);

    return (
        <div>
            <h1>PhotoTable</h1>
        </div>
    );
};

export default PhotoTable;