import './App.css';

export default function App() {
  return (
    <div class="wiki-app">
      <aside class="sidebar">
        <h2>Contents</h2>
        <ul>
          <li><a href="#intro">Introduction</a></li>
          <li><a href="#history">History</a></li>
          <li><a href="#features">Features</a></li>
        </ul>
      </aside>

      <main class="content">
        <h1>Wikipedia</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png"
          alt="Wikipedia Logo"
          class="wiki-logo"
        />

        <section id="intro">
          <h2>Introduction</h2>
          <p>
            Wikipedia is a free, multilingual online encyclopedia written and maintained by a community of volunteers through open collaboration. It is one of the most visited websites in the world and serves as a go-to source for quick information on nearly any topic imaginable.
          </p>
          <p>
            Articles on Wikipedia are written in a neutral tone and are supported by citations from reliable sources. The platform is hosted by the non-profit Wikimedia Foundation and is available in over 300 languages.
          </p>
        </section>

        <section id="history">
          <h2>History</h2>
          <p>
            Wikipedia was launched on January 15, 2001, by Jimmy Wales and Larry Sanger. Initially intended as a supplement to the expert-reviewed Nupedia, Wikipedia quickly outpaced its predecessor due to its open editing model.
          </p>
          <p>
            Over the years, Wikipedia has grown exponentially, reaching millions of articles and contributors worldwide. It has played a significant role in democratizing access to knowledge and has been cited in academic papers, news articles, and even court cases.
          </p>
        </section>

        <section id="features">
          <h2>Features</h2>
          <ul>
            <li><strong>Open Editing:</strong> Anyone with internet access can edit most articles, fostering a collaborative environment.</li>
            <li><strong>Multilingual Support:</strong> Wikipedia is available in hundreds of languages, making it accessible globally.</li>
            <li><strong>References & Citations:</strong> Articles are expected to cite reliable sources, ensuring verifiability.</li>
            <li><strong>Community Moderation:</strong> Volunteers monitor edits and enforce guidelines to maintain quality and neutrality.</li>
            <li><strong>Talk Pages:</strong> Each article has a discussion page where contributors can debate changes and improvements.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}


