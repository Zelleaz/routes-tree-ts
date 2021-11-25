export const getRootRoute = (route: string) => {

    if (route === '/main') {
        return '/main'
    }

    const split = route.split('/')
    return split.splice(0, split.length - 1).join('/')
}