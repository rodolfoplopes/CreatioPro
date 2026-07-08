import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroInternalProps {
  title: string;
  subtitle?: string;
  badge?: string;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  titleI18n?: string;
  subtitleI18n?: string;
  badgeI18n?: string;
  showCta?: boolean;
  ctaText?: string;
  ctaI18n?: string;
  ctaHref?: string;
  showSecondaryCta?: boolean;
  secondaryCtaText?: string;
  secondaryCtaI18n?: string;
}

export default function HeroInternal({
  title,
  subtitle,
  badge,
  imageSrc,
  imageAlt,
  videoSrc,
  titleI18n,
  subtitleI18n,
  badgeI18n,
  showCta = false,
  ctaText = "Agende uma conversa",
  ctaI18n,
  ctaHref = "/contato",
  showSecondaryCta = false,
  secondaryCtaText = "Ver cases",
  secondaryCtaI18n
}: HeroInternalProps) {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#7ad1e4]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            {badge && (
              <span
                className="inline-block text-sm font-semibold text-[#7ad1e4] uppercase tracking-widest mb-4"
                data-i18n={badgeI18n}
              >
                {badge}
              </span>
            )}
            <h1
              className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tight"
              data-i18n={titleI18n}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className="text-xl text-[#374151] leading-relaxed mb-8"
                data-i18n={subtitleI18n}
              >
                {subtitle}
              </p>
            )}
            {showCta && (
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href={ctaHref}>
                  <span
                    className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold text-lg hover:gap-3 transition-all cursor-pointer"
                    data-i18n={ctaI18n}
                  >
                    {ctaText}
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </Link>
                {showSecondaryCta && (
                  <span
                    className="inline-flex items-center gap-2 text-black font-medium text-lg hover:gap-3 transition-all cursor-pointer"
                    data-i18n={secondaryCtaI18n}
                  >
                    {secondaryCtaText}
                    <ArrowRight className="h-5 w-5" />
                  </span>
                )}
              </div>
            )}
          </div>
          {(imageSrc || videoSrc) && (
            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden min-h-[320px] md:min-h-[420px] border border-[rgba(0,0,0,0.08)]">
                {videoSrc ? (
                  <video
                    src={videoSrc}
                    className="w-full h-full object-cover min-h-[320px] md:min-h-[420px]"
                    controls
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={imageSrc}
                    alt={imageAlt || ""}
                    className="w-full h-full object-cover min-h-[320px] md:min-h-[420px]"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
