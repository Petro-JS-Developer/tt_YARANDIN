/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import './App.scss';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { Loader } from './Components/Loader/Loader';
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    getData('/films/')
      .then((res) => res.json())
      .then((res) => {
        setCurrentListFilms(res.results);
        setAllFilms(res.results);
      });
    setIsLoading(true);
  }, []);

  useEffect(() => {
    setCurrentListFilms(allFilms.filter(({
      title,
    }) => (
      (title).toLowerCase()
        .includes(query.toLowerCase()))));
  }, [query]);

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Star Wars</h1>
        <input className="search" type="search" name="searchFilm" id="" placeholder="Search for a movie" value={query} onChange={(event) => setQuery(event.target.value)} />
        {isLoading ? (
          <Switch>
            <Route exact path="/">
              <ListFilms
                currentListFilms={currentListFilms}
                setCurrentListFilms={setCurrentListFilms}
              />
            </Route>
            <Route path="/films/">
              <Film />
            </Route>
            <Route path="/people/">
              <Character />
            </Route>
            <Route path="/planets/">
              <Planet />
            </Route>
            <Route path="/species/">
              <Specie />
            </Route>
            <Route path="/starships/">
              <Starship />
            </Route>
            <Route path="/vehicles/">
              <Vehicle />
            </Route>
          </Switch>
        ) : <Loader />}
      </div>
    </div>
  );
}

export default App;
