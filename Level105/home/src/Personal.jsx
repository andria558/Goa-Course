export default function Personal() {
  return (
    <section className="section">
      <img src="personal.png" alt="Personal" />
      <h1>Personal Page</h1>
      <p>Customize your phone experience — make it truly yours!</p>
      <button onClick={() => (window.location.href = '/')}>More...</button>
    </section>
  );
}
