import ReactDOM from 'react-dom/client'
import './index.css'
import {GoogleOAuthProvider} from "@react-oauth/google";

import { Provider } from "react-redux";
import store from "./core/store/index.js";
import Routes from "./routes/index.jsx";
import {fetchUser} from "./auth/store/actions.js";
import {getToken} from "./auth/utils/TokenHelper.js";


if (getToken()) {
    store.dispatch(fetchUser())
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
                <Routes />
        </GoogleOAuthProvider>
    </Provider>
)
