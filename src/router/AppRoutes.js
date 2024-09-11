import { ROUTER } from './router';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import AdmissionPage from '../pages/AdmissionPage';
import ProfessionsPage from '../pages/ProfessionsPage';
import NotFoundPage from "../pages/NotFoundPage"

const { HOME_PAGE_ROUTE, ABOUT_PAGE_ROUTE, ADMISSION_PAGE_ROUTE, PROFESSION_PAGE_ROUTE,NOTFOUND_PAGE_ROUTE } = ROUTER;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={HOME_PAGE_ROUTE} exact element={<HomePage />} />
      <Route path={ABOUT_PAGE_ROUTE} element={<AboutPage />} />
      <Route path={ADMISSION_PAGE_ROUTE} element={<AdmissionPage />} />
      <Route path={PROFESSION_PAGE_ROUTE} element={<ProfessionsPage />} />
      <Route path={NOTFOUND_PAGE_ROUTE} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
