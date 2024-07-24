import React from 'react';
import classes from './HeaderStyle.module.css'
import {Link} from "react-router-dom";

const NavPanel = () => {

    const links = ['О НАС', 'ФЛОТ', 'ИНВЕСТОРАМ', 'КАРЬЕРА', 'ПРЕСС-ЦЕНТР', 'УСТОЙЧИВОЕ РАЗВИТИЕ', 'КОНТАКТЫ']

    return (
        <ul className={classes.navPanel}>
            {links.map((el, index) =>
                el === 'КОНТАКТЫ' ?
                    <li
                        key={index + Date.now()}
                    >
                        <Link to='/contacts' onClick={() => window.scrollTo({top: 0})}>{el}</Link>
                    </li>
                    :
                    <li
                        key={index + Date.now()}
                    >
                        <a href='#'>{el}</a>
                    </li>
            )
            }
        </ul>

    );
};

export default NavPanel;