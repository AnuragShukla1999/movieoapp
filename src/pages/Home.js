import React, { useEffect, useState } from 'react';
import BannerHome from '../components/BannerHome.js';
import { useSelector } from 'react-redux';
import Card from '../components/Card.js';
import HorizontalScollCard from '../components/HorizontalScrollCard.js';
import axios from 'axios';
import useFetch from '../hooks/useFetch.jsx';

const Home = () => {

  const trendingData = useSelector(state => state.movieoData.bannerData);
  const { data : nowPlayingData } = useFetch('/movie/now_playing');
  const { data : topRatedData } = useFetch('/movie/top_rated');
  const { data : popularTvShowData } = useFetch('/tv/popular');
  const { data : onTheAirShowDate } = useFetch('/tv/on_the_air');

  return (
    <div>
       <BannerHome/>
       <HorizontalScollCard data={trendingData} heading={"Trending"} trending={true} />
       <HorizontalScollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"} />
       <HorizontalScollCard data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"} />
       <HorizontalScollCard data={popularTvShowData} heading={"Popular TV Show"} media_type={"tv"} />
       <HorizontalScollCard data={onTheAirShowDate} />
    </div>
  )
}

export default Home