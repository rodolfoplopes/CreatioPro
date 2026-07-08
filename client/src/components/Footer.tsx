import { Link, useLocation } from "wouter";
import { content } from "@/lib/content";
import logoWhite from "@assets/site_logo_creation.png";

export default function Footer() {
  const [, setLocation] = useLocation();

  const navigateAndScroll = (path: string) => {
    setLocation(path);
    setTimeout(() => {
      const firstSection = document.querySelector('main section:nth-of-type(2)') || 
                          document.querySelector('section[data-first-content="true"]');
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: window.innerHeight - 64, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-[#000000] text-white" data-testid="footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <Link href="/">
                <img 
                  src={logoWhite} 
                  alt="Creation Pro" 
                  className="h-16 w-auto"
                  data-testid="img-footer-logo"
                />
              </Link>
              <p className="mt-6 text-white/60 max-w-md leading-relaxed" data-i18n="footer_description">
                {content.footer.description}
              </p>
              <p className="mt-3 text-white/40 text-sm" data-i18n="footer_locations">
                {content.footer.locations}
              </p>
              <p className="mt-6 text-[#7ad1e4] font-semibold tracking-widest text-sm uppercase" data-i18n="brand_microcopy">
                {content.brand.microcopy}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-widest" data-i18n="footer_company_title">
                {content.footer.links.company.title}
              </h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => navigateAndScroll('/quem-somos')}
                    className="text-white/60 hover:text-[#7ad1e4] transition-colors text-left"
                    data-testid="link-footer-about"
                    data-i18n="footer_about"
                  >
                    Quem Somos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateAndScroll('/servicos')}
                    className="text-white/60 hover:text-[#7ad1e4] transition-colors text-left"
                    data-testid="link-footer-services"
                    data-i18n="footer_services"
                  >
                    Soluções
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateAndScroll('/metodo')}
                    className="text-white/60 hover:text-[#7ad1e4] transition-colors text-left"
                    data-testid="link-footer-method"
                    data-i18n="footer_method"
                  >
                    Método
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateAndScroll('/contato')}
                    className="text-white/60 hover:text-[#7ad1e4] transition-colors text-left"
                    data-testid="link-footer-contact"
                    data-i18n="footer_contact"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-widest" data-i18n="footer_services_title">
                {content.footer.links.services.title}
              </h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => navigateAndScroll('/servicos')}
                    className="text-white/60 hover:text-[#7ad1e4] transition-colors text-left"
                    data-testid="link-footer-ops"
                    data-i18n="footer_creation_ops"
                  >
                    Creation OPS
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateAndScroll('/servicos')}
                    className="text-white/60 hover:text-[#7ad1e4] transition-colors text-left"
                    data-testid="link-footer-impact"
                    data-i18n="footer_ops_impact"
                  >
                    OPS Impact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateAndScroll('/servicos')}
                    className="text-white/60 hover:text-[#7ad1e4] transition-colors text-left"
                    data-testid="link-footer-expansion"
                    data-i18n="footer_ops_expansion"
                  >
                    OPS Expansion
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateAndScroll('/servicos')}
                    className="text-white/60 hover:text-[#7ad1e4] transition-colors text-left"
                    data-testid="link-footer-creative"
                    data-i18n="footer_ops_creative"
                  >
                    OPS Creative
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40" data-i18n="footer_copyright">
              &copy; {new Date().getFullYear()} {content.footer.copyright}
            </p>
            <Link href="/contato" className="md:hidden">
              <span
                className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold hover:gap-3 transition-all cursor-pointer"
                data-testid="button-footer-cta"
                data-i18n="footer_cta"
              >
                {content.footer.cta}
                <span className="text-lg">→</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
