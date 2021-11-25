import {Tree} from "../../../types";
import {Action} from "../store";

export enum ActionTypes {
    APPEND_NODE = 'APPEND_NODE'
}

interface AppendNodeAttrs  {
    node: Tree
    rootRoute: string
}

export type AppendNode = Action<ActionTypes.APPEND_NODE, AppendNodeAttrs>

export type RootAction = AppendNode