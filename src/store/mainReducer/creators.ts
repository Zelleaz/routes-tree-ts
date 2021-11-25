import {Tree} from "../../../types";
import {ActionTypes, AppendNode} from "./types";

export const appendNode = (node: Tree, rootRoute: string): AppendNode => ({
    type: ActionTypes.APPEND_NODE,
    payload: {
        node,
        rootRoute
    }
})