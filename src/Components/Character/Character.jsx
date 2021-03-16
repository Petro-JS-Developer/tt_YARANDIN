/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getData } from '../../api';
import { Loader } from '../Loader/Loader';
import './character.scss';

export const Character = () => {
  const history = useHistory();
  const [selectedObject, setSelectedObject] = useState({});
  const getNewObject = (url) => {
    getData(url)
      .then((res) => res.json())
      .then((res) => {
        setSelectedObject(res);
      });
  };

  useEffect(() => {
    getNewObject(history.location.pathname);
  }, []);

  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    films,
    species,
    vehicles,
    starships,
  } = selectedObject;
  return (
    <>
      {Object.keys(selectedObject).length > 0 ? (
        <div className="fcols fx-row">
          <div className="fLeft">
            <div className="fImg img-wide">
              <img src="https://uaserials.pro/posters/1352.jpg" alt="Мандалорець" />
            </div>
          </div>
          <div className="fright fx-1 fx-col">
            <h1 className="short-title fx-1">
              <div>
                <span>{name}</span>
              </div>
            </h1>

            <ul className="short-list">
              <li>
                <span>height:</span>
                {height}
              </li>
              <li>
                <span>mass:</span>
                {mass}
              </li>
              <li>
                <span>hair_color:</span>
                {hair_color}
              </li>
              <li>
                <span>skin_color:</span>
                {skin_color}
              </li>
              <li>
                <span>eye_color:</span>
                {eye_color}
              </li>
              <li>
                <span>birth_year:</span>
                {birth_year}
              </li>
              <li>
                <span>gender:</span>
                {gender}
              </li>
              <li>
                <span>homeworld:</span>
                <Link
                  to={homeworld.slice(20, homeworld.length - 1)}
                  className="linkItem"
                  key={homeworld.slice(20)}
                >
                  {homeworld}
                </Link>
              </li>
              <li>
                <span>Films:</span>
                {films.map((item) => (
                  <Link
                    to={item.slice(20, item.length - 1)}
                    className="linkItem"
                    key={item.slice(20)}
                  >
                    {item}
                  </Link>
                ))}
              </li>
              <li>
                <span>Starships:</span>
                {starships.map((item) => (
                  <Link
                    to={item.slice(20, item.length - 1)}
                    className="linkItem"
                    key={item.slice(20)}
                  >
                    {item}
                  </Link>
                ))}
                .
              </li>
              <li>
                <span>Vehicles:</span>
                {vehicles.map((item) => (
                  <Link
                    to={item.slice(20, item.length - 1)}
                    className="linkItem"
                    key={item.slice(20)}
                  >
                    {item}
                  </Link>
                ))}
                .
              </li>
              <li>
                <span>Species:</span>
                {species.map((item) => (
                  <Link
                    to={item.slice(20, item.length - 1)}
                    className="linkItem"
                    key={item.slice(20)}
                  >
                    {item}
                  </Link>
                ))}
              </li>
            </ul>
          </div>
        </div>
      ) : <Loader /> }
    </>
  );
};
