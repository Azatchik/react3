import React, {useState} from 'react';
import classes from "./HeaderStyle.module.css";
import logo from "../../../assets/images/header/logo.svg";
import search from "../../../assets/images/header/search.svg";
import {Link} from "react-router-dom";

const HeaderInfo = () => {

	const [isClickedSearch, setIsClickedSearch] = useState(false)
	const [request, setRequest] = useState('')

	const sendMessage = (e) => {
		e.preventDefault()
		if(request) {
			console.log(request)
			setRequest('')
		}
	}

	return (
		<div className={classes.navInfo}>

			{/*Логотип*/}
			<Link to='/main' onClick={() => window.scrollTo({top: 0})}><img className={classes.navLogo} src={logo} alt='logoImg'/></Link>

			{/*Контакты*/}
			<div className={classes.navContacts}>
				<p>info@lead-group.ru</p>
				<p>+7 (495) 123-45-67</p>
			</div>

			{/*Если нажата кнопка поиска выводим форму с инпутом и кнопкой, если нет то просто кнопку*/}
			{ isClickedSearch ?
				<form
					className={classes.searchForm}
					onSubmit={e => sendMessage(e)}
				>
					<input
						className={classes.searchInput}
						type="text"
						placeholder='Что найти?'
						spellCheck={false}
						autoFocus={true}
						value={request}
						onChange={e => setRequest(e.target.value)}
						onMouseLeave={() => setIsClickedSearch(false)}
						onMouseEnter={() => setIsClickedSearch(true)}
					/>
					<img
						className={classes.navSearchClicked}
						src={search}
						alt='searchImg'
						onMouseLeave={() => setIsClickedSearch(false)}
						onMouseEnter={() => setIsClickedSearch(true)}
						onClick={e => request ? sendMessage(e) : setIsClickedSearch(false)}
					/>
				</form>
				:
				<img
					className={classes.navSearch}
					src={search}
					alt='searchImg'
					onClick={() => setIsClickedSearch(true)}
				/>
			}
		</div>
	);
};

export default HeaderInfo;