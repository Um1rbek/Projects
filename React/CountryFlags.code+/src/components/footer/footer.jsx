import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand / About */}
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">CountryFlags</h3>
            <p className="text-sm">
              Discover flags and facts of countries around the world. Powered by free REST API.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-blue-500">Home</a></li>
              <li><a href="/countries" className="hover:text-blue-500">Countries</a></li>
              <li><a href="/about" className="hover:text-blue-500">About</a></li>
              <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-sm">Email: support@countryflags.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t pt-4 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} CountryFlags. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
