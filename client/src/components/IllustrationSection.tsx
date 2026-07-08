interface IllustrationSectionProps {
  imageSrc: string;
  alt: string;
  overlayOpacity?: number;
  height?: string;
  className?: string;
}

export default function IllustrationSection({
  imageSrc,
  alt,
  overlayOpacity = 0.4,
  height = "h-[400px] md:h-[500px]",
  className = ""
}: IllustrationSectionProps) {
  return (
    <section 
      className={`relative w-full overflow-hidden ${height} ${className}`}
      data-testid="illustration-section"
    >
      <img
        src={imageSrc}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, rgba(0, 62, 99, ${overlayOpacity}) 0%, rgba(0, 45, 71, ${overlayOpacity * 0.8}) 50%, rgba(212, 163, 115, ${overlayOpacity * 0.3}) 100%)`
        }}
      />
    </section>
  );
}
