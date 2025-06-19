import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export const golablContext = createContext();

export const ContextProvider = ({children}) => {

  const navigate = useNavigate();
  const location = useLocation();

  const [page, setPage] = useState('');
  const [pageTitle, setPageTitle] = useState('');
  const [headerNormal, setHeaderNormal] = useState('');
  const [headerHighlight, setHeaderHighlight] = useState('');
  const [heroImage, setHeroImage] = useState('');
  const [heroContentImage, setHeroContentImage] = useState('');
  useEffect(() => {
    if(location.pathname === '/'){
      navigate('/home')
    }
  }, [])
  return (
    <golablContext.Provider value={{
      page,
      setPage,
      pageTitle,
      setPageTitle,
      headerNormal,
      setHeaderNormal,
      headerHighlight,
      setHeaderHighlight,
      heroImage,
      setHeroImage,
      heroContentImage,
      setHeroContentImage
    }}>
      {children}
    </golablContext.Provider>
  )
}