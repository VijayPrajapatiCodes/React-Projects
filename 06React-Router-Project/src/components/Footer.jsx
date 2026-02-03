import React from "react";
function Footer(){
    return(
        <>
        <footer className="bg-gradient-to-r from-cyan-500 to-blue-500 ">
            <div className=" max-w-7xl mx-auto">
              <div className="grid grid-cols-4 gap-6 text-center ">
                {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">VijayShop</h2>
            <p className="text-sm leading-relaxed">
              Your one-stop platform for quality products and smooth shopping
              experience. Trusted by thousands of users.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Web Development</li>
              <li className="hover:text-white cursor-pointer">UI/UX Design</li>
              <li className="hover:text-white cursor-pointer">SEO</li>
              <li className="hover:text-white cursor-pointer">Digital Marketing</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@vijayshop.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>India</li>
            </ul>
          </div>

        </div>

        <div className=" text-center text-sm text-gray-400">
          © {new Date().getFullYear()} VijayShop. All rights reserved.
        </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;