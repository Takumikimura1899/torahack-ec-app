import React from 'react';
import { useSelector } from 'react-redux';
import { getUserId } from '../reducks/users/Selectors';
const Home = () => {
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  return (
    <>
      <h2>Home</h2>
      <p>{uid}</p>
    </>
  );
};

export default Home;
