import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { getItems } from "../services/ItemsServices";
import {
  selectAgencyServices,
  selectFooterMenu,
  selectHero,
  selectIsLoading,
  selectMainMenu,
  selectPortoflio,
  selectServices,
} from "../redux/selectors/ItemsSelectors";
import Loading from "../common/loading/Loading";
import MainMenu from "../modules/mainMenu/MainMenu";
import { useIsMobile } from "../hooks/useIsMobile";
import MobileMenu from "../modules/mainMenu/MobileMenu";
import HeroSection from "../modules/hero/HeroSection";
import Services from "../modules/services/Services";
import OurWork from "../modules/ourWork/OurWork";
import AgencyServices from "../modules/agencyServices/AgencyServices";
import Footer from "../modules/footer/Footer";

const LandingPage = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const mainMenuItems = useSelector(selectMainMenu);
  const heroSection = useSelector(selectHero);
  const services = useSelector(selectServices);
  const portfolio = useSelector(selectPortoflio);
  const agencyServices = useSelector(selectAgencyServices);
  const footerMenu = useSelector(selectFooterMenu);
  const { isMobile } = useIsMobile();

  if (isLoading) return <Loading />;

  return (
    <>
      {isMobile ? (
        <MobileMenu mainMenuItems={mainMenuItems} />
      ) : (
        <MainMenu mainMenuItems={mainMenuItems} />
      )}
      <HeroSection heroSection={heroSection} />
      <Services services={services} />
      <OurWork portfolio={portfolio} />
      <AgencyServices agencyServices={agencyServices} />
      <Footer footerMenu={footerMenu} />
    </>
  );
};

export default LandingPage;
