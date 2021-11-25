import {Tree} from "../../types";

export const appendTree = (toAppend: Tree, rootRoute: string, state: Tree) => {
    const localState: Tree = state;

    const mapping = (tree: Tree) => {
        if (tree.route === rootRoute) {
            tree.nodes.push(toAppend);
        } else {
            if (tree.nodes.length) {
                tree.nodes.forEach((node) => {
                    mapping(node);
                });
            }
        }
    };
    mapping(localState);

    return localState
};