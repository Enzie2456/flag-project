import './App.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

// Pages
import FlagAll, {FlagsLoader} from './pages/FlagAll/FlagAll'
import FlagDetail, { FlagsDetailLoader} from './pages/FlagDetail'
import NotFound from './pages/NotFound'
import FlagError from './pages/FlagAll/FlagError'

// Layouts
import RootLayout from './layouts/RootLayout'
import SearchFlagLayout from './layouts/SearchFlagLayout'
import RegionFilterLayout from './layouts/RegionFilterLayout'

const routesFromElements = createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<FlagAll />} errorElement={<FlagError />} loader={FlagsLoader} >
        <Route
                path=":id"
                element={<FlagDetail />}
                loader={ FlagsDetailLoader}
            />
        </Route>
            <Route path="searchflag" element={<SearchFlagLayout />}>
            <Route path="regionfilter" element={<RegionFilterLayout />} />
        </Route>
        <Route path="*" element={<NotFound />} />

    </Route>
)

const router = createBrowserRouter(routesFromElements)

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App