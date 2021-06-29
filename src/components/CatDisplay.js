import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_CAT_API_KEY;

const CatImage = styled.img`
  max-width: 200px;
  max-height: 200px;
`

export const CatDisplay = () => {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [images, setImages] = useState([]);
  const [breeds, setBreeds] = useState([]);

  const getBreeds = async () => {
    const res = await axios('/breeds');
    return res.data;
  }

  const getCatsImagesByBreed = async (breed_id) => {
    const res = await axios('/images/search?breed_ids=' + breed_id);
    return res.data;
  }

  const loadBreedImages = async (selectedBreed) => {
    let breed_images = await getCatsImagesByBreed(selectedBreed);
    setImages(breed_images);
  }

  const onBreedSelectChange = async (e) => {
    await setSelectedBreed(e.target.value);
    await loadBreedImages(e.target.value);
  }

  useEffect(() => {
    if( breeds.length === 0 ) {
      (async () => {
        try {
          setBreeds(await getBreeds());
        } catch (e) {
          console.log(e);
        }
      })();
    }
  })

  return (
    <div>
      <select
        value={selectedBreed}
        onChange={onBreedSelectChange}>
        <option value=''>select cat type</option>
        {breeds.map((breed) => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
      </select>

      <div>
        {images.map((image) => <CatImage className="cat-img" alt="cat image" src={image.url}></CatImage>)}
      </div>
    </div>
  )
}