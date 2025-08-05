const Footer = () => {
  return (
    <footer className="relative z-10 bg-gray-900 text-gray-300 py-10 px-6 border-t border-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Thương hiệu */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Gaming Dream 🎮</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Ở đây toàn Sigma
          </p>
        </div>

        {/* Liên hệ */}
        <div>
          <h4 className="text-md font-semibold text-white mb-3">Contact</h4>
          <ul className="text-sm space-y-1 text-gray-400">
            <li>Email: gamingdream@sigma.com</li>
            <li>Phone: +84 123 456 789</li>
            <li>Address: 123 Fucking Road, Ohio, Brainrot</li>
          </ul>
        </div>

        {/* Bản quyền */}
        <div className="md:text-right">
          <p className="text-sm text-gray-400">
            © 2025 <span className="font-semibold text-white">ThienSigma</span>
          </p>
          <p className="text-xs mt-1 text-gray-500">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;