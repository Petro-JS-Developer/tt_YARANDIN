/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './specie.scss';
import { Loader } from '../Loader/Loader';
import { getData } from '../../api';

export const Specie = () => {
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
    classification,
    designation,
    average_height,
    skin_colors,
    hair_colors,
    eye_colors,
    average_lifespan,
    homeworld,
    language,
    people,
    films,
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
                <span>Classification:</span>
                {classification}
              </li>
              <li>
                <span>Designation:</span>
                {designation}
              </li>
              <li>
                <span>Average height:</span>
                {average_height}
              </li>
              <li>
                <span>Skin colors:</span>
                {skin_colors}
              </li>
              <li>
                <span>Hair colors:</span>
                {hair_colors}
              </li>
              <li>
                <span>Eye colors:</span>
                {eye_colors}
              </li>
              <li>
                <span>Average lifespan:</span>
                {average_lifespan}
              </li>
              <li>
                <span>Home world:</span>
                <Link
                  to={homeworld.slice(20, homeworld.length - 1)}
                  className="linkItem"
                  key={homeworld.slice(20)}
                >
                  {homeworld}
                </Link>
              </li>
              <li>
                <span>language:</span>
                {language}
              </li>
              <li>
                <span>People:</span>
                {people.map((item) => (
                  <Link
                    to={item.slice(20, item.length - 1)}
                    className="linkItem"
                    key={item.slice(20)}
                  >
                    {item}
                  </Link>
                ))}
                {' '}
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
            </ul>
          </div>
        </div>
      ) : <Loader />}
    </>
  );
};
