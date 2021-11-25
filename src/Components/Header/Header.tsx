import React, {FC} from 'react';
import { useNavigate } from 'react-router-dom';
import './header.scss'
import {getRootRoute} from "../../utils/getRootRoute";

const Header: FC<{ title: string, route: string }> = ({ title, route }) => {
    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate(getRootRoute(route))
    }

    return (
        <div className='header'>
            <h1 className="header__title">{title}</h1>
            {route !== '/main' && <button onClick={onClickHandler} className="btn">Перейти к родительскому узлу</button>}
        </div>
    );
}

export default Header;