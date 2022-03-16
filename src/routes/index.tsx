import { lazy, Suspense } from "react"
import {
    BrowserRouter as Routes,
    Switch,
    Route,
    Link,
} from "react-router-dom"
import { routes } from "./routes"
const AppRouter = () => {
    return (
        <Routes>
            <Suspense fallback={<div>loading</div>}>
                <Switch>
                    {routes.map((route, key) => {
                        const { path, exact, component, isPrivate} = route

                        const props = {
                            path,
                            exact,
                            component: lazy(() => component)
                        }

                        

                    })}
                </Switch>
            </Suspense>
        </Routes>
    )
}

export default AppRouter