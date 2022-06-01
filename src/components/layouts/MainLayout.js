import React from 'react';
import Header from '../Header/Header';

function MainLayout(props) {
	return (
    <div className='container'>
      <Header />
      {props.children}
    </div>
  )
}

export default MainLayout;
