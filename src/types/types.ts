export interface IItemsRespond {
  main_menu: IMenu[];
  hero: IHero;
  services: IServices;
  portfolio: IPortfolio;
  agency_services: IAgencySerivices;
  company_data: ICompanyData;
  footer_menu: IMenu[];
}

export type ICompanyData = {
  address: string;
  phone: string;
  email: string;
  logo: string;
  name: string;
  intro: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    linkedin: string;
    twitter: string;
  };
};

export type IAgencySerivices = {
  title: string;
  items: IServiceItem[];
};

export type IMenu = {
  name: string;
  url: string;
  order: number;
};

export type IHero = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  image: string;
};

export type IPortfolio = {
  title: string;
  description: string;
  items: IPortfolioItem[];
};

export type IServices = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  items: IServiceItem[];
};

export type IServiceItem = {
  title: string;
  description: string;
  icon?: string;
  image?: string;
};

export type IPortfolioItem = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  image: string;
};
