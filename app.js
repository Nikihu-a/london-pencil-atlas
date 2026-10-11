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

const buttons = [...document.querySelectorAll('[data-landmark]')];
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

function releaseSelection() {
  pinned = null;
  hovered = null;
  focused = null;
  if (buttons.includes(document.activeElement)) document.activeElement.blur();
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
    pinned = pinned === id ? null : id;
    render();
    status.textContent = pinned ? `${landmarks[id].name} selected. Click again or press Escape to release.` : 'Selection released.';
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
  if (event.key === 'Escape') releaseSelection();
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    hovered = null;
    render();
  }
});

render();
