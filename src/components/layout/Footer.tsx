import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold text-white tracking-tight">accredian</span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs">
              Credentials that matter. Empowering enterprises with next-generation expertise and customized training solutions.
            </p>
            <div className="flex gap-4 pt-4 text-sm font-medium">
              <Link href="#" className="hover:text-white transition-colors">FB</Link>
              <Link href="#" className="hover:text-white transition-colors">IN</Link>
              <Link href="#" className="hover:text-white transition-colors">TW</Link>
              <Link href="#" className="hover:text-white transition-colors">IG</Link>
              <Link href="#" className="hover:text-white transition-colors">YT</Link>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Accredian</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Admission Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Programs</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Data Science & AI</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Product Management</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Business Analytics</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Digital Transformation</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Executive Programs</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <p className="text-white font-medium mb-1">Email us:</p>
                <a href="mailto:enterprise@accredian.com" className="hover:text-blue-400 transition-colors">
                  enterprise@accredian.com
                </a>
              </li>
              <li>
                <p className="text-white font-medium mb-1">Office Address:</p>
                <p>4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana</p>
              </li>
            </ul>
            <div className="mt-6">
              <Button variant="primary" className="w-full sm:w-auto">
                Speak with our Advisor
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
