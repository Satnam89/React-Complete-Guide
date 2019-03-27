import React from 'react';

const authContext = React.createContext({ 
    autheticate: false,
    login: () => {}
    });

export default authContext;