export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <h1 className="text-3xl font-bold">About ANXT</h1>
      <p>
        ANXT is a calm, low-friction support app designed for moments of anxiety and panic. We focus on gentle,
        evidence-informed grounding activities you can use immediately.
      </p>
      <section className="card space-y-2">
        <h2 className="text-xl font-semibold">Values</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Accessible by default: clear language, large targets, and keyboard support.</li>
          <li>Privacy-minded: no mandatory login for core features.</li>
          <li>Supportive and practical: simple steps you can follow under stress.</li>
        </ul>
      </section>
      <section className="card space-y-2">
        <h2 className="text-xl font-semibold">Disclaimer</h2>
        <p>
          ANXT is not a medical device and does not replace professional care. If symptoms are frequent or severe,
          consider talking with a licensed mental health professional.
        </p>
      </section>
    </div>
  );
}
