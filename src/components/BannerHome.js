import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const BannerHome = () => {
    const bannerData = useSelector(state => state.movieoData.bannerData);

    const imageURL = useSelector(state => state.movieoData.imageURL);

    const [currentImage, setCurrentImage] = useState(0);


    const handleNext = () => {
        
    }
}