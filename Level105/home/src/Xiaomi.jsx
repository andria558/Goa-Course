export default function Xiaomi() {
  return (
    <section className="section">
      <img src="xiaomi.png" alt="Xiaomi" />
      <h1>Xiaomi Phones</h1>
      <p>Smart, stylish, and affordable — Xiaomi brings tech for everyone.</p>
      <button onClick={() => (window.location.href = '/')}>More...</button>
    </section>
  );
}
