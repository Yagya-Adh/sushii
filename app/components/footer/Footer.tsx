import FooterTopSection from "../section/FooterTopSection";

const Footer = () => {
  return (
    <footer className="px-7 py-12 mx-auto max-w-screen-lg">
      <FooterTopSection />
      <div className="pt-8 w-full justify-center text-sm xl:text-base  text-center items-center flex">
        Copyrights© Sushi Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
