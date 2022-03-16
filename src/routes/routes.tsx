import { HOME, LOGIN } from "../config/path";

export const routes = [
    {
        path: LOGIN,
        exact: true,
        isPrivate: false,
        component: import('../components/auth/Login')
    },
    {
        path: HOME,
        exact: true,
        isPrivate: true,
        component: import('../components/home/index')
    }
]