import {Tree} from "../../types";

export const parseTree = (rootTree: Tree): Tree[] => {
    const result: Tree[] = [];
    result.push(rootTree);

    const fn = (tree: Tree) => {
        if (tree.nodes.length > 0) {

            tree.nodes.forEach((node) => {
                result.push(node);
                fn(node);
            });

        }
    };
    fn(rootTree);

    return result.reverse();
};