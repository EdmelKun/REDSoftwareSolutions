import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer style={styles.container}>
      <div style={styles.socialContainer}>
        <p style={styles.connectText}>Connect with us:</p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaFacebookF size={24} color="#fff" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaTwitter size={24} color="#fff" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaLinkedinIn size={24} color="#fff" />
        </a>
      </div>
      <p style={styles.copyrightText}>
        &copy; {new Date().getFullYear()} RED Software Solutions. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  container: {
    backgroundColor: '#003366', // Dark blue background
    padding: '20px',
    textAlign: 'center',
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  },
  connectText: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: '10px',
  },
  icon: {
    marginHorizontal: '10px',
  },
  copyrightText: {
    color: '#fff',
    fontSize: '14px',
  },
};

export default Footer;
