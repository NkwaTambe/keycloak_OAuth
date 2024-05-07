import React, { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

const useAuth = () => {
    const [isLogin, setLogin] = useState(false);

    useEffect( () => {
        const client = new Keycloak({

            url: import.meta.env.VITE_KEYCLOAK_URL,
            realm: import.meta.env.VITE_KEYCLOAK_REALM,
            clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
        });

    client.init({ onLoad: "Login-required" }).then((res) => setLogin(res));


    }, []);

    return isLogin ;

} ;

export default useAuth;