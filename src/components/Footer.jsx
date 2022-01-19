import {FaTwitter, FaEnvelope, FaGithub} from 'react-icons/fa'

const Footer = ({ movies }) => {
  const date = new Date().getFullYear()
  
  return (
      <footer className={movies === null ? 'footerFixed' : null}>
        <div className="socials">
          <a href="https://github.com/ccanyanwu" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/Cc_anyanwu?s=09"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:anyanwuchukwuemeka9@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
        <p>copyright thrive &copy;{date}</p>
      </footer>
  );
}

export default Footer
