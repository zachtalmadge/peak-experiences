import App from './App'
import Home from './Pages/Home'
import AllActivites from './Pages/AllActivites'
import ActivityDetails from './Pages/ActivityDetails'
import UserList from './Pages/UserList'
import Form from './Pages/Form'

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/activites',
                element: <AllActivites />
            },
            {
                path: '/activites/:id',
                element: <ActivityDetails />
            },
            {
                path: '/mybucketlist',
                element: <UserList />
            },
            {
                path: '/form',
                element: <Form />
            }
        ]
    }
]

export default routes