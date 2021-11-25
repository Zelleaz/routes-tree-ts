import React, {useEffect, useState} from 'react';
import {Navigate, Route, Routes, useRoutes } from 'react-router-dom';
import {Tree} from "../types";
import {parseTree} from "./utils/parseTree";
import {useTypedSelector} from "./hooks/useTypedSelector";
import Room from "./Components/Room/Room";

const AppRoutes = () => {
    const [trees, setTrees] = useState<Tree[]>([])
    const rootTree = useTypedSelector(state => state.main)


    useEffect(() => {
        setTrees(parseTree(rootTree))
    }, [rootTree])

    return (
        <Routes>
            {
                trees.map(tree => <Route path={tree.route} key={tree.route} element={<Room {...tree} />}  />)
            }
            <Route path='*' element={<Navigate to='/main' />} />
        </Routes>
    );
};

export default AppRoutes;