import React from 'react';
import TopBar from './TopBar';
import MyNewsBar from './MyNewsBar';
import CategoryNews from './CategoryNews';
import SearchNews from './SearchNews';
import Categories from './Categories';
import search_mobile from './Icons/Search_mobile.svg';
import './styles.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { BrowserView, MobileView } from 'react-device-detect';
import menu from './Icons/Menu.svg';
import LatestNews from './LatestNews';
import LatestNewsMobile from './LatestNewsMobile';
import SearchNewsMobile from './SearchNewsMobile';
import CategoryMenu from './CategoryMenu';
import CategoryNewsMobile from './CategoryNewsMobile';

const highlightedStyleMobile = {
  color: "#BB1E1E",
  background: "rgba(187, 30, 30, 0.1)"
}

const styleMobile = {
  color: "#1D1D1B"
}

function App() {
  const [data, setData] = useState({})
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('home')
  const SEARCH_URL = `https://newsapi.org/v2/everything?q=${search}&apiKey=19f040bdd4a34c34a23e27cbd4d04fcf`
  const CATEGORY_URL = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=9uNXtH4A2x3UsmjOdxHHlnGyAWeZG7a4`
  const isFirstRun = useRef(true)
  const [currentMobileSearch, setCurrentMobileSearch] = useState('')
  const [newsStatusMobile, setNewsStatusMobile] = useState('Featured')
  const [categoryMenu, setCategoryMenu] = useState(false)
  const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem("favourites")))

  function getCategoryData() {
    axios.get(CATEGORY_URL)
      .then(res => {
        setData(res.data)
      }).catch(err => {
        console.log(err)
      })
  }

  function getSearchData() {
    axios.get(SEARCH_URL)
      .then(res => {
        setData(res.data)
      }).catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    if (category !== 'favourites') {
      getCategoryData()
    }
    else {
      setData({ results: JSON.parse(localStorage.getItem("favourites")) })
    }
    setSearch('')
  }, [category])

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (search !== "") {
      getSearchData()
      setCategory('')
    }
  }, [search])

  useEffect(() => {
    if (localStorage.getItem("favourites") === null || typeof localStorage.getItem("favourites") === undefined) {
      setFavourites([])
    }
    else {
      setFavourites(JSON.parse(localStorage.getItem("favourites")))
    }
  }, [])

  function searchKeyword(event) {
    if (event.key === "Enter") {
      setSearch(currentMobileSearch)
      setNewsStatusMobile('Featured')
    }
  }

  if (Object.keys(data).length === 0) {
    return <div className="loader"></div>
  }

  return (
    <div className="App">
      <MobileView>
        {
          !categoryMenu &&
          <div className="website">
            <div className="news-bar-mobile">
              <div className="my-news-logo-mobile">
                <div className="my-news-logo-1">My</div>
                <div className="my-news-logo-2">News</div>
              </div>
              <div className="category-menu" onClick={() => setCategoryMenu(true)}>
                <img src={menu} className="icons" />
              </div>
            </div>
            <div className="search-news-bar-mobile">
              <img src={search_mobile} className="search-logo-mobile" />
              <input
                className="input-search-mobile"
                type="text"
                placeholder="Search news"
                onChange={e => setCurrentMobileSearch(e.target.value)}
                onKeyPress={searchKeyword} />
            </div>
            <div className="featured-latest-bar">
              <div
                className="featured-mobile"
                onClick={() => setNewsStatusMobile('Featured')}
                style={newsStatusMobile === 'Featured' ? highlightedStyleMobile : styleMobile}>
                Featured
              </div>
              <div
                className="latest-mobile"
                onClick={() => setNewsStatusMobile('Latest')}
                style={newsStatusMobile === 'Latest' ? highlightedStyleMobile : styleMobile}>
                Latest
              </div>
            </div>
            <div className="news-area-mobile">
              {
                newsStatusMobile === 'Latest' ?
                  <LatestNewsMobile />
                  :
                  <div className="featured-news-mobile">
                    {
                      data.results ?
                        <CategoryNewsMobile
                          data={data.results}
                          category={category}
                          favourites={favourites}
                          setFavourites={setFavourites}
                          search={search} />
                        :
                        <SearchNewsMobile
                          data={data.articles}
                          category={category}
                          favourites={favourites}
                          setFavourites={setFavourites}
                          search={search} />
                    }
                  </div>
              }
            </div>
          </div>
        }
        {categoryMenu &&
          <CategoryMenu
            setCurrentMobileSearch={setCurrentMobileSearch}
            searchKeyword={searchKeyword}
            setCategory={setCategory}
            category={category}
            search={search}
            setCategoryMenu={setCategoryMenu}
            setSearch={setSearch}
            setNewsStatusMobile={setNewsStatusMobile}
          />
        }
      </MobileView>

      <BrowserView>
        <TopBar />
        <div className="website">
          <MyNewsBar setSearch={setSearch} />
          <div className="bottom-border" />
          <div className="below-border-area">
            <Categories setCategory={setCategory} category={category} search={search} />
            <div className="news-area">
              <div className="news-title">News</div>
              {data.results ?
                <CategoryNews
                  data={data.results}
                  category={category}
                  favourites={favourites}
                  setFavourites={setFavourites}
                  search={search} />
                :
                <SearchNews
                  data={data.articles}
                  category={category}
                  favourites={favourites}
                  setFavourites={setFavourites}
                  search={search} />}
            </div>
          </div>
        </div>
      </BrowserView>
    </div>
  );
}

export default App;
