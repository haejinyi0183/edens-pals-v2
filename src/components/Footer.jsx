function Footer() {
  const getYear = new Date().getFullYear();
  
  return (
    <div>
      <a href="/" className="link back-to-top flex align-items-center visible">
        <i className="fas fa-arrow-up"></i>
        <span>⪡back to top</span>
      </a>

      <p className="h3 fixed-bottom text-center text-muted">Edens Pals &copy; {getYear}</p>
    </div>
  );
}
export default Footer;
