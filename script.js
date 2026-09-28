"use strict";

/* ---------- Movie data ----------
   To use a real poster, add a `poster: "images/name.jpg"` field to a movie.
   Without it, a colour poster is generated automatically. */
const movies = [
  { id: 1, title: "Inception", year: 2010, release: "16 July 2010", rating: 8.8, genres: ["Sci-Fi", "Action"],
    desc: "A thief who steals secrets from dreams is given one impossible job: plant an idea in a target's mind.",
    full: "Dom Cobb is a skilled thief who extracts secrets from people's minds while they dream. Offered a chance to erase his criminal past, he must instead plant an idea inside a powerful heir's subconscious, going through layers of dreams where time and gravity behave differently.",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"], colors: ["#1f3a5f", "#5c7fa8"] },
  { id: 2, title: "The Dark Knight", year: 2008, release: "18 July 2008", rating: 9.0, genres: ["Action", "Drama"],
    desc: "Batman faces the Joker, a criminal mastermind who pushes Gotham City into chaos.",
    full: "With help from Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle Gotham's organised crime. Their plan is threatened by the Joker, an anarchic criminal who forces Batman to face the limits of his own rules.",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"], colors: ["#0f1a2e", "#3a4a6b"] },
  { id: 3, title: "Interstellar", year: 2014, release: "7 November 2014", rating: 8.7, genres: ["Sci-Fi", "Drama"],
    desc: "Explorers travel through a wormhole in search of a new home for humanity.",
    full: "As Earth's crops fail, a former pilot joins a mission through a wormhole near Saturn to find a habitable planet. Every hour spent near a black hole costs years back home, and he must choose between the mission and the family he left behind.",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"], colors: ["#1d2b53", "#7e2a5c"] },
  { id: 4, title: "Mad Max: Fury Road", year: 2015, release: "15 May 2015", rating: 8.1, genres: ["Action", "Sci-Fi"],
    desc: "In a desert wasteland, a drifter and a rebel warrior race across the sands to escape a tyrant.",
    full: "Max is captured by the War Boys of the warlord Immortan Joe. When Imperator Furiosa flees with the tyrant's prized wives, Max joins the escape and the two are chased across the wasteland in a series of high-speed road battles.",
    cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult", "Hugh Keays-Byrne"], colors: ["#b4491b", "#f0a030"] },
  { id: 5, title: "Superbad", year: 2007, release: "17 August 2007", rating: 7.6, genres: ["Comedy"],
    desc: "Two best friends try to make the most of their last days of high school before college.",
    full: "Seth and Evan are about to go to different colleges. When they get a chance to buy alcohol for a party and impress their crushes, a simple plan turns into a wild night full of awkward and hilarious mishaps.",
    cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse", "Emma Stone"], colors: ["#d1495b", "#edae49"] },
  { id: 6, title: "The Hangover", year: 2009, release: "5 June 2009", rating: 7.7, genres: ["Comedy"],
    desc: "Three friends wake up after a bachelor party in Las Vegas with no memory and a missing groom.",
    full: "Days before his wedding, Doug and three friends head to Las Vegas. The morning after, there is a tiger in the bathroom, a baby in the closet and no sign of Doug. They retrace their night to find him in time for the ceremony.",
    cast: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis", "Justin Bartha"], colors: ["#2a9d8f", "#e9c46a"] },
  { id: 7, title: "The Conjuring", year: 2013, release: "19 July 2013", rating: 7.5, genres: ["Horror"],
    desc: "Paranormal investigators help a family terrorized by a dark presence in their farmhouse.",
    full: "In 1971, the Perron family moves into a secluded Rhode Island farmhouse and soon experiences disturbing events. They seek help from demonologists Ed and Lorraine Warren, who uncover the house's dark history.",
    cast: ["Vera Farmiga", "Patrick Wilson", "Lili Taylor", "Ron Livingston"], colors: ["#1c1c1c", "#6b1d1d"] },
  { id: 8, title: "Hereditary", year: 2018, release: "8 June 2018", rating: 7.3, genres: ["Horror", "Drama"],
    desc: "After a family's matriarch dies, disturbing secrets about their ancestry begin to surface.",
    full: "When Annie's secretive mother passes away, her family begins to unravel cryptic and terrifying secrets. The more they learn about their lineage, the more they try to escape a fate that seems already written.",
    cast: ["Toni Collette", "Alex Wolff", "Milly Shapiro", "Gabriel Byrne"], colors: ["#3b2a20", "#8a5a3c"] },
  { id: 9, title: "Get Out", year: 2017, release: "24 February 2017", rating: 7.8, genres: ["Horror", "Drama"],
    desc: "A young man visits his girlfriend's family and slowly discovers something is deeply wrong.",
    full: "Chris, a photographer, goes to meet his girlfriend Rose's parents at their country estate. What starts as awkward politeness turns into a disturbing discovery about the family and their neighbours.",
    cast: ["Daniel Kaluuya", "Allison Williams", "Catherine Keener", "Bradley Whitford"], colors: ["#2b2d42", "#8d99ae"] },
  { id: 10, title: "The Shawshank Redemption", year: 1994, release: "23 September 1994", rating: 9.3, genres: ["Drama"],
    desc: "A banker convicted of a crime he did not commit finds hope and friendship inside prison.",
    full: "Andy Dufresne is sentenced to life in Shawshank State Penitentiary for murders he says he did not commit. Over two decades he befriends fellow inmate Red and finds small ways to keep his dignity and hope alive.",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"], colors: ["#3d5a80", "#98c1d9"] },
  { id: 11, title: "Parasite", year: 2019, release: "30 May 2019", rating: 8.5, genres: ["Drama", "Comedy"],
    desc: "A poor family schemes its way into the lives of a wealthy household, with unexpected consequences.",
    full: "The struggling Kim family takes jobs with the wealthy Park family by hiding their relationship to each other. As their lives become entangled, a hidden secret threatens to expose everyone.",
    cast: ["Song Kang-ho", "Choi Woo-shik", "Park So-dam", "Lee Sun-kyun"], colors: ["#386641", "#a7c957"] },
  { id: 12, title: "The Notebook", year: 2004, release: "25 June 2004", rating: 7.8, genres: ["Romance", "Drama"],
    desc: "A poor young man and a wealthy young woman fall in love in 1940s South Carolina.",
    full: "An elderly man reads a love story from a notebook to a woman in a nursing home. It tells of Noah and Allie, who fall deeply in love one summer but are pulled apart by class and circumstance.",
    cast: ["Ryan Gosling", "Rachel McAdams", "James Garner", "Gena Rowlands"], colors: ["#e07a8f", "#f6bd60"] },
  { id: 13, title: "La La Land", year: 2016, release: "9 December 2016", rating: 8.0, genres: ["Romance", "Comedy"],
    desc: "A jazz pianist and an aspiring actress chase their dreams and fall in love in Los Angeles.",
    full: "Mia, an aspiring actress, and Sebastian, a jazz musician, fall in love while trying to make it in Los Angeles. As their careers take off, they must decide what their dreams are worth to them.",
    cast: ["Ryan Gosling", "Emma Stone", "John Legend", "Rosemarie DeWitt"], colors: ["#5f0f94", "#f28482"] },
  { id: 14, title: "Dune", year: 2021, release: "22 October 2021", rating: 8.0, genres: ["Sci-Fi", "Action"],
    desc: "A gifted young man travels to a dangerous desert planet to protect his family and its future.",
    full: "Paul Atreides, heir to a noble family, is sent to the desert planet Arrakis, the only source of the most valuable substance in the universe. When betrayal strikes his family, Paul must survive and join the people of the desert.",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Oscar Isaac"], colors: ["#a8642a", "#e8c07a"] }
];

const genres = ["All", "Action", "Comedy", "Horror", "Sci-Fi", "Drama", "Romance"];
const trendingIds = [3, 2, 14, 13, 10, 11];
const heroId = 3;

/* ---------- State & elements ---------- */
let activeGenre = "All";
let searchTerm = "";

const $ = (id) => document.getElementById(id);
const grid = $("movieGrid");
const trendingRow = $("trendingRow");
const emptyState = $("emptyState");
const resultCount = $("resultCount");
const modal = $("movieModal");

/* ---------- Helpers ---------- */
const trailerUrl = (m) =>
  "https://www.youtube.com/results?search_query=" + encodeURIComponent(m.title + " " + m.year + " official trailer");

function posterHTML(m, showRating) {
  const img = m.poster ? `<img src="${m.poster}" alt="Poster of ${m.title}" loading="lazy">` : "";
  const label = m.poster ? "" : `<span class="poster-title">${m.title}</span>`;
  const badge = showRating ? `<span class="rating">&#9733; ${m.rating.toFixed(1)}</span>` : "";
  return `<div class="poster" style="--c1:${m.colors[0]};--c2:${m.colors[1]}">${img}${badge}${label}</div>`;
}

function cardHTML(m) {
  return `
    <button class="card" data-id="${m.id}" aria-label="View details for ${m.title}">
      ${posterHTML(m, true)}
      <div class="card-info">
        <h3>${m.title}</h3>
        <span class="card-year">${m.year} &bull; ${m.genres.join(", ")}</span>
        <p class="card-desc">${m.desc}</p>
      </div>
    </button>`;
}

/* ---------- Rendering ---------- */
function renderHero() {
  const m = movies.find((x) => x.id === heroId);
  const hero = document.querySelector(".hero");
  hero.style.setProperty("--hero-a", m.colors[0]);
  hero.style.setProperty("--hero-b", m.colors[1]);
  $("heroTitle").textContent = m.title;
  $("heroMeta").textContent = `\u2605 ${m.rating.toFixed(1)}  |  ${m.year}  |  ${m.genres.join(", ")}`;
  $("heroDesc").textContent = m.desc;
  $("heroTrailer").href = trailerUrl(m);
  $("heroDetails").addEventListener("click", () => openModal(m.id));
}

function renderTrending() {
  trendingRow.innerHTML = trendingIds
    .map((id) => cardHTML(movies.find((m) => m.id === id)))
    .join("");
}

function renderGenres() {
  $("genreFilters").innerHTML = genres
    .map((g) => `<button class="chip${g === activeGenre ? " active" : ""}" data-genre="${g}" aria-pressed="${g === activeGenre}">${g}</button>`)
    .join("");
}

function renderGrid() {
  const term = searchTerm.trim().toLowerCase();
  const list = movies.filter((m) =>
    (activeGenre === "All" || m.genres.includes(activeGenre)) &&
    m.title.toLowerCase().includes(term)
  );
  grid.innerHTML = list.map(cardHTML).join("");
  emptyState.hidden = list.length > 0;
  resultCount.textContent = `${list.length} ${list.length === 1 ? "movie" : "movies"} found`;
}

/* ---------- Movie details modal ---------- */
function openModal(id) {
  const m = movies.find((x) => x.id === id);
  if (!m) return;
  $("modalBody").innerHTML = `
    ${posterHTML(m, false)}
    <div class="modal-text">
      <h2 id="modalTitle">${m.title}</h2>
      <div class="tags">
        <span class="tag gold">&#9733; ${m.rating.toFixed(1)}</span>
        ${m.genres.map((g) => `<span class="tag">${g}</span>`).join("")}
      </div>
      <p>${m.full}</p>
      <dl>
        <dt>Release date</dt><dd>${m.release}</dd>
        <dt>Rating</dt><dd>${m.rating.toFixed(1)} / 10</dd>
        <dt>Cast</dt><dd>${m.cast.join(", ")}</dd>
      </dl>
      <a class="btn btn-primary" href="${trailerUrl(m)}" target="_blank" rel="noopener">Watch trailer</a>
    </div>`;
  modal.showModal();
}

/* ---------- Events ---------- */
document.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) openModal(Number(card.dataset.id));
});

$("genreFilters").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  activeGenre = chip.dataset.genre;
  renderGenres();
  renderGrid();
});

$("searchInput").addEventListener("input", (e) => {
  searchTerm = e.target.value;
  renderGrid();
});

$("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  $("browse").scrollIntoView({ behavior: "smooth" });
});

$("modalClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); }); // click on backdrop

const menuToggle = $("menuToggle");
const navLinks = $("navLinks");
function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
}
menuToggle.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
navLinks.addEventListener("click", (e) => { if (e.target.tagName === "A") setMenu(false); });

/* ---------- Init ---------- */
renderHero();
renderTrending();
renderGenres();
renderGrid();
