import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

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
        <div className='photo-container'>
        <h1>PhotoTable</h1>
        <p style={{textAlign: 'center', fontSize: '1.4rem', margin: '30px'}}>
            Example of using <a href="https://mui.com/api/card/">React Card Component</a> with Fake Data from <a href="https://jsonplaceholder.typicode.com/">JSON Placeholder</a>
        </p>
        <div className='photo-table'>
            {photos.map(photo => (
                <Card key={photo.id}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {`${photo.id}. ${photo.title}`}
                        </Typography>
                        <CardMedia>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                        </CardMedia>
                    </CardContent>
                </Card>
            ))}
        </div>
        </div>
    );
};

export default PhotoTable;