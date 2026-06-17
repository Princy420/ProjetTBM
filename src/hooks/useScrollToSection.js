import { useLocation, useNavigate } from 'react-router-dom';

export function useScrollToSection() {
  const location = useLocation();
  const navigate = useNavigate();

  return (sectionId) => {
    const scroll = () => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scroll, 150);
    } else {
      scroll();
    }
  };
}
