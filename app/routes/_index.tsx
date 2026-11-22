import { useState } from "react";
import { IconArrowDown, IconArrowRight, IconArrowUpRight, IconCompass, IconMapPin, IconMenu2, IconX } from "@tabler/icons-react";
import { districts } from "../jharkhand-map";

export function meta() {
  return [
    { title: "Jharkhand — A land of stories" },
    { name: "description", content: "Discover the landscapes, history, culture and living heritage of Jharkhand." },
  ];
}

const places = [
  { name: "Ranchi", x: 48, y: 63, label: "The city of waterfalls", description: "Jharkhand’s capital is a gateway to forested plateaus, the sacred groves of the region, and spectacular waterfalls including Hundru and Dassam.", image: "https://images.pexels.com/photos/17777847/pexels-photo-17777847.jpeg?auto=compress&cs=tinysrgb&w=900", imageAlt: "Waterfall flowing over rocks near Ranchi" },
  { name: "Netarhat", x: 22, y: 57, label: "Queen of Chotanagpur", description: "On the western plateau, Netarhat is loved for its cool forests, quiet viewpoints and unforgettable sunrises and sunsets.", image: "https://images.pexels.com/photos/36068091/pexels-photo-36068091.jpeg?auto=compress&cs=tinysrgb&w=900", imageAlt: "Sunlight through a quiet forest at sunrise" },
  { name: "Deoghar", x: 74, y: 24, label: "A place of devotion", description: "The temple town of Deoghar is home to Baba Baidyanath Dham, an important pilgrimage destination that comes alive during Shravani Mela.", image: "https://images.pexels.com/photos/31598124/pexels-photo-31598124.jpeg?auto=compress&cs=tinysrgb&w=900", imageAlt: "A Hindu ritual ceremony with lamps and incense" },
  { name: "Jamshedpur", x: 70, y: 80, label: "Steel city, green city", description: "Set between the Subarnarekha and Kharkai rivers, Jamshedpur brings together industrial history, leafy avenues and the nearby Dalma hills.", image: "https://images.pexels.com/photos/36668353/pexels-photo-36668353.jpeg?auto=compress&cs=tinysrgb&w=900", imageAlt: "Colorful entrance gate at Tata Steel Zoological Park" },
  { name: "Betla", x: 22, y: 43, label: "Into the sal forests", description: "Part of Palamu Tiger Reserve, Betla is among India’s early tiger reserves. Its forest trails, wildlife and old Palamu forts make it a memorable wilderness escape.", image: "https://images.pexels.com/photos/36530920/pexels-photo-36530920.jpeg?auto=compress&cs=tinysrgb&w=900", imageAlt: "A Bengal tiger walking along a forest path" },
  { name: "Hazaribagh", x: 44, y: 40, label: "A plateau of forests", description: "Known for its forested hills and wildlife sanctuary, Hazaribagh is also a centre for the living Sohrai and Khovar mural traditions.", image: "https://images.pexels.com/photos/12601505/pexels-photo-12601505.jpeg?auto=compress&cs=tinysrgb&w=900", imageAlt: "A forest trail beneath lush green trees" },
  { name: "Parasnath Hills", x: 62, y: 40, label: "A sacred summit", description: "The highest point in Jharkhand, Parasnath is a revered Jain pilgrimage site. A forested climb leads to the temples and shrines of Shikharji.", image: "https://images.pexels.com/photos/15554149/pexels-photo-15554149.jpeg?auto=compress&cs=tinysrgb&w=900", imageAlt: "A temple standing high on a green hill" },
  { name: "Rajrappa", x: 54, y: 49, label: "Where rivers meet", description: "At the confluence of the Damodar and Bhairavi rivers, Rajrappa is known for its temple, striking river gorge and surrounding woodland.", image: "https://images.pexels.com/photos/35417264/pexels-photo-35417264.jpeg?auto=compress&cs=tinysrgb&w=900", imageAlt: "Water cascading over rocky cliffs" },
];

const chapters = [
  { number: "01", title: "A land shaped by time", tag: "HISTORY", text: "Long before Jharkhand became India’s 28th state in 2000, the Chotanagpur plateau was home to generations of Adivasi communities. Their relationships with jal, jungle and zameen — water, forest and land — continue to shape the region’s identity.", more: "The story is also one of courage. The Santhal Hul of 1855–56, led by Sidhu and Kanhu Murmu, challenged colonial exploitation. At the turn of the century, Birsa Munda’s Ulgulan, or ‘great tumult’, became a powerful movement for dignity, land and self-rule." },
  { number: "02", title: "Traditions that breathe", tag: "CULTURE", text: "Jharkhand is a tapestry of communities, languages and ways of life. Mundari, Santali, Ho, Kurukh, Nagpuri and many more languages carry stories, songs and memories across generations.", more: "Seasonal festivals bring people together in celebration. Sarhul welcomes spring and honours the sal tree; Karam celebrates community and the bonds of nature; Sohrai marks the harvest with gratitude, feasting and beautifully painted homes." },
  { number: "03", title: "Made by hand, held in memory", tag: "HERITAGE", text: "Here, heritage is not confined to museums. It lives in the rhythmic footwork of Chhau, the beat of the mandar drum, and the vivid stories painted on the walls of village homes.", more: "Sohrai and Khovar painting traditions of the Hazaribagh region use earth pigments, bold lines and motifs drawn from nature. Dokra metal casting and bamboo craft carry forward the skill and imagination of generations of artisans." },
];

function App() {
  const [selectedPlace, setSelectedPlace] = useState(places[0]!);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="jh-page">
      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-shade" />
        <header className="site-header">
          <a className="brand" href="#home" aria-label="Jharkhand home"><img className="brand-seal" src="https://cdn.builder.io/api/v1/image/assets%2Fcb90f5771ead4f778cb2aa6479abf5dd%2Ff9c99ba3fa274acdb7029b19f5cfa132?format=webp&width=800&height=1200" alt="" /><span>JHARKHAND<small>THE LAND OF FORESTS</small></span></a>
          <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
            <a href="#story" onClick={() => setMenuOpen(false)}>Our story</a><a href="#explore" onClick={() => setMenuOpen(false)}>Explore</a><a href="#culture" onClick={() => setMenuOpen(false)}>Culture</a><a href="#heritage" onClick={() => setMenuOpen(false)}>Heritage</a>
          </nav>
          <a className="header-cta" href="#explore">EXPLORE JHARKHAND <IconArrowUpRight size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <IconX /> : <IconMenu2 />}</button>
        </header>
        <div className="hero-content">
          <div className="eyebrow light"><span className="eyebrow-line" /> A JOURNEY INTO THE HEART OF INDIA</div>
          <h1>There’s a story<br /><em>in every forest.</em></h1>
          <p>Ancient lands. Living traditions. A thousand shades of green. Come discover Jharkhand, a place that stays with you.</p>
          <a className="hero-button" href="#story">DISCOVER OUR STORY <IconArrowRight size={17} /></a>
        </div>
        <div className="hero-bottom"><span><IconMapPin size={15} /> RANCHI, JHARKHAND</span><a href="#story">SCROLL TO EXPLORE <IconArrowDown size={15} /></a><span className="hero-index">01 <i /> 04</span></div>
        <div className="hero-side">JHARKHAND &nbsp; / &nbsp; INDIA</div>
      </section>

      <section className="intro section-wrap" id="story">
        <div className="intro-top"><div className="section-kicker"><span>✳</span> NAMASTE, JHARKHAND</div><span className="devanagari">जोहार</span></div>
        <div className="intro-grid"><h2>A little closer<br />to <em>the soul of India.</em></h2><div><p>There is a place where the forests have stories to tell, where the earth is painted with ancient art, and where every celebration begins with a song.</p><p>Welcome to Jharkhand. More than a destination, it is a feeling — rooted in nature, shaped by its people, and alive with a heritage all its own.</p><a className="text-link" href="#explore">GET TO KNOW THE LAND <IconArrowRight size={16} /></a></div></div>
        <div className="motif-line" aria-hidden="true">◇ &nbsp; △ &nbsp; ◇ &nbsp; △ &nbsp; ◇ &nbsp; △ &nbsp; ◇ &nbsp; △ &nbsp; ◇ &nbsp; △ &nbsp; ◇ &nbsp; △ &nbsp; ◇ &nbsp; △ &nbsp; ◇ &nbsp; △ &nbsp; ◇ &nbsp; △ &nbsp; ◇ &nbsp; △ &nbsp; ◇ &nbsp; △ &nbsp; ◇</div>
      </section>

      <section className="explore" id="explore"><div className="section-wrap explore-inner"><div className="explore-copy"><div className="section-kicker"><span>✳</span> A SENSE OF PLACE</div><h2>Find your way<br /><em>into the wild.</em></h2><p>From the rolling Chotanagpur plateau to sacred temple towns, every corner of Jharkhand has a story waiting to be found.</p><div className="map-instruction"><IconCompass size={21} /><span>SELECT A PLACE ON THE MAP TO EXPLORE</span></div><div className="place-detail" aria-live="polite"><img className="place-image" src={selectedPlace.image} alt={selectedPlace.imageAlt} /><span className="place-label">{selectedPlace.label}</span><h3>{selectedPlace.name} <IconArrowUpRight size={21} /></h3><p>{selectedPlace.description}</p></div></div><div className="map-area"><div className="map-heading"><span>THE LAND OF FORESTS</span><span>23.6102° N &nbsp; 85.2799° E</span></div><div className="map-container"><svg viewBox="0 0 600 420" role="img" aria-label="Map of Jharkhand showing district boundaries">{districts.map((district, i) => <path key={district.name} d={district.path} fill={i % 3 === 0 ? "#c9844c" : i % 3 === 1 ? "#d3955e" : "#dba36f"} stroke="#f4dfca" strokeWidth="1.2" />)}</svg>{places.map(place => <button type="button" key={place.name} className={`map-pin ${selectedPlace.name === place.name ? "active" : ""}`} style={{ left: `${place.x}%`, top: `${place.y}%` }} onClick={() => setSelectedPlace(place)} aria-label={`Explore ${place.name}`} aria-pressed={selectedPlace.name === place.name}><span className="pin-dot" /><span className="pin-name">{place.name}</span></button>)}</div><div className="place-choices" role="group" aria-label="Choose a destination">{places.map(place => <button type="button" key={place.name} className={selectedPlace.name === place.name ? "selected" : ""} onClick={() => setSelectedPlace(place)} aria-pressed={selectedPlace.name === place.name}>{place.name}</button>)}</div><div className="map-foot"><span>INDIA <i /> JHARKHAND</span><span>NOT TO SCALE</span></div></div></div></section>

      <section className="stories section-wrap"><div className="stories-heading"><div><div className="section-kicker"><span>✳</span> ROOTED IN HERITAGE</div><h2>Stories worth <em>telling.</em></h2></div><p>Look a little closer and discover the history, people and traditions that make this land extraordinary.</p></div><div className="story-layout"><div className="story-photo"><img src="https://images.pexels.com/photos/17777847/pexels-photo-17777847.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Waterfall cascading through a rocky landscape in Ranchi" /><div className="photo-caption"><span>THE LAND SPEAKS</span><strong>Where nature<br />and stories meet.</strong></div></div><div className="chapter-list">{chapters.map((chapter, index) => <article className="chapter" id={index === 1 ? "culture" : index === 2 ? "heritage" : "history"} key={chapter.number}><div className="chapter-top"><span>{chapter.number} / {chapter.tag}</span><IconArrowUpRight size={18} /></div><h3>{chapter.title}</h3><p>{chapter.text}</p><p>{chapter.more}</p></article>)}</div></div></section>
      <section className="closing"><div className="closing-inner"><div className="section-kicker"><span>✳</span> UNTIL WE MEET</div><h2>Come as a traveller.<br /><em>Leave with a story.</em></h2><p>There is always more to discover in the land of forests.</p><a href="#home" className="closing-link">BACK TO THE BEGINNING ↑</a></div><div className="closing-word">JHARKHAND</div></section>
      <footer><a className="footer-brand" href="#home"><img className="footer-seal" src="https://cdn.builder.io/api/v1/image/assets%2Fcb90f5771ead4f778cb2aa6479abf5dd%2Ff9c99ba3fa274acdb7029b19f5cfa132?format=webp&width=800&height=1200" alt="" /> JHARKHAND</a><span>THE LAND OF FORESTS, THE HEART OF INDIA.</span><span>MADE WITH LOVE FOR JHARKHAND</span></footer>
    </main>
  );
}

export default App;
