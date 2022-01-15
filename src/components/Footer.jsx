const Footer = ({movies}) => {
  const date = new Date().getFullYear()
  
  return (
      <footer className={movies === null ? 'footerFixed' : null}>
        <div className="socials">
          <a href="tel:+2347033548895" target="_blank" rel="noreferrer">
            <i className="fas fa-phone"></i>
          </a>
          <a
            href="https://twitter.com/Cc_anyanwu?s=09"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="mailto:anyanwuchukwuemeka9@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p>copyright thrive &copy;{date}</p>
      </footer>
  );
}

export default Footer
