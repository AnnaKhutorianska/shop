import React from 'react';
import { useNavigate } from 'react-router-dom';

import CartButton from '../CartButton/CartButton';
import Logo from '../Logo/Logo';

import './Header.css';

function Header() {
	const navigate = useNavigate();

	function handleClick() {
		navigate('/cart');
	}

	return (
		<div className="header">
			<h2>Online Shop</h2>
			<Logo />
			<div>
				<CartButton onClick={handleClick} className='header-cart' />
			</div>
		</div>
	);
}

export default Header;
