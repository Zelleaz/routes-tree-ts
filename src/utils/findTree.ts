import {Tree} from "../../types";

export const findTree = (rootTree: Tree, query: string): Tree | false => {
    let result: Tree | false = false;

    const fn = (tree: Tree) => {
        if (tree.route === query) {
            result = tree;
        } else {
            tree.nodes.forEach((node) => {
                fn(node);
            });
        }
    };
    fn(rootTree)

    return result;
};