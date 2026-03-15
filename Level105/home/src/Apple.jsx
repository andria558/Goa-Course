export default function Apple() {
  return (
    <section className="section">
      <img src="apple.png" alt="Apple" />
      <h1>Apple iPhone</h1>
      <p>Elegant, powerful, and iconic — experience iPhone like never before.</p>
      <button onClick={() => (window.location.href = '/')}>More...</button>
    </section>
  );
}
