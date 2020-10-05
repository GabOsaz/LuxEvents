import React, { useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();
const { Provider } = AuthContext;


const AuthProvider = ({ children }) => {
  const history = useHistory();
  const userInfo = localStorage.getItem('userInfo');

  const expiresAt = localStorage.getItem('expiresAt');
  const [authState, setAuthState] = useState({
    expiresAt,
    userInfo: userInfo ? JSON.parse(userInfo) : {}
  });
  const [searchInfo, setSearchInfo] = useState();
  const [details, setDetails] = useState();
  const [galleryData, setGallery] = useState();
  const [venueDetails, setVenueDetails] = useState();

  const setAuthInfo = ({ userInfo, expiresAt }) => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('expiresAt', expiresAt);
    setAuthState({
      userInfo,
      expiresAt
    })
  }

  const logout = () => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('expiresAt');
    setAuthState({
      userInfo: {},
      expiresAt: null
    })
    history.push('/login');
  }

  const isAuthenticated = () => {
    if(!authState.userInfo || !authState.expiresAt) {
      return false
    }
    return new Date().getTime() / 1000 < authState.expiresAt
  }

  return (
    <Provider
      value={{
        authState,
        setAuthState: authInfo => setAuthInfo(authInfo),
        setGallerySearchData: data => setSearchInfo(data),
        searchInfo,
        setVenueDetails: data => setDetails(data),
        details,
        setGalleryData: data => setGallery(data),
        galleryData,
        isAuthenticated,
        setVenueDetailsReq: data => setVenueDetails(data),
        venueDetails
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };