/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import './App.scss';
import {
  Switch,
  Route,
  useHistory,
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
  const [selectedObject, setSelectedObject] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const getNewObject = (url) => {
    setIsLoading(false);
    getData(url)
      .then((res) => res.json())
      .then((res) => {
        setSelectedObject(res);
      });
    setIsLoading(true);
  };

  useEffect(() => {
    getData('/films')
      .then((res) => res.json())
      .then((res) => {
        setCurrentListFilms(res.results);
        setAllFilms(res.results);
      });

    getNewObject(window.location.pathname);
  }, []);

  useEffect(() => {
    setCurrentListFilms(allFilms.filter(({
      title,
    }) => (
      (title).toLowerCase()
        .includes(query.toLowerCase()))));
  }, [query]);

  useEffect(() => history.listen((location) => {
    getNewObject(location.pathname);
  }), [history]);

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
                setSelectedObject={setSelectedObject}
                getNewObject={getNewObject}
              />
            </Route>
            <Route path="/films/">
              <Film {...selectedObject} getNewObject={getNewObject} />
            </Route>
            <Route path="/people/">
              <Character {...selectedObject} getNewObject={getNewObject} />
            </Route>
            <Route path="/planets/">
              <Planet {...selectedObject} getNewObject={getNewObject} />
            </Route>
            <Route path="/species/">
              <Specie {...selectedObject} getNewObject={getNewObject} />
            </Route>
            <Route path="/starships/">
              <Starship {...selectedObject} getNewObject={getNewObject} />
            </Route>
            <Route path="/vehicles/">
              <Vehicle {...selectedObject} getNewObject={getNewObject} />
            </Route>
          </Switch>
        ) : <Loader />}

      </div>
    </div>
  );
}

export default App;
