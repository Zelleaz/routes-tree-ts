import React, {FC} from 'react';
import {Tree} from "../../../types";
import './room.scss'
import Header from "../Header/Header";
import AppendForm from "../AppendForm/AppendForm";
import ChildRoutes from "../ChildRoutes/ChildRoutes";

const Room:FC<Tree> = ({ nodes, title, route }) => {
    return (
        <div className={`room room_${nodes.length === 0 ? 'fb' : 'wa'}`}>
            <Header route={route} title={title} />
            <div className="room-body">
                <AppendForm baseRoute={ route} />
            </div>
            <ChildRoutes nodes={nodes} />
        </div>
    );
};

export default Room;