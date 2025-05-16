import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const FullPageRedirect = ({ htmlFile }) => {
  const location = useLocation();

  useEffect(() => {
    window.location.href = htmlFile; // replace with window.open(htmlFile) to open in new tab
  }, [location, htmlFile]);

  return null; // nothing is rendered inside React
};

export default FullPageRedirect;