import PropTypes from 'prop-types';
import { createContext } from 'react';
import { auth } from '../firebase/firebase.config';

export const AtuhContext= createContext(null)

const AuthProvider = ({children}) => {
    return (
        <AtuhContext.Provider value={}>
            {children}
        </AtuhContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;