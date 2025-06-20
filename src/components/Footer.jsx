export default function Footer() {
  return (
    <footer className="bg-black/80 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo / Nom */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-semibold tracking-wide">Nom du Photographe</h2>
          <p className="text-sm text-gray-400">Photographe basé à [ville], spécialisé en mariage, portrait & branding.</p>
        </div>

        {/* Liens rapides */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold uppercase text-sm">Navigation</h3>
          <a href="#mariage" className="text-gray-300 hover:text-white text-sm">Mariage</a>
          <a href="#branding" className="text-gray-300 hover:text-white text-sm">Branding</a>
          <a href="#divers" className="text-gray-300 hover:text-white text-sm">Divers</a>
          <a href="#contact" className="text-gray-300 hover:text-white text-sm">Contact</a>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold uppercase text-sm">Suivez-moi</h3>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-5 h-5 fill-current text-gray-300 hover:text-white" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.1.1 1.9.2 2.3.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1.2.4 2.3.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.1-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.2.3-2.3.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.1-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1.2-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.1.2-1.9.4-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.2-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2M12 0C8.7 0 8.3 0 7.1.1 5.9.2 5 .3 4.2.5 3.3.8 2.6 1.3 1.9 2 .9 3 .3 4.2.1 5.6 0 6.8 0 7.2 0 12s0 5.2.1 6.4c.2 1.4.8 2.6 1.8 3.6.7.7 1.4 1.2 2.3 1.5.8.2 1.7.3 2.9.4 1.2.1 1.6.1 4.9.1s3.6 0 4.8-.1c1.2-.1 2.1-.2 2.9-.4.9-.3 1.6-.8 2.3-1.5.9-1 1.5-2.2 1.7-3.6.1-1.2.1-1.6.1-4.9s0-3.6-.1-4.8c-.2-1.4-.8-2.6-1.8-3.6-.7-.7-1.4-1.2-2.3-1.5-.8-.2-1.7-.3-2.9-.4-1.2-.1-1.6-.1-4.9-.1s-3.6 0-4.8.1c-1.2.1-2.1.2-2.9.4-.9.3-1.6.8-2.3 1.5C1.1 4.4.5 5.6.3 7 .2 8.2.2 8.6.2 12s0 3.8.1 4.9c.2 1.4.8 2.6 1.8 3.6.7.7 1.4 1.2 2.3 1.5.8.2 1.7.3 2.9.4 1.2.1 1.6.1 4.9.1s3.6 0 4.8-.1c1.2-.1 2.1-.2 2.9-.4.9-.3 1.6-.8 2.3-1.5.9-1 1.5-2.2 1.7-3.6.1-1.2.1-1.6.1-4.9s0-3.6-.1-4.8c-.2-1.4-.8-2.6-1.8-3.6-.7-.7-1.4-1.2-2.3-1.5-.8-.2-1.7-.3-2.9-.4C15.6.2 15.2.2 12 .2zm0 5.9c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 9.8c-2.1 0-3.8-1.7-3.8-3.8S9.9 8.1 12 8.1s3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8zm6.4-10.4c0 .8-.7 1.5-1.5 1.5S15.4 7.1 15.4 6.3s.7-1.5 1.5-1.5 1.5.7 1.5 1.5z"/></svg>
            </a>
            {/* Ajoute d'autres icônes : Facebook, LinkedIn, etc. */}
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Nom du Photographe. Tous droits réservés.
      </div>
    </footer>
  );
}
