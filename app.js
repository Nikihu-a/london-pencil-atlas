const landmarks = {
  'big-ben': {
    number: '01', name: 'Big Ben', category: 'The city’s timekeeper',
    tagline: 'A familiar chime above Westminster.',
    description: 'The great bell inside Elizabeth Tower gives Big Ben its name. The clock tower’s distinctive silhouette rises beside the Palace of Westminster, overlooking the Thames.'
  },
  'tower-bridge': {
    number: '02', name: 'Tower Bridge', category: 'The river icon',
    tagline: 'Stone towers. Blue steel. A London icon.',
    description: 'Opened in 1894, this much-loved Thames crossing pairs Gothic towers with an ingenious lifting bridge. Its silhouette is part of the city’s story.'
  },
  'british-museum': {
    number: '03', name: 'British Museum', category: 'A world of stories',
    tagline: 'A journey through human history.',
    description: 'Founded in 1753 and opened in 1759, the British Museum brings cultures and centuries together. Behind its grand classical façade, objects tell stories from across the world.'
  },
  'buckingham-palace': {
    number: '04', name: 'Buckingham Palace', category: 'A royal address',
    tagline: 'A quiet sketch of royal London.',
    description: 'Buckingham Palace became the official seat of the court in 1837, with Queen Victoria. Its broad façade and famous balcony remain enduring symbols of the monarchy.'
  },
  'london-eye': {
    number: '05', name: 'London Eye', category: 'The skyline in motion',
    tagline: 'A different perspective on the city.',
    description: 'Rising 135 metres above the South Bank, the London Eye brings a sweeping view of the capital into focus. Its open wheel forms a graceful counterpoint to the historic skyline.'
  },
  'westminster-abbey': {
    number: '06', name: 'Westminster Abbey', category: 'Centuries in stone',
    tagline: 'Gothic arches. A thousand stories.',
    description: 'Britain’s coronation church since 1066, Westminster Abbey holds centuries of ceremony and remembrance. Its Gothic stonework is a remarkable part of London’s architectural story.'
  }
};

const landmarkNotes = {
  'big-ben': {
    location: 'Westminster · North bank of the Thames', date: '1859 · The first chimes',
    history: 'Big Ben is the name of the great bell inside Elizabeth Tower, although the nickname often embraces the whole clock tower. Beside the Palace of Westminster, this Victorian landmark has become one of London’s most recognisable silhouettes.',
    look: 'Look for the tall clock faces, the intricate stonework and the slender spire above them. From across the river, the tower and the long façade of Parliament read almost like a single drawing against the sky.',
    note: 'A little pause: take in the skyline from the South Bank.'
  },
  'tower-bridge': {
    location: 'The Thames · Beside the Tower of London', date: '1894 · A new river crossing',
    history: 'Tower Bridge was built to carry road traffic while allowing ships to reach the busy docks upstream. Its two central sections lift apart, combining practical Victorian engineering with an unmistakable pair of Gothic towers.',
    look: 'Follow the blue steelwork between the stone towers, then notice the high walkways above the roadway. The historic engine rooms tell another part of the story: the machinery that once powered the bridge’s lifts.',
    note: 'A little pause: watch the changing light on the water.'
  },
  'british-museum': {
    location: 'Bloomsbury · Great Russell Street', date: '1759 · The museum opens',
    history: 'Founded in 1753, the British Museum opened its doors in 1759. Its collections bring together objects from many cultures and periods, offering different ways to consider human history through the things people have made, used and treasured.',
    look: 'The columned entrance gives way to a very different architectural scene inside. In the Great Court, a sweeping glass roof surrounds the historic Reading Room; this light-filled space opened in 2000.',
    note: 'A little pause: choose one gallery and let curiosity set the pace.'
  },
  'buckingham-palace': {
    location: 'Westminster · Facing The Mall', date: '1837 · Queen Victoria moves in',
    history: 'Buckingham Palace became the official seat of the court when Queen Victoria came to the throne in 1837. Its history connects a private house with a royal palace, and its familiar balcony has become a stage for national occasions.',
    look: 'Take in the broad, symmetrical façade, the ornamental gates and the Victoria Memorial in front of the palace. Their arrangement creates a formal composition, softened by the green spaces nearby.',
    note: 'A little pause: wander towards the trees of St James’s Park.'
  },
  'london-eye': {
    location: 'South Bank · Beside Westminster Bridge', date: '135 metres · Above the river',
    history: 'The London Eye adds a modern circle to a skyline filled with towers and spires. Rising 135 metres above the South Bank, the observation wheel offers an elevated perspective on the river and the city arranged around it.',
    look: 'Trace the fine spokes and the passenger capsules around the rim. From the riverside, its open structure frames fragments of London rather than hiding them, changing with every step along the bank.',
    note: 'A little pause: sketch the wheel as one simple circle.'
  },
  'westminster-abbey': {
    location: 'Westminster · Beside Parliament Square', date: '1066 · A coronation tradition begins',
    history: 'Westminster Abbey has been Britain’s coronation church since 1066. Its history brings together royal ceremony, worship and remembrance, while its Gothic architecture gives those stories a setting of soaring stone and carefully shaped light.',
    look: 'Notice the pointed arches and the rhythm of the stonework. Within the Abbey, memorials and monuments connect the building to generations of writers, scientists and other figures in Britain’s history.',
    note: 'A little pause: follow the lines of an arch with your eyes.'
  }
};

const buttons = [...document.querySelectorAll('[data-landmark]')];
// Reuse the transparent artwork for decorative side light and ground shadows.
for (const button of buttons) {
  const artwork = button.querySelector('.landmark-art');
  const shadow = artwork.cloneNode(false);
  shadow.className = 'landmark-shadow';
  shadow.setAttribute('aria-hidden', 'true');
  const sideLight = artwork.cloneNode(false);
  sideLight.className = 'landmark-light';
  sideLight.setAttribute('aria-hidden', 'true');
  button.prepend(shadow);
  button.insertBefore(sideLight, button.querySelector('.map-label'));
}
const story = document.querySelector('#story-content');
const releaseButton = document.querySelector('#release-selection');
const status = document.querySelector('#selection-status');
const fields = {
  number: document.querySelector('#story-number'),
  name: document.querySelector('#story-title'),
  category: document.querySelector('#story-category'),
  tagline: document.querySelector('#story-tagline'),
  description: document.querySelector('#story-description')
};

let hovered = null;
let focused = null;
let pinned = null;
let displayed = 'tower-bridge';
let storyTimer;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const detail = document.querySelector('#landmark-detail');
const detailFields = Object.fromEntries(['number', 'category', 'title', 'tagline', 'location', 'date', 'history', 'look', 'note'].map(key => [key, document.querySelector(`#detail-${key}`)]));
const landmarkOrder = Object.keys(landmarks);
const previousLandmark = document.querySelector('#previous-landmark');
const nextLandmark = document.querySelector('#next-landmark');

for (const button of buttons) {
  button.setAttribute('aria-haspopup', 'dialog');
  button.setAttribute('aria-controls', 'landmark-detail');
}

function openDetail(id) {
  const landmark = landmarks[id];
  const notes = landmarkNotes[id];
  if (!landmark || !notes) return;
  const wasOpen = detail.open;
  pinned = id;
  hovered = null;
  focused = null;
  render();
  for (const [key, element] of Object.entries(detailFields)) {
    element.textContent = key === 'number' ? `${landmark.number} / 06` : key === 'title' ? landmark.name : landmark[key] || notes[key];
  }
  const art = document.querySelector('#detail-art');
  art.src = `./assets/illustrations/${id}.png`;
  art.alt = `A coloured-pencil illustration of ${landmark.name}`;
  const index = landmarkOrder.indexOf(id);
  previousLandmark.dataset.target = landmarkOrder[(index + landmarkOrder.length - 1) % landmarkOrder.length];
  nextLandmark.dataset.target = landmarkOrder[(index + 1) % landmarkOrder.length];
  document.querySelector('#previous-name').textContent = landmarks[previousLandmark.dataset.target].name;
  document.querySelector('#next-name').textContent = landmarks[nextLandmark.dataset.target].name;
  previousLandmark.setAttribute('aria-label', `Previous landmark: ${landmarks[previousLandmark.dataset.target].name}`);
  nextLandmark.setAttribute('aria-label', `Next landmark: ${landmarks[nextLandmark.dataset.target].name}`);
  if (!detail.open) detail.showModal();
  document.body.classList.add('detail-is-open');
  detail.scrollTop = 0;
  if (wasOpen) detailFields.title.focus({preventScroll: true});
  status.textContent = `${landmark.name} story opened. Close the story to return to the map.`;
}

document.querySelector('#close-detail').addEventListener('click', () => detail.close());
detail.addEventListener('close', () => {
  document.body.classList.remove('detail-is-open');
  releaseSelection(true);
});
detail.addEventListener('click', event => {
  if (event.target !== detail) return;
  const rect = detail.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) detail.close();
});
document.querySelector('#read-story').addEventListener('click', () => openDetail(displayed));
previousLandmark.addEventListener('click', () => openDetail(previousLandmark.dataset.target));
nextLandmark.addEventListener('click', () => openDetail(nextLandmark.dataset.target));

function updateStory(id) {
  clearTimeout(storyTimer);
  if (!id || id === displayed) {
    story.classList.remove('is-changing');
    return;
  }
  story.classList.add('is-changing');
  storyTimer = setTimeout(() => {
    for (const [key, element] of Object.entries(fields)) element.textContent = landmarks[id][key];
    displayed = id;
    story.classList.remove('is-changing');
    status.textContent = `Exploring ${landmarks[id].name}. ${landmarks[id].tagline}`;
  }, reducedMotion.matches ? 0 : 120);
}

function render() {
  const active = hovered || focused || pinned;
  for (const button of buttons) {
    const id = button.dataset.landmark;
    button.classList.toggle('is-active', id === active);
    button.classList.toggle('is-pinned', id === pinned);
    button.setAttribute('aria-pressed', String(id === pinned));
  }
  releaseButton.hidden = !pinned;
  updateStory(active);
}

function releaseSelection(preserveFocus = false) {
  pinned = null;
  hovered = null;
  focused = null;
  if (!preserveFocus && buttons.includes(document.activeElement)) document.activeElement.blur();
  render();
  status.textContent = 'Selection released. Explore another landmark.';
}

for (const [index, button] of buttons.entries()) {
  const id = button.dataset.landmark;
  button.addEventListener('pointerenter', event => {
    if (event.pointerType === 'touch') return;
    hovered = id;
    render();
  });
  button.addEventListener('pointerleave', () => {
    if (hovered === id) hovered = null;
    render();
  });
  button.addEventListener('focus', () => {
    if (button.matches(':focus-visible')) {
      focused = id;
      render();
    }
  });
  button.addEventListener('blur', () => {
    if (focused === id) focused = null;
    render();
  });
  button.addEventListener('click', () => {
    openDetail(id);
  });
  button.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % buttons.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + buttons.length - 1) % buttons.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = buttons.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      hovered = null;
      focused = buttons[next].dataset.landmark;
      buttons[next].focus({preventScroll: true});
      render();
    }
  });
}

releaseButton.addEventListener('click', () => {
  const previous = buttons.find(button => button.dataset.landmark === pinned);
  releaseSelection();
  if (previous) {
    previous.focus({preventScroll: true});
    focused = previous.dataset.landmark;
    render();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !detail.open) releaseSelection();
});

const lightButton = document.querySelector('#light-toggle');
const lightLabel = document.querySelector('#light-label');
const lightStatus = document.querySelector('#light-status');
let light = 'day';
try {
  if (localStorage.getItem('london-atlas-light') === 'sunset') light = 'sunset';
} catch (error) { /* The switch also works when browser storage is unavailable. */ }

function renderLight() {
  document.documentElement.dataset.light = light;
  lightButton.setAttribute('aria-pressed', String(light === 'sunset'));
  lightButton.setAttribute('aria-label', light === 'sunset' ? 'Switch to daylight' : 'Switch to golden hour');
  lightButton.title = light === 'sunset' ? 'Bring back the morning light' : 'Let the sun set over London';
  lightLabel.textContent = light === 'sunset' ? 'Golden Hour' : 'Day';
  lightStatus.textContent = light === 'sunset' ? 'Golden hour: warm skies, soft building shadows and golden reflections on the Thames.' : 'Daylight on the London atlas.';
}
lightButton.addEventListener('click', () => {
  light = light === 'day' ? 'sunset' : 'day';
  renderLight();
  try { localStorage.setItem('london-atlas-light', light); } catch (error) { /* Keep the current session’s choice. */ }
});
renderLight();

const music = document.querySelector('#background-music');
const musicButton = document.querySelector('#music-toggle');
const musicLabel = document.querySelector('#music-label');
const musicStatus = document.querySelector('#music-status');
let musicRequested = false;
let musicAttempt = 0;
music.volume = 0.28;

function renderMusic(playing, loading = false) {
  musicButton.classList.toggle('is-playing', playing);
  musicButton.classList.toggle('is-loading', loading);
  musicButton.setAttribute('aria-pressed', String(playing));
  musicButton.setAttribute('aria-label', playing || loading ? 'Pause background music' : 'Play background music');
  musicLabel.textContent = loading ? 'Music · Loading' : playing ? 'Music · Pause' : 'Music · Play';
}

function pauseMusic() {
  musicRequested = false;
  musicAttempt++;
  music.pause();
  renderMusic(false);
  musicStatus.textContent = 'Background music is paused.';
}

musicButton.addEventListener('click', async () => {
  if (musicRequested) return pauseMusic();
  musicRequested = true;
  const attempt = ++musicAttempt;
  renderMusic(false, true);
  try {
    if (music.error) music.load();
    await music.play();
    if (attempt !== musicAttempt) return;
    renderMusic(true);
    musicStatus.textContent = 'Playing Thatched Villagers by Kevin MacLeod. Choose Pause to stop.';
  } catch (error) {
    if (attempt !== musicAttempt) return;
    musicRequested = false;
    renderMusic(false);
    musicStatus.textContent = 'Music could not start. Choose Play to try again.';
  }
});
music.addEventListener('pause', () => { if (musicRequested) pauseMusic(); });
music.addEventListener('error', () => {
  pauseMusic();
  musicStatus.textContent = 'Music is unavailable right now. Choose Play to try again.';
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    hovered = null;
    render();
    pauseMusic();
  }
});

render();
