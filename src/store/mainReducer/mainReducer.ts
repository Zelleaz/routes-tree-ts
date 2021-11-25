import {Tree} from "../../../types";
import {ActionTypes, RootAction} from "./types";
import {appendTree} from "../../utils/appendTree";

const initialState: Tree = {
    title: 'Main',
    route: '/main',
    nodes: []
}

export const mainReducer = (state: Tree = initialState, action: RootAction): Tree => {
    switch (action.type) {
        case ActionTypes.APPEND_NODE:
            return {
                ...appendTree(action.payload.node, action.payload.rootRoute, state)
            }
        default: return state
    }
}