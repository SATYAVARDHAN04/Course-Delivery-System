import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <style>
        {`
          .footer {
            background-color: #800000;
            color: white;
            padding: 20px 0;
            text-align: center;
            box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
          }

          .social-icons a {
            color: white;
            margin: 0 15px;
            transition: transform 0.3s ease, color 0.3s ease;
          }

          .social-icons a:hover {
            color: #ffd700;
            transform: scale(1.1);
          }

          .copyright {
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 0.5px;
          }

          .student-ids {
            font-size: 14px;
            margin-top: 5px;
            opacity: 0.9;
          }
          p{
            font-family: 'Didot', serif;
          }
        `}
      </style>

      <footer className="footer">
        <div className="social-icons">
          {[
            { icon: faInstagram, link: "https://instagram.com" },
            { icon: faTwitter, link: "https://twitter.com" },
            { icon: faFacebook, link: "https://facebook.com" },
            { icon: faWhatsapp, link: "https://whatsapp.com" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </a>
          ))}
        </div>

        <p className="copyright">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>

        <div className="student-ids">
        <div className="student-ids">
          <p>
        <a href="https://www.linkedin.com/in/dinesh-saidu-472b56259/" target="_blank" rel="noopener noreferrer">S.Dinesh</a> |  
        <a href="https://www.linkedin.com/in/satya-vardhan-1a0b93249/" target="_blank" rel="noopener noreferrer">Satya Vardhan</a> |  
        <a href="https://www.linkedin.com/in/anishkst07/" target="_blank" rel="noopener noreferrer">K.T.Anish Sai</a> |  
        <a href="https://www.linkedin.com/in/annepu-naveen-164333257/" target="_blank" rel="noopener noreferrer">A.Naveen</a>
        </p>
        </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
