export default function HomeImageSection() {
  return (
    <section className="w-full flex justify-center py-16 px-4 sm:px-6 lg:px-8">
      <img
        src="/images/creation/comunidade-barcos.jpg"
        alt="Comunidade costeira ao pôr do sol"
        className="w-full max-w-6xl rounded-2xl object-cover shadow-lg"
        data-testid="img-home-community"
      />
    </section>
  );
}
