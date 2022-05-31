import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

function MainLayout(props) {
	return (
    <div className='container'>
      <Header />
      <Menu />
      {props.children}
    </div>
  )
}

export default MainLayout;
