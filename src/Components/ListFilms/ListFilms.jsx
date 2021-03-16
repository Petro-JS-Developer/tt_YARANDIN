import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ListFilms.scss';

export const ListFilms = ({
  currentListFilms,
  setCurrentListFilms,
}) => {
  const [directionSortTable, setDirectionSortTable] = useState('asc');

  const sortFilms = () => {
    if (directionSortTable === 'desc') {
      setCurrentListFilms([...currentListFilms.sort((a, b) => (b.title
        .localeCompare(a.title)))]);
      setDirectionSortTable('asc');
    } else {
      setCurrentListFilms([...currentListFilms.sort((a, b) => (a.title
        .localeCompare(b.title)))]);
      setDirectionSortTable('desc');
    }
  };

  return (
    <ol className="listFilms">
      <h2 className="nameFilms">Name films</h2>
      <button type="button" className="sortFilms" onClick={sortFilms}>Sort films</button>
      {currentListFilms.map((film, i) => (
        <li className="listFilms__items" key={film.episode_id}>
          <Link to={`/films/${i + 1}`} className="tableCell">{film.title}</Link>
        </li>
      ))}
    </ol>
  );
};

ListFilms.propTypes = {
  setCurrentListFilms: PropTypes.func.isRequired,
  currentListFilms: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })).isRequired,
};
