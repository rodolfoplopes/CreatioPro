import heroImage from "@assets/CarnaSensa00_1767379164266.jpg";

export default function ProductionsVideoSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden shadow-lg">
          <img
            src={heroImage}
            alt="CarnaSensa - Evento de carnaval"
            className="w-full aspect-video object-cover"
            data-testid="img-productions-hero"
          />
        </div>
      </div>
    </section>
  );
}
