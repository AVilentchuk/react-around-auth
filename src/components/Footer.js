const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__about'>{`© ${new Date().getFullYear()} Around The U.S.`}</p>
    </footer>
  );
};

export default Footer;
