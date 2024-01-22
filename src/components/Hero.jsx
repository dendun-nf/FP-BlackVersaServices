export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col text-white bg-gray-900 h-[100dvh] justify-end items-center gap-4 font-jakarta"
    >
      <div
        id="hero-content"
        className="grid grid-flow-row grid-cols-2 p-4 place-items-center"
      >
        <div className="hero-text">
          <h1 className="text-5xl font-bold">Black Versa</h1>
          <p>
            Get your free 30-day trial of Black Versa. No credit card required.
          </p>
        </div>
        <img
          src="https://placehold.co/600x400/000000/FFF"
          alt="blackversaimages"
          className="rounded-xl"
        />
      </div>
    </section>
  );
}
