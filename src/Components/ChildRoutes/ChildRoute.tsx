import React, {FC} from 'react';
import {Tree} from "../../../types";
import {Link} from "react-router-dom";

const ChildRoute: FC<Tree> = ({ title, route }) => {

    return (
        <Link to={route} className='child'>
            {title}
        </Link>
    );
};

export default ChildRoute;