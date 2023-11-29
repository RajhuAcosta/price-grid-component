import "./App.css";

function App() {
  return (
    <main className='min-h-screen grid place-content-center font-["Karla"] bg-[hsl(204,43%,93%)] px-7 py-20 text-white'>
      <div className="rounded-md overflow-auto grid grid-rows-[auto_auto_auto] lg:grid-cols-2 max-w-[660px]">
        <section className="bg-white px-6 py-6 lg:px-10 lg:py-10 lg:col-span-2">
          <h2 className="text-[hsl(179,62%,43%)] font-bold text-xl lg:text-2xl">
            Join our community
          </h2>
          <h3 className="text-[hsl(71,73%,54%)] font-bold py-4 lg:pt-5 lg:pb-2 lg:text-lg">
            30-day, hassle-free money back guarantee
          </h3>
          <p className="text-[hsl(218,22%,67%)] text-sm lg:text-base leading-7">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </section>
        <section className="bg-[hsl(179,62%,43%)] px-6 py-6 lg:px-10 lg:py-10">
          <h3 className="font-bold text-lg">Monthly Subscription</h3>
          <div className="flex items-center gap-4 mt-4 mb-2">
            <h2 className="font-bold text-3xl">$29</h2>
            <span className="text-white/50">per month</span>
          </div>
          <p className="text-white/90 mb-7">
            Full access for less than $1 a day
          </p>
          <button className="bg-[hsl(71,73%,54%)] font-bold w-full py-4 rounded-lg shadow-2xl">
            Sign Up
          </button>
        </section>
        <section className="bg-[hsla(179,62%,43%,0.82)] px-6 py-6 lg:px-10 lg:py-10">
          <h2 className="text-lg font-bold mb-4">Why Us</h2>
          <p className="text-white/60 text-sm">Tutorials by industry experts</p>
          <p className="text-white/60 text-sm">Peer & expert code review </p>
          <p className="text-white/60 text-sm">Coding exercises</p>
          <p className="text-white/60 text-sm">Access to our GitHub repos</p>
          <p className="text-white/60 text-sm">Community forum</p>
          <p className="text-white/60 text-sm">Flashcard decks</p>
          <p className="text-white/60 text-sm">New videos every week</p>
        </section>
      </div>
    </main>
  );
}

export default App;
