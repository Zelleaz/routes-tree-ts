import React, {FC} from 'react';
import {Tree} from "../../../types";
import ChildRoute from './ChildRoute';
import './childRoutes.scss'

const ChildRoutes: FC<{ nodes: Tree[] }> = ({ nodes }) => {
    return (
        <div className='child-wrapper'>
            <h2 className="child__title">{nodes.length ? 'Дочерние узлы' : 'Тут будут дочерние узлы'}</h2>
            <div className="child-list">
                {
                    nodes.map(node => <ChildRoute key={node.route} {...node} />)
                }
            </div>
        </div>
    );
};

export default ChildRoutes