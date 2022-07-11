import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { category } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <>
      <div className="categories-page">
        <button type="button" onClick={() => dispatch(category())}>
          CHECK STATUS
        </button>
        <span className="statusMsg">
          {status}
        </span>
      </div>
    </>
  );
};

export default Categories;
