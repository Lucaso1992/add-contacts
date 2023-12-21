import ContactView from "../views/Contact-view";
import FormView from "../views/Form-view";
import EditView from "../views/Edit-view";


const routes = [
    {
        path: '/',
        element: <ContactView/>
    },

    {
        path: '/form',
        element: <FormView/>
    }, 
    {
        path: '/edit',
        element: <EditView/>
    }
]

export default routes;