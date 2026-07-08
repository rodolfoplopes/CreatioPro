import heroImage from "@assets/impacto_hero.jpg";

export default function ImpactoHeroImage() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden shadow-lg">
          <img
            src={heroImage}
            alt="Expo Itaguaí - Impacto social em ação"
            className="w-full aspect-video object-cover"
            data-testid="img-impacto-hero"
          />
        </div>
      </div>
    </section>
  );
}
