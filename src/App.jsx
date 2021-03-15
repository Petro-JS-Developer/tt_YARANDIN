/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import './App.scss';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { getData } from './api';
import { ListFilms } from './Components/ListFilms';
import { Film } from './Components/Film';
import { Character } from './Components/Character';
import { Planet } from './Components/Planet';
import { Specie } from './Components/Specie';
import { Starship } from './Components/Starship';
import { Vehicle } from './Components/Vehicle';

function App() {
  const [allFilms, setAllFilms] = useState([]);
  const [currentListFilms, setCurrentListFilms] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedObject, setSelectedObject] = useState({});

  useEffect(() => {
    getData('films')
      .then((res) => res.json())
      .then((res) => {
        setCurrentListFilms(res.results);
        setAllFilms(res.results);
      });
  }, []);

  useEffect(() => {
    setCurrentListFilms(allFilms.filter(({
      title,
      episode_id,
      opening_crawl,
      director,
      producer,
      release_date,
    }) => (
      (title + title + episode_id + opening_crawl
        + director
        + producer
        + release_date).toLowerCase()
        .includes(query.toLowerCase()))));
  }, [query]);

  const getNewObject = (url) => {
    console.log('current url', url);
    getData(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSelectedObject(res);
      });
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Star Wars</h1>
        <input className="search" type="search" name="searchFilm" id="" placeholder="Search for a movie" value={query} onChange={(event) => setQuery(event.target.value)} />
        <Switch>
          <Redirect exact from="/films" to="/" />
          <Route exact path="/">
            <ListFilms
              currentListFilms={currentListFilms}
              setCurrentListFilms={setCurrentListFilms}
              setSelectedObject={setSelectedObject}
              getNewObject={getNewObject}
            />
          </Route>
          <Route path="/film">
            <Film {...selectedObject} getNewObject={getNewObject} />
          </Route>
          <Route path="/people">
            <Character {...selectedObject} getNewObject={getNewObject} />
          </Route>
          <Route path="/planet">
            <Planet {...selectedObject} getNewObject={getNewObject} />
          </Route>
          <Route path="/specie">
            <Specie {...selectedObject} getNewObject={getNewObject} />
          </Route>
          <Route path="/starship">
            <Starship {...selectedObject} getNewObject={getNewObject} />
          </Route>
          <Route path="/vehicle">
            <Vehicle {...selectedObject} getNewObject={getNewObject} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
