// Footer.jsx
function Footer() {
  return (
    
    <footer className="bg-footer">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Mon Entreprise</h1>
          <nav className="mt-2">
            <a href="#home" className="mr-4 hover:underline">Accueil</a>
            <a href="#about" className="mr-4 hover:underline">À propos</a>
            <a href="#contact" className="mr-4 hover:underline">Contact</a>
          </nav>
        </div>
        <div>
          <a href="https://www.facebook.com" className="mr-4 hover:text-blue-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" className="mr-4 hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" className="mr-4 hover:text-blue-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;