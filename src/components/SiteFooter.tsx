import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import ndpr from "@/assets/ndpr.png";

export function SiteFooter() {
  return (
    <footer className="bg-nysc-green-dark text-white mt-16">
      <div className="mx-auto max-w-[1200px] px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4 text-base border-b border-white/20 pb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-nysc-gold">About NYSC</Link></li>
            <li><Link to="/top-management" className="hover:text-nysc-gold">Top Management</Link></li>
            <li><Link to="/departments" className="hover:text-nysc-gold">Departments</Link></li>
            <li><Link to="/publications" className="hover:text-nysc-gold">Publications</Link></li>
            <li><Link to="/faqs" className="hover:text-nysc-gold">FAQs</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-base border-b border-white/20 pb-2">Connect</h3>
          <div className="flex gap-3 mb-4">
            <a href="#" aria-label="Facebook" className="bg-white/10 hover:bg-nysc-gold hover:text-nysc-green-dark p-2 rounded-full transition"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="bg-white/10 hover:bg-nysc-gold hover:text-nysc-green-dark p-2 rounded-full transition"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="bg-white/10 hover:bg-nysc-gold hover:text-nysc-green-dark p-2 rounded-full transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="bg-white/10 hover:bg-nysc-gold hover:text-nysc-green-dark p-2 rounded-full transition"><Youtube className="h-4 w-4" /></a>
          </div>
          <p className="text-xs text-white/70">Follow us for updates, news and announcements.</p>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-base border-b border-white/20 pb-2">Partners</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li>Federal Ministry of Youth</li>
            <li>NHIA</li>
            <li>NIMC</li>
            <li>Bank of Industry</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-base border-b border-white/20 pb-2">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /><span>NYSC Directorate Headquarters, Plot 416, Tafawa Balewa Way, Area 3, Garki, Abuja</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /><span>+234 (0) 700-CALL-NYSC</span></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /><span>info@nysc.gov.ng</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-[1200px] px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/70">
            © {new Date().getFullYear()} National Youth Service Corps. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <img src={ndpr} alt="NDPR Audit 2023" className="h-12 object-contain bg-white/5 rounded p-1" />
            <div className="bg-nysc-gold text-nysc-green-dark font-bold text-xs px-3 py-2 rounded">
              50 YEARS<br />OF SERVICE
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
