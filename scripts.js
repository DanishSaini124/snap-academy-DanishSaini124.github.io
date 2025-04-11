//These are function helpers
function showFilters() {
  document.getElementById('debug-info').style.display = 'block';
  document.getElementById('debug-status').textContent = 'Manually showing filters...';
  
  //Checking to see if element exists
  const debugInfo = [];
  debugInfo.push(`filtersContainer found: ${!!filtersContainer}`);
  debugInfo.push(`filters array length: ${filters.length}`);
  document.getElementById('debug-status').innerHTML = debugInfo.join('<br>');
  
  //Try to display filters
  if (filtersContainer) {
      try {
          displayFilters(filters);
          document.getElementById('debug-status').innerHTML += '<br>Filters displayed successfully!';
      } catch (error) {
          document.getElementById('debug-status').innerHTML += '<br>Error displaying filters: ' + error.message;
      }
  }
}

//adding fallback mechanism
window.addEventListener('load', function() {
  setTimeout(function() {
      if (filtersContainer && filtersContainer.children.length === 0) {
          console.log("No filters displayed after 1 second, trying again...");
          displayFilters(filters);
      }
  }, 1000);
});

//Added global function to debug
window.showDebug = function() {
  document.getElementById('debug-info').style.display = 'block';
};

// Check if script loaded properly
console.log("Script loaded completely");//Snapchat Data
const filters = [
  {
      id: 1,
      name: "Dog Filter",
      category: "Face",
      releaseDate: "2015-09-15",
      description: "One of Snapchat's most iconic filters. The Dog Filter adds a dog's nose, ears, and tongue to the user's face. When the user opens their mouth, the dog's tongue appears.",
      popularity: 98,
      imageUrl: "images/dog-filter.webp",
      features: ["Face tracking", "Sound effects", "Animation triggers"],
      isFavorite: false
  },
  {
      id: 2,
      name: "Rainbow Vomit",
      category: "Face",
      releaseDate: "2015-10-21",
      description: "This popular filter adds a rainbow stream flowing from the user's mouth when their mouth is open, creating a 'vomiting rainbow' effect.",
      popularity: 95,
      imageUrl: "images/rainbow-vomit.png",
      features: ["Face tracking", "Animation triggers"],
      isFavorite: false
  },
  {
      id: 3,
      name: "Flower Crown",
      category: "Face",
      releaseDate: "2016-03-12",
      description: "Adds a crown of flowers to the user's head, with subtle skin smoothing effects. One of the most popular beauty-enhancing filters.",
      popularity: 90,
      imageUrl: "images/flower-crown.jpg",
      features: ["Face tracking", "Beauty enhancement"],
      isFavorite: false
  },
  {
      id: 4,
      name: "Dancing Hot Dog",
      category: "World",
      releaseDate: "2017-07-05",
      description: "A 3D animated hot dog character with headphones that dances around. One of Snapchat's first viral World Lenses that took the internet by storm.",
      popularity: 92,
      imageUrl: "images/dancing-hotdog.webp",
      features: ["3D animation", "World tracking", "Interactive character"],
      isFavorite: false
  },
  {
      id: 5,
      name: "Face Swap",
      category: "Interactive",
      releaseDate: "2016-02-12",
      description: "Allows users to swap faces with another person in the frame. This filter requires two faces to be detected to function properly.",
      popularity: 89,
      imageUrl: "images/face-swap.jpg",
      features: ["Multiple face tracking", "Image processing"],
      isFavorite: false
  },
  {
      id: 6,
      name: "Earthquake",
      category: "World",
      releaseDate: "2017-11-09",
      description: "Creates a shaking effect on the screen, simulating an earthquake with particle effects and sound.",
      popularity: 75,
      imageUrl: "images/Earthquake.png",
      features: ["Screen effects", "Sound effects"],
      isFavorite: false
  },
  {
      id: 7,
      name: "Time Machine",
      category: "Face",
      releaseDate: "2019-11-21",
      description: "Shows how a user might look as a child, young adult, and elderly person by adjusting facial features.",
      popularity: 87,
      imageUrl: "images/time-machine.webp",
      features: ["Age modification", "Face tracking", "Multiple modes"],
      isFavorite: false
  },
  {
      id: 8,
      name: "Cartoon Style",
      category: "Face",
      releaseDate: "2021-06-11",
      description: "Transforms the user into an animated cartoon character with expressive features and vivid colors.",
      popularity: 94,
      imageUrl: "images/cartoon-style.jpeg",
      features: ["Style transfer", "Face tracking", "Real-time rendering"],
      isFavorite: false
  },
  {
      id: 9,
      name: "Voice Changer",
      category: "Interactive",
      releaseDate: "2018-05-03",
      description: "Modifies the user's voice to sound like various characters or effects, such as a robot, alien, or chipmunk.",
      popularity: 82,
      imageUrl: "images/voice-changer.jpg",
      features: ["Audio processing", "Multiple voice modes"],
      isFavorite: false
  },
  {
      id: 10,
      name: "Super Bowl LVI",
      category: "Special",
      releaseDate: "2022-02-08",
      description: "Released for Super Bowl LVI, featuring team colors and football-themed animations",
      popularity: 78,
      imageUrl: "images/Super-Bowl.webp",
      features: ["Team selection", "Special event", "Face paint effect"],
      isFavorite: false
  },
  {
      id: 11,
      name: "Baby Face",
      category: "Face",
      releaseDate: "2019-05-16",
      description: "Transforms the user's face to look like a baby with bigger eyes, rounder cheeks, and smoother skin.",
      popularity: 85,
      imageUrl: "images/baby-face.png",
      features: ["Face transformation", "Skin smoothing"],
      isFavorite: false
  },
  {
      id: 12,
      name: "AR Skydiving",
      category: "World",
      releaseDate: "2020-07-23",
      description: "Creates an augmented reality experience where users appear to be skydiving with wind effects and clouds.",
      popularity: 79,
      imageUrl: "images/sky-diving.jpeg",
      features: ["Body tracking", "Environment effects", "Sound integration"],
      isFavorite: false
  },
  {
      id: 13,
      name: "Gold Bling",
      category: "Face",
      releaseDate: "2017-12-05",
      description: "Adds digital gold chains, rings, and grills to the user with a shiny gold effect.",
      popularity: 72,
      imageUrl: "images/gold-bling.webp",
      features: ["Accessory addition", "Reflective surfaces"],
      isFavorite: false
  },
  {
      id: 14,
      name: "Holiday Lights",
      category: "Special",
      releaseDate: "2021-12-01",
      description: "Seasonal filter that adds festive holiday lights and decorations around the user's face.",
      popularity: 80,
      imageUrl: "images/holiday-face.jpeg",
      features: ["Holiday theme", "Light effects", "Seasonal availability"],
      isFavorite: false
  },
  {
      id: 15,
      name: "Pride Rainbow",
      category: "Special",
      releaseDate: "2022-06-01",
      description: "Celebrates Pride Month with rainbow effects, colorful particles, and pride flag colors.",
      popularity: 83,
      imageUrl: "images/pride-theme.jpeg",
      features: ["Pride theme", "Color effects", "Particle system"],
      isFavorite: false
  },
  {
      id: 16,
      name: "Zombie Transformation",
      category: "Face",
      releaseDate: "2018-10-15",
      description: "Halloween-themed filter that transforms users into zombies with decaying skin, dark eyes, and blood effects.",
      popularity: 86,
      imageUrl: "images/zombie-transformation.jpeg",
      features: ["Halloween theme", "Transformation", "Sound effects"],
      isFavorite: false
  },
  {
      id: 17,
      name: "Dance Partner",
      category: "World",
      releaseDate: "2020-03-28",
      description: "Adds a virtual dance partner that follows the user's movements and dances along with them.",
      popularity: 84,
      imageUrl: "images/dance-partner.jpg",
      features: ["Body tracking", "Character animation", "Interactive"],
      isFavorite: false
  },
  {
      id: 18,
      name: "Birthday Party",
      category: "Special",
      releaseDate: "2016-08-17",
      description: "Celebration filter with confetti, cake, and birthday decorations that appear when a special gesture is made.",
      popularity: 77,
      imageUrl: "images/bday-party.jpeg",
      features: ["Celebration theme", "Gesture triggers", "Particle effects"],
      isFavorite: false
  },
  {
      id: 19,
      name: "Weather Effects",
      category: "World",
      releaseDate: "2019-01-14",
      description: "Adds realistic weather effects like rain, snow, or sunshine to the user's surroundings based on their choice.",
      popularity: 76,
      imageUrl: "images/weather-effects.jpg",
      features: ["Weather simulation", "Environment effects", "Multiple modes"],
      isFavorite: false
  },
  {
      id: 20,
      name: "Anime Style",
      category: "Face",
      releaseDate: "2022-01-25",
      description: "Transforms the user into an anime-style character with characteristic large eyes and stylized features.",
      popularity: 91,
      imageUrl: "images/anime-style.webp",
      features: ["Style transfer", "Artistic rendering", "Animation effects"],
      isFavorite: false
  },
  {
      id: 21,
      name: "Voice Activated Bubbles",
      category: "Interactive",
      releaseDate: "2020-05-12",
      description: "Creates colorful bubbles that flow from the user's mouth in response to sound, with size based on volume.",
      popularity: 81,
      imageUrl: "images/bubbles.jpeg",
      features: ["Audio reactive", "Particle generation", "Color dynamics"],
      isFavorite: false
  },
  {
      id: 22,
      name: "Galaxy Crown",
      category: "Trending",
      releaseDate: "2023-03-15",
      description: "Places a spinning galaxy above the user's head with twinkling stars and cosmic dust that responds to movement.",
      popularity: 93,
      imageUrl: "images/crown.jpeg",
      features: ["Particle effects", "3D animation", "Motion tracking"],
      isFavorite: false
  },
  {
      id: 23,
      name: "Neon Outline",
      category: "Trending",
      releaseDate: "2023-01-05",
      description: "Creates a glowing neon outline around the user and objects in their environment with customizable colors.",
      popularity: 88,
      imageUrl: "images/neon.jpeg",
      features: ["Edge detection", "Color customization", "Glow effects"],
      isFavorite: false
  },
  {
      id: 24,
      name: "Digital Pet",
      category: "Interactive",
      releaseDate: "2022-09-20",
      description: "Adds a virtual pet that follows the user around and responds to taps, gestures, and voice commands.",
      popularity: 87,
      imageUrl: "images/digital-pet.jpg",
      features: ["Interactive character", "AI behavior", "Sound recognition"],
      isFavorite: false
  }
];

// DOM Elements, this adds debug logs
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM loaded");
});

function getElement(id) {
  const element = document.getElementById(id);
  if (!element) {
      console.error(`Element with ID '${id}' not found!`);
  }
  return element;
}

//Grabs all the required DOM elements
const filtersContainer = getElement('filters-container');
const searchInput = getElement('search-input');
const searchButton = getElement('search-button');
const categoryFilter = getElement('category-filter');
const sortOptions = getElement('sort-options');
const gridViewButton = getElement('grid-view');
const listViewButton = getElement('list-view');
const modal = getElement('filter-details-modal');
const modalContent = getElement('modal-content-container');
const closeButton = document.querySelector('.close-button');

//Current 
let currentFilters = [...filters];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

//Initialize
document.addEventListener('DOMContentLoaded', () => {
  //Loads the favorite filters to a local storage
  loadFavorites();
  
  //Initial Display
  displayFilters(currentFilters);
  console.log("Displaying filters:", currentFilters.length);
  
  //Event Displays
  setupEventListeners();
});

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(() => {
      displayFilters(currentFilters);
      console.log("Displaying filters (immediate):", currentFilters.length);
  }, 1);
}

//Loads the favorite filters
function loadFavorites() {
  if (favorites.length > 0) {
      filters.forEach(filter => {
          if (favorites.includes(filter.id)) {
              filter.isFavorite = true;
          }
      });
  }
}

//Saves favorite filters to local storage
function saveFavorites() {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

//Setting up listeners event
function setupEventListeners() {
  //Search
  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
          performSearch();
      }
  });
  
  //Category filter
  categoryFilter.addEventListener('change', applyFilters);
  
  //Sort options
  sortOptions.addEventListener('change', applyFilters);
  
  //Viewing options
  gridViewButton.addEventListener('click', () => {
      setActiveView('grid');
  });
  
  listViewButton.addEventListener('click', () => {
      setActiveView('list');
  });
  
  //close
  closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
  });
  
  window.addEventListener('click', (e) => {
      if (e.target === modal) {
          modal.style.display = 'none';
      }
  });
}

//Displays the filter
function displayFilters(filtersToDisplay) {
  //Checking to see if container exists
  if (!filtersContainer) {
      console.error("Filters container element not found!");
      return;
  }
  
  console.log("Display filters called with", filtersToDisplay.length, "filters");
  filtersContainer.innerHTML = '';
  
  if (filtersToDisplay.length === 0) {
      filtersContainer.innerHTML = '<div class="no-results">No filters found. Try adjusting your search or filters.</div>';
      return;
  }
  
  filtersToDisplay.forEach(filter => {
      const filterCard = document.createElement('div');
      filterCard.className = 'filter-card';
      filterCard.setAttribute('data-id', filter.id);
      
      //Formats date
      const releaseDate = new Date(filter.releaseDate);
      const formattedDate = releaseDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
      });
      
      filterCard.innerHTML = `
          <img src="${filter.imageUrl}" alt="${filter.name}" class="filter-image" onerror="this.src='https://placehold.co/600x400?text=Snapchat+Filter'">
          <div class="filter-info">
              <h3 class="filter-name">${filter.name}</h3>
              <span class="filter-category">${filter.category}</span>
              <p class="filter-date">Released: ${formattedDate}</p>
              <p class="filter-popularity">Popularity: ${filter.popularity}%</p>
              <button class="favorite-button ${filter.isFavorite ? 'active' : ''}" data-id="${filter.id}">
                  <i class="fas fa-heart"></i>
              </button>
          </div>
      `;
      
      //show filter details
      filterCard.addEventListener('click', (e) => {
          if (!e.target.classList.contains('favorite-button') && !e.target.parentNode.classList.contains('favorite-button')) {
              showFilterDetails(filter);
          }
      });
      
      filtersContainer.appendChild(filterCard);
  });
  
  //add event listerners to users favorite 
  document.querySelectorAll('.favorite-button').forEach(button => {
      button.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleFavorite(parseInt(button.getAttribute('data-id')));
      });
  });
}
function showFilterDetails(filter) {
  const releaseDate = new Date(filter.releaseDate);
  const formattedDate = releaseDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });
  
  modalContent.innerHTML = `
      <div class="modal-header">
          <h2>${filter.name}</h2>
          <span class="filter-category">${filter.category}</span>
          <button class="favorite-button ${filter.isFavorite ? 'active' : ''}" data-id="${filter.id}">
              <i class="fas fa-heart"></i>
          </button>
      </div>
      <div class="modal-body">
          <img src="${filter.imageUrl}" alt="${filter.name}" class="modal-image">
          <div class="modal-info">
              <p class="release-date"><strong>Released:</strong> ${formattedDate}</p>
              <p class="popularity"><strong>Popularity:</strong> ${filter.popularity}%</p>
              <p class="description"><strong>Description:</strong> ${filter.description}</p>
              <div class="features">
                  <strong>Features:</strong>
                  <ul>
                      ${filter.features.map(feature => `<li>${feature}</li>`).join('')}
                  </ul>
              </div>
          </div>
      </div>
  `;
  const favoriteButton = modalContent.querySelector('.favorite-button');
  favoriteButton.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(parseInt(favoriteButton.getAttribute('data-id')));
  });
  
  modal.style.display = 'block';
}

// Toggles users favorite status
function toggleFavorite(filterId) {
  //Updates the new filter arrays
  const filter = filters.find(f => f.id === filterId);
  filter.isFavorite = !filter.isFavorite;
  
  //Updates user favorite array
  if (filter.isFavorite) {
      if (!favorites.includes(filterId)) {
          favorites.push(filterId);
      }
  } else {
      const index = favorites.indexOf(filterId);
      if (index !== -1) {
          favorites.splice(index, 1);
      }
  }
  
  //UI updates
  const filterButtons = document.querySelectorAll(`.favorite-button[data-id="${filterId}"]`);
  filterButtons.forEach(button => {
      if (filter.isFavorite) {
          button.classList.add('active');
      } else {
          button.classList.remove('active');
      }
  });
  
  //Save to local storage
  saveFavorites();
}
function setActiveView(viewType) {
  if (viewType === 'grid') {
      filtersContainer.className = 'grid-view';
      gridViewButton.classList.add('active');
      listViewButton.classList.remove('active');
  } else {
      filtersContainer.className = 'list-view';
      listViewButton.classList.add('active');
      gridViewButton.classList.remove('active');
  }
  
  // Re-display with current filters to apply the new view
  applyFilters();
}

//This is search functionality
function performSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  
  if (searchTerm === '') {
      currentFilters = [...filters];
  } else {
      currentFilters = filters.filter(filter => 
          filter.name.toLowerCase().includes(searchTerm) || 
          filter.description.toLowerCase().includes(searchTerm) || 
          filter.category.toLowerCase().includes(searchTerm)
      );
  }
  
  applyFilters();
}

//Applies the filter and sorting
function applyFilters() {
  let filteredResults = [...currentFilters];
  const selectedCategory = categoryFilter.value;
  if (selectedCategory !== 'all') {
      filteredResults = filteredResults.filter(filter => filter.category === selectedCategory);
  }
  const sortBy = sortOptions.value;
  switch(sortBy) {
      case 'newest':
          filteredResults.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
          break;
      case 'oldest':
          filteredResults.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
          break;
      case 'popularity':
          filteredResults.sort((a, b) => b.popularity - a.popularity);
          break;
      case 'name':
          filteredResults.sort((a, b) => a.name.localeCompare(b.name));
          break;
  }
  
  //Displays the result
  displayFilters(filteredResults);
}