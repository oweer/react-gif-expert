import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

        const [images, setimages] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
    
    
        const getImages = async() =>{
            const newImages = await getGift( category);
            setimages(newImages);
            setIsLoading(false);
        }
    
        useEffect( () => {
            getImages();
        }, [ ])

    return{
        images,
        isLoading
    }
}
