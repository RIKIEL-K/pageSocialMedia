import React, { useEffect, useState } from "react";
import { FILMS } from "../models/film";
import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";

function ImagesFilter(images, searchText) {
  return images.filter((image) =>
    image.Title.toLowerCase().includes(searchText.toLowerCase())
  );
}
const SearchImageList = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages(FILMS);
  }, []);

  const [searchText, setSearchText] = useState('');
  const foundImage = ImagesFilter(images, searchText);

  return (
    <>
      <SearchBar
        value={searchText}
        onChange={(newText) => setSearchText(newText)}
      />
      <ImageList images={foundImage} />
      
    </>
    
  );
};

export default SearchImageList;
