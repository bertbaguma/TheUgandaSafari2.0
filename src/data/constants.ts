import { Destination, Consultant, Review, Itinerary, Lodge, FlightOperator, FlightLegCost } from './types';

export const DESTINATIONS: Destination[] = [
  { 
    id: 'bwindi', 
    name: 'Bwindi Impenetrable National Park', 
    shortCode: 'BINP',
    hint: 'Gorillas, Trekking',
    description: "Step into Bwindi’s misty rainforest for life-changing gorilla trekking in Uganda, where ancient trees shelter the world’s rarest mountain gorillas. Every trek reveals deep silence, earthy scents, and a soul-stirring bond with nature. Stay at Nkuringo Gorilla Lodge*, an eco-luxury base leading conservation and community-powered tourism.",
    imageUrl: 'https://picsum.photos/seed/bwindi/800/600',
    parkFee: 40,
    flyInAirstrip: true,
    keywords: ['mountain gorillas', 'gorilla trekking', 'Buhoma', 'Nkuringo', 'Ruhija', 'Rushaga', 'Batwa pygmies', 'birding', 'impenetrable forest', 'UNESCO World Heritage site', 'primates', 'gorillas', 'trekking', 'gorilla tracking', 'apes', 'rainforest', 'misty', 'giants', 'mountain gorilla', 'gorilla', 'forest'],
    activities: [
      { id: 'binp-gorilla-tracking', name: 'Gorilla Tracking', durationTag: 'All-day', description: 'An unforgettable journey to see mountain gorillas in their natural habitat.', price: 800, unit: 'per person', includesParkEntryFee: true, requiresVehicle: true, isFullDay: true, permitProcessingFee: 30 },
      { id: 'binp-gorilla-habituation', name: 'Gorilla Habituation Experience', durationTag: 'All-day', description: 'Spend more time with a gorilla family that is being habituated.', price: 1500, unit: 'per person', includesParkEntryFee: true, requiresVehicle: true, isFullDay: true, permitProcessingFee: 30 },
      { id: 'binp-bird-watching', name: 'Bird Watching & Nature Walk', durationTag: 'Morning', description: 'Explore the diverse flora and fauna of the ancient rainforest.', price: 40, unit: 'per person', includesParkEntryFee: false, requiresVehicle: false },
      { id: 'binp-batwa-experience', name: 'Batwa Forest Experience', durationTag: 'Afternoon', description: 'Visit the indigenous Batwa community and learn about their traditional forest life.', price: 40, unit: 'per person', includesParkEntryFee: false, requiresVehicle: false },
      { id: 'binp-long-walk', name: 'Long Walk (Buhoma-Nkuringo)', durationTag: 'All-day', description: 'A scenic guided walk between the Buhoma and Nkuringo sectors of the park.', price: 60, unit: 'per person', includesParkEntryFee: false, requiresVehicle: false },
    ]
  },
  { 
    id: 'queen-elizabeth', 
    name: 'Queen Elizabeth National Park', 
    shortCode: 'QENP',
    hint: 'Safari, Lions, Boat Cruise',
    description: "Uganda's most popular park, boasting diverse ecosystems from savannah to forests and wetlands.",
    imageUrl: 'https://picsum.photos/seed/qenp/800/600',
    parkFee: 40,
    flyInAirstrip: true,
    keywords: ['tree-climbing lions', 'Ishasha', 'Kazinga Channel', 'boat cruise', 'safari', 'elephants', 'buffalo', 'hippo', 'Kyambura Gorge', 'chimpanzees', 'Mweya Peninsula', 'game drive'],
    activities: [
      { id: 'qenp-game-drive', name: 'Guided Game Drive', description: 'Explore the Kasenyi plains, famous for lions, elephants, and vast herds of Uganda Kob.', price: 25, unit: 'per guide', includesParkEntryFee: false, requiresVehicle: true },
      { id: 'qenp-launch-trip', name: 'Kazinga Channel Launch Trip', description: 'A boat safari with incredible sightings of hippos, crocodiles, buffalo, and diverse birdlife.', price: 30, unit: 'per person', includesParkEntryFee: false, requiresVehicle: true },
      { id: 'qenp-lion-tracking', name: 'Lion Tracking Experience', description: 'Join researchers to track and learn about the park\'s famous tree-climbing lions.', price: 200, unit: 'per person', includesParkEntryFee: true, requiresVehicle: true, permitProcessingFee: 30 },
      { id: 'qenp-chimp-tracking', name: 'Chimp Tracking (Kyambura Gorge)', description: 'Descend into the "Valley of Apes" to track a troop of habituated chimpanzees.', price: 100, unit: 'per person', includesParkEntryFee: true, requiresVehicle: true, permitProcessingFee: 30 },
      { id: 'qenp-mongoose-tracking', name: 'Mongoose Tracking', description: 'An experiential tourism activity on the Mweya Peninsula.', price: 30, unit: 'per person', includesParkEntryFee: true, requiresVehicle: true, permitProcessingFee: 30 },
    ]
  },
  { 
    id: 'kibale', 
    name: 'Kibale Forest National Park', 
    shortCode: 'KNP',
    hint: 'Chimpanzees, Primates',
    description: 'Known as the "Primate Capital of the World," with 13 species of primates.',
    imageUrl: 'https://picsum.photos/seed/kibale/800/600',
    parkFee: 40,
    flyInAirstrip: true,
    keywords: ['chimpanzee tracking', 'chimp habituation', 'primate capital', 'Bigodi Wetland Sanctuary', 'monkeys', 'red colobus', "L'Hoest's monkey", 'forest walk', 'chimps'],
    activities: [
      { id: 'knp-chimp-tracking', name: 'Chimpanzee Tracking', description: 'An unforgettable trek to find and observe our closest living relatives.', price: 250, unit: 'per person', includesParkEntryFee: true, requiresVehicle: true, permitProcessingFee: 30 },
      { id: 'knp-chimp-habituation', name: 'Chimpanzee Habituation (Full Day)', description: 'Spend a full day with researchers and a chimpanzee troop undergoing habituation.', price: 300, unit: 'per person', includesParkEntryFee: true, requiresVehicle: true, isFullDay: true, permitProcessingFee: 30 },
      { id: 'knp-children-walk', name: 'Guided Short Walk for Children', description: 'A safe and educational nature walk for young explorers.', price: 5, unit: 'per person', includesParkEntryFee: false, requiresVehicle: false },
    ]
  },
  { 
    id: 'murchison-falls', 
    name: 'Murchison Falls National Park', 
    shortCode: 'MFNP',
    hint: 'Waterfall, Game Drives',
    description: "Famous for its powerful waterfall where the Nile River forces its way through a narrow gorge.",
    imageUrl: 'https://picsum.photos/seed/murchison/800/600',
    parkFee: 45,
    flyInAirstrip: true,
    keywords: ['Nile river', 'boat cruise', 'top of the falls hike', "Rothschild's giraffe", 'game drive', 'delta', 'shoebill stork', 'Paraa', 'waterfall'],
    activities: [
      { id: 'mfnp-launch-trip', name: 'Launch Trip to Falls Bottom', description: 'A boat cruise on the Nile to the base of the spectacular Murchison Falls.', price: 30, unit: 'per person', includesParkEntryFee: false, requiresVehicle: true },
      { id: 'mfnp-game-drive', name: 'Guided Game Drive', description: 'Search for lions, giraffes, elephants, and leopards on the northern bank.', price: 25, unit: 'per guide', includesParkEntryFee: false, requiresVehicle: true },
      { id: 'mfnp-hike-top-falls', name: 'Hike to Top of Falls', description: 'A rewarding hike to see the powerful waterfall from above.', price: 15, unit: 'per person', includesParkEntryFee: false, requiresVehicle: true },
      { id: 'mfnp-night-drive', name: 'Night Game Drive', description: 'Discover the park\'s nocturnal animals with a spotlight.', price: 40, unit: 'per person', includesParkEntryFee: false, requiresVehicle: true },
      { id: 'mfnp-bird-watching', name: 'Bird Watching', description: 'A guided walk to spot some of the 451 bird species in the park.', price: 25, unit: 'per person', includesParkEntryFee: false, requiresVehicle: false },
    ]
  },
  { id: 'lake-mburo', name: 'Lake Mburo National Park', shortCode: 'LMNP', parkFee: 40, activities: [], description: 'Known for zebras, impalas, and unique walking and horseback safaris.', imageUrl: 'https://picsum.photos/seed/mburo/800/600', flyInAirstrip: true, keywords: ['zebras', 'giraffes', 'impala', 'walking safari', 'horseback riding safari', 'night game drive', 'Ankole cattle'] },
  { id: 'mgahinga', name: 'Mgahinga Gorilla National Park', shortCode: 'MGNP', parkFee: 40, activities: [], description: 'Where silver meets gold: track gorillas and golden monkeys in the Virunga volcanoes.', imageUrl: 'https://picsum.photos/seed/mgahinga/800/600', flyInAirstrip: true, keywords: ['mountain gorillas', 'golden monkey tracking', 'Virunga volcanoes', 'Mount Sabinyo', 'Mount Gahinga', 'Mount Muhabura', 'Batwa trail', 'three volcanoes'] },
  { id: 'kidepo-valley', name: 'Kidepo Valley National Park', shortCode: 'KVNP', parkFee: 40, activities: [], description: 'A remote, rugged wilderness in northern Uganda, home to ostriches and cheetahs.', imageUrl: 'https://picsum.photos/seed/kidepo/800/600', flyInAirstrip: true, keywords: ['remote wilderness', 'ostriches', 'cheetahs', 'Narus Valley', 'Apoka', 'Karamojong people', 'rugged savannah', 'big game'] },
  { id: 'jinja', name: 'Jinja', parkFee: 0, activities: [], description: 'The adventure capital of East Africa, located at the source of the Nile River.', imageUrl: 'https://picsum.photos/seed/jinja/800/600', keywords: ['source of the Nile', 'white-water rafting', 'kayaking', 'bungee jumping', 'Owen Falls Dam', 'adventure capital', 'quad biking'] },
  { id: 'sipi-falls', name: 'Sipi Falls', parkFee: 0, activities: [], description: 'A series of three stunning waterfalls on the edge of Mount Elgon National Park.', imageUrl: 'https://picsum.photos/seed/sipi/800/600', keywords: ['Mount Elgon', 'hiking', 'waterfalls', 'abseiling', 'coffee tours', 'beautiful scenery', 'Kapchorwa'] },
  { id: 'semuliki', name: 'Semuliki National Park', shortCode: 'SNP', parkFee: 35, activities: [], description: "Experience the Sempaya hot springs and unique birdlife from the Ituri Forest.", imageUrl: 'https://picsum.photos/seed/semuliki/800/600', flyInAirstrip: true, keywords: ['Sempaya hot springs', 'bird watching', 'Ituri forest', 'shoebill stork', 'Congo basin biome', 'primates'] },
  { id: 'ziwa-rhino', name: 'Ziwa Rhino Sanctuary', parkFee: 20, activities: [], description: 'The only place in Uganda to track wild southern white rhinos on foot.', imageUrl: 'https://picsum.photos/seed/ziwa/800/600', keywords: ['rhino tracking', 'white rhinos', 'conservation', 'Nakasongola', 'breeding program', 'rhinos'] },
  { id: 'kampala', name: 'Kampala', parkFee: 0, activities: [], description: "Uganda's vibrant capital city, offering rich cultural and historical experiences.", imageUrl: 'https://picsum.photos/seed/kampala/800/600', keywords: ['capital city', 'boda boda tours', 'Gaddafi National Mosque', 'Kasubi Tombs', 'Namugongo Martyrs Shrine', 'craft markets', 'nightlife'] },
  { id: 'entebbe', name: 'Entebbe', parkFee: 0, activities: [], description: 'A relaxed town on Lake Victoria, home to the international airport and wildlife sanctuaries.', imageUrl: 'https://picsum.photos/seed/entebbe/800/600', flyInAirstrip: true, keywords: ['EBB', 'airport', 'Lake Victoria', 'UWEC', 'Uganda Wildlife Education Centre', 'Botanical Gardens', 'Ngamba Island Chimpanzee Sanctuary'] },
];


// Lodges data with Room details and seasonal pricing
export const LODGES: Lodge[] = [
  // Bwindi
  { 
    id: 'bwindi-nkuringo', name: 'Nkuringo Gorilla Lodge', destinationId: 'bwindi', isDefault: true,
    imageUrl: 'https://picsum.photos/seed/nkuringo-lodge/800/600',
    keywords: ['luxury', 'gorilla trekking', 'Nkuringo sector', 'Bwindi lodge', 'impenetrable forest', 'views', 'high-end', 'family friendly'],
    features: ['Forest Views', 'Mountain Views', 'Local Family-Owned', 'Close to Trekking', 'Sustainable'],
    rooms: [
        { id: 'nk-cottage', name: 'Forest Cottage', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 526, lowSeasonPriceDouble: 405, highSeasonPriceSingle: 745, highSeasonPriceDouble: 575 },
        { id: 'nk-suite', name: 'Forest Suite', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 910, lowSeasonPriceDouble: 700, highSeasonPriceSingle: 1215, highSeasonPriceDouble: 935 },
        { id: 'nk-villa', name: '2-Bedroom Villa', maxOccupancy: 4, pricingModel: 'perNight', lowSeasonPricePerNight: 1365, highSeasonPricePerNight: 1950 },
    ]
  },
  { 
    id: 'bwindi-clouds', name: 'Clouds Mountain Gorilla Lodge', destinationId: 'bwindi', isDefault: false,
    imageUrl: 'https://picsum.photos/seed/clouds-lodge/800/600',
    keywords: ['ultra-luxury', 'gorilla tracking', 'Nkuringo', 'exclusive', 'butler service', 'community-owned', 'honeymoon'],
    features: ['Ultra-Luxury', 'Personal Butler Service', 'Community-Owned', 'Fireplace in Room'],
    rooms: [
        { id: 'clouds-cottage', name: 'Standard Cottage', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 800, lowSeasonPriceDouble: 600, highSeasonPriceSingle: 1000, highSeasonPriceDouble: 750 },
        { id: 'clouds-family', name: 'Family Cottage', maxOccupancy: 5, pricingModel: 'perNight', lowSeasonPricePerNight: 2000, highSeasonPricePerNight: 2500 },
    ]
  },
   // Queen Elizabeth
  { 
    id: 'qe-katara', name: 'Katara Lodge', destinationId: 'queen-elizabeth', isDefault: true,
    imageUrl: 'https://picsum.photos/seed/katara-lodge/800/600',
    keywords: ['mid-range', 'views', 'eco-lodge', 'QENP', 'Kazinga Channel', 'thatched roof', 'swimming pool'],
    features: ['Valley Views', 'Eco-Lodge', 'Swimming Pool', 'Private Balcony'],
    rooms: [
        { id: 'katara-banda', name: 'Thatched Banda', maxOccupancy: 3, pricingModel: 'perPerson', lowSeasonPriceSingle: 250, lowSeasonPriceDouble: 180, highSeasonPriceSingle: 320, highSeasonPriceDouble: 220 },
    ]
  },
  { 
    id: 'qe-marafiki', name: 'Marafiki Safari Lodge', destinationId: 'queen-elizabeth', isDefault: false,
    imageUrl: 'https://picsum.photos/seed/marafiki-lodge/800/600',
    keywords: ['budget', 'mid-range', 'safari tents', 'cabins', 'Lake George view', 'Queen Elizabeth lodge'],
    features: ['Lake Views', 'Safari Tents', 'Great Value', 'Restaurant & Bar'],
    rooms: [
        { id: 'marafiki-cabin', name: 'Wooden Cabin', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 280, lowSeasonPriceDouble: 200, highSeasonPriceSingle: 350, highSeasonPriceDouble: 250 },
        { id: 'marafiki-tent', name: 'Safari Tent', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 200, lowSeasonPriceDouble: 150, highSeasonPriceSingle: 250, highSeasonPriceDouble: 180 },
    ]
  },
  // Kibale
  { 
    id: 'kibale-mirima', name: 'Mirima Kibale Lodge', destinationId: 'kibale', isDefault: true,
    imageUrl: 'https://picsum.photos/seed/mirima-lodge/800/600',
    keywords: ['budget', 'chimpanzee tracking', 'Kibale Forest', 'eco-friendly', 'value'],
    rooms: [
      { id: 'mirima-std', name: 'Standard Room', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 180, lowSeasonPriceDouble: 130, highSeasonPriceSingle: 220, highSeasonPriceDouble: 160 },
    ]
  },
  { 
    id: 'kibale-primate', name: 'Primate Lodge Kibale', destinationId: 'kibale', isDefault: false,
    imageUrl: 'https://picsum.photos/seed/primate-lodge/800/600',
    keywords: ['luxury', 'inside the park', 'chimps', 'forest cottages', 'safari tents', 'Kibale lodge'],
    features: ['Inside the National Park', 'Forest Cottages', 'Close to Chimp Trekking Start'],
    rooms: [
      { id: 'primate-cottage', name: 'Forest Cottage', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 350, lowSeasonPriceDouble: 280, highSeasonPriceSingle: 420, highSeasonPriceDouble: 330 },
      { id: 'primate-tent', name: 'Luxury Safari Tent', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 450, lowSeasonPriceDouble: 350, highSeasonPriceSingle: 550, highSeasonPriceDouble: 420 },
    ]
  },
  // Murchison Falls
  { 
    id: 'murchison-nile', name: 'Nile Safari Lodge', destinationId: 'murchison-falls', isDefault: true,
    imageUrl: 'https://picsum.photos/seed/nile-lodge/800/600',
    keywords: ['luxury', 'Nile river', 'Murchison Falls lodge', 'exclusive', 'swimming pool', 'high-end'],
    features: ['Direct River Nile Access', 'Luxury Bandas', 'Swimming Pool', 'Exclusive Feel'],
    rooms: [
      { id: 'nile-banda', name: 'Deluxe Banda', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 500, lowSeasonPriceDouble: 400, highSeasonPriceSingle: 650, highSeasonPriceDouble: 500 },
      { id: 'nile-exclusive', name: 'Exclusive Banda', maxOccupancy: 3, pricingModel: 'perPerson', lowSeasonPriceSingle: 650, lowSeasonPriceDouble: 520, highSeasonPriceSingle: 800, highSeasonPriceDouble: 650 },
    ]
  },
  { 
    id: 'murchison-paraa', name: 'Paraa Safari Lodge', destinationId: 'murchison-falls', isDefault: false,
    imageUrl: 'https://picsum.photos/seed/paraa-lodge/800/600',
    keywords: ['large lodge', 'mid-range', 'Paraa', 'Nile river', 'family friendly', 'classic safari'],
    rooms: [
      { id: 'paraa-std', name: 'Standard Room', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 300, lowSeasonPriceDouble: 240, highSeasonPriceSingle: 380, highSeasonPriceDouble: 290 },
      { id: 'paraa-suite', name: 'Suite', maxOccupancy: 4, pricingModel: 'perNight', lowSeasonPricePerNight: 800, highSeasonPricePerNight: 1000 },
    ]
  },
  { id: 'qe-kasenyi', name: 'Kasenyi Safari Lodge', destinationId: 'queen-elizabeth', isDefault: false, rooms: [ { id: 'kasenyi-std', name: 'Standard Cottage', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 300, lowSeasonPriceDouble: 220, highSeasonPriceSingle: 380, highSeasonPriceDouble: 280 } ], imageUrl: 'https://picsum.photos/seed/kasenyi-lodge/800/600', keywords: ['mid-range', 'Kasenyi plains', 'lion tracking', 'QENP lodge'] },
  { id: 'qe-meya', name: 'Meya Safari Lodge', destinationId: 'queen-elizabeth', isDefault: false, rooms: [ { id: 'meya-deluxe', name: 'Deluxe Room', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 450, lowSeasonPriceDouble: 350, highSeasonPriceSingle: 550, highSeasonPriceDouble: 420 } ], imageUrl: 'https://picsum.photos/seed/meya-lodge/800/600', keywords: ['luxury', 'Kichwamba escarpment', 'views', 'Queen Elizabeth lodge'] },
  { id: 'qe-elephant-plains', name: 'Elephant Plains Lodge', destinationId: 'queen-elizabeth', isDefault: false, rooms: [ { id: 'eplains-cottage', name: 'Private Cottage', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 500, lowSeasonPriceDouble: 400, highSeasonPriceSingle: 620, highSeasonPriceDouble: 480 } ], imageUrl: 'https://picsum.photos/seed/e-plains-lodge/800/600', keywords: ['luxury', 'eco-lodge', 'views', 'infinity pool', 'QENP lodge'] },
  { id: 'qe-kyambura', name: 'Kyambura Gorge Lodge', destinationId: 'queen-elizabeth', isDefault: false, rooms: [ { id: 'kyambura-banda', name: 'Banda', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 600, lowSeasonPriceDouble: 450, highSeasonPriceSingle: 750, highSeasonPriceDouble: 550 } ], imageUrl: 'https://picsum.photos/seed/kyambura-lodge/800/600', keywords: ['luxury', 'boutique', 'chimpanzee tracking', 'Kyambura Gorge', 'Volcanoes Safaris'] },
  { id: 'qe-ishasha-wilderness', name: 'Ishasha Wilderness Lodge', destinationId: 'queen-elizabeth', isDefault: false, rooms: [ { id: 'ishasha-w-tent', name: 'Canvas Tent', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 480, lowSeasonPriceDouble: 380, highSeasonPriceSingle: 590, highSeasonPriceDouble: 450 } ], imageUrl: 'https://picsum.photos/seed/ishasha-w-lodge/800/600', keywords: ['luxury', 'tented camp', 'Ishasha', 'tree-climbing lions', 'remote'] },
  { id: 'qe-enjojo', name: 'Enjojo Lodge', destinationId: 'queen-elizabeth', isDefault: false, rooms: [ { id: 'enjojo-cottage', name: 'Thatched Cottage', maxOccupancy: 3, pricingModel: 'perPerson', lowSeasonPriceSingle: 180, lowSeasonPriceDouble: 130, highSeasonPriceSingle: 220, highSeasonPriceDouble: 160 } ], imageUrl: 'https://picsum.photos/seed/enjojo-lodge/800/600', keywords: ['budget', 'mid-range', 'Ishasha', 'eco-friendly', 'family friendly'] },
  { id: 'qe-ishasha-jungle', name: 'Ishasha Jungle Lodge', destinationId: 'queen-elizabeth', isDefault: false, rooms: [ { id: 'ishasha-j-banda', name: 'Banda', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 250, lowSeasonPriceDouble: 190, highSeasonPriceSingle: 310, highSeasonPriceDouble: 230 } ], imageUrl: 'https://picsum.photos/seed/ishasha-j-lodge/800/600', keywords: ['mid-range', 'Ishasha', 'river views', 'raised platforms'] },
  { id: 'bwindi-erebero', name: 'Erebero Hills Lodge', destinationId: 'bwindi', isDefault: false, rooms: [ { id: 'erebero-std', name: 'Standard Room', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 280, lowSeasonPriceDouble: 200, highSeasonPriceSingle: 350, highSeasonPriceDouble: 250 } ], imageUrl: 'https://picsum.photos/seed/erebero-lodge/800/600', keywords: ['mid-range', 'Bwindi', 'views', 'eco-friendly'] },
  { id: 'bwindi-leisure', name: 'Gorilla Leisure Lodge', destinationId: 'bwindi', isDefault: false, rooms: [ { id: 'leisure-std', name: 'Standard Room', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 320, lowSeasonPriceDouble: 240, highSeasonPriceSingle: 400, highSeasonPriceDouble: 290 } ], imageUrl: 'https://picsum.photos/seed/leisure-lodge/800/600', keywords: ['mid-range', 'Rushaga', 'gorilla trekking', 'Bwindi lodge'] },
  { id: 'bwindi-four-gorillas', name: 'Four Gorillas Lodge', destinationId: 'bwindi', isDefault: false, rooms: [ { id: 'four-g-villa', name: 'Private Villa', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 550, lowSeasonPriceDouble: 420, highSeasonPriceSingle: 680, highSeasonPriceDouble: 520 } ], imageUrl: 'https://picsum.photos/seed/four-g-lodge/800/600', keywords: ['luxury', 'Rushaga', 'private villas', 'Bwindi lodge'] },
  { id: 'bwindi-icumbi', name: 'Icumbi Gorilla Lodge', destinationId: 'bwindi', isDefault: false, rooms: [ { id: 'icumbi-std', name: 'Standard Room', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 150, lowSeasonPriceDouble: 110, highSeasonPriceSingle: 190, highSeasonPriceDouble: 140 } ], imageUrl: 'https://picsum.photos/seed/icumbi-lodge/800/600', keywords: ['budget', 'Rushaga', 'community', 'value', 'Bwindi lodge'] },
  { id: 'bwindi-mahogany', name: 'Mahogany Springs Lodge', destinationId: 'bwindi', isDefault: false, rooms: [ { id: 'mahogany-suite', name: 'Superior Suite', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 470, lowSeasonPriceDouble: 360, highSeasonPriceSingle: 580, highSeasonPriceDouble: 440 } ], imageUrl: 'https://picsum.photos/seed/mahogany-lodge/800/600', keywords: ['luxury', 'Buhoma', 'river view', 'high-end', 'Bwindi lodge'] },
  { id: 'bwindi-sanctuary', name: 'Sanctuary Gorilla forest Lodge', destinationId: 'bwindi', isDefault: false, rooms: [ { id: 'sanctuary-tent', name: 'Luxury Tent', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 850, lowSeasonPriceDouble: 650, highSeasonPriceSingle: 1050, highSeasonPriceDouble: 800 } ], imageUrl: 'https://picsum.photos/seed/sanctuary-lodge/800/600', keywords: ['ultra-luxury', 'Buhoma', 'inside the park', 'tented camp', 'exclusive'] },
  { id: 'bwindi-buhoma-haven', name: 'Buhoma Haven Lodge', destinationId: 'bwindi', isDefault: false, rooms: [ { id: 'haven-banda', name: 'Banda', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 290, lowSeasonPriceDouble: 210, highSeasonPriceSingle: 360, highSeasonPriceDouble: 260 } ], imageUrl: 'https://picsum.photos/seed/haven-lodge/800/600', keywords: ['mid-range', 'Buhoma', 'community-owned', 'views', 'Bwindi lodge'] },
  { id: 'bwindi-buhoma', name: 'Buhoma Lodge', destinationId: 'bwindi', isDefault: false, rooms: [ { id: 'buhoma-chalet', name: 'Chalet', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 500, lowSeasonPriceDouble: 400, highSeasonPriceSingle: 620, highSeasonPriceDouble: 480 } ], imageUrl: 'https://picsum.photos/seed/buhoma-lodge/800/600', keywords: ['luxury', 'Buhoma', 'eco-lodge', 'top-rated', 'Bwindi lodge'] },
  { id: 'bwindi-volcanoes', name: 'Volcanoes Bwindi Lodge', destinationId: 'bwindi', isDefault: false, rooms: [ { id: 'volcanoes-banda', name: 'Banda', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 650, lowSeasonPriceDouble: 500, highSeasonPriceSingle: 800, highSeasonPriceDouble: 620 } ], imageUrl: 'https://picsum.photos/seed/volcanoes-lodge/800/600', keywords: ['luxury', 'Buhoma', 'classic safari', 'views', 'Volcanoes Safaris'] },
  { id: 'mgahinga-mount', name: 'Mount Gahinga Lodge', destinationId: 'mgahinga', isDefault: true, rooms: [ { id: 'gahinga-banda', name: 'Luxury Banda', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 600, lowSeasonPriceDouble: 450, highSeasonPriceSingle: 750, highSeasonPriceDouble: 550 } ], imageUrl: 'https://picsum.photos/seed/gahinga-lodge/800/600', keywords: ['luxury', 'gorilla trekking', 'golden monkeys', 'Virunga volcanoes', 'Volcanoes Safaris'] },
  { id: 'mgahinga-chahafi', name: 'Lake Chahafi Resort', destinationId: 'mgahinga', isDefault: false, rooms: [ { id: 'chahafi-cabin', name: 'Cabin', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 140, lowSeasonPriceDouble: 100, highSeasonPriceSingle: 180, highSeasonPriceDouble: 130 } ], imageUrl: 'https://picsum.photos/seed/chahafi-lodge/800/600', keywords: ['budget', 'mid-range', 'lake view', 'Kisoro'] },
  { id: 'mgahinga-travellers', name: 'Travellers Rest Hotel', destinationId: 'mgahinga', isDefault: false, rooms: [ { id: 'travellers-room', name: 'Standard Room', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 120, lowSeasonPriceDouble: 90, highSeasonPriceSingle: 150, highSeasonPriceDouble: 110 } ], imageUrl: 'https://picsum.photos/seed/travellers-lodge/800/600', keywords: ['historic', 'budget', 'Kisoro', 'Dian Fossey'] },
  { id: 'mgahinga-mutanda', name: 'Mutanda Lake Resort', destinationId: 'mgahinga', isDefault: false, rooms: [ { id: 'mutanda-cottage', name: 'Cottage', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 280, lowSeasonPriceDouble: 210, highSeasonPriceSingle: 340, highSeasonPriceDouble: 260 } ], imageUrl: 'https://picsum.photos/seed/mutanda-lodge/800/600', keywords: ['mid-range', 'lake view', 'stunning scenery', 'Kisoro'] },
  { id: 'mgahinga-chameleon', name: 'Chameleon Hill Forest Lodge', destinationId: 'mgahinga', isDefault: false, rooms: [ { id: 'chameleon-chalet', name: 'Chalet', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 450, lowSeasonPriceDouble: 350, highSeasonPriceSingle: 550, highSeasonPriceDouble: 420 } ], imageUrl: 'https://picsum.photos/seed/chameleon-lodge/800/600', keywords: ['luxury', 'unique', 'colorful', 'lake view', 'boutique'] },
  { id: 'mburo-mihingo', name: 'Mihingo Lodge', destinationId: 'lake-mburo', isDefault: true, rooms: [ { id: 'mihingo-tent', name: 'Luxury Tent', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 400, lowSeasonPriceDouble: 300, highSeasonPriceSingle: 500, highSeasonPriceDouble: 380 } ], imageUrl: 'https://picsum.photos/seed/mihingo-lodge/800/600', keywords: ['luxury', 'eco-lodge', 'horseback safari', 'infinity pool', 'views'] },
  { id: 'mburo-rwakobo', name: 'Rwakobo Rock Lodge', destinationId: 'lake-mburo', isDefault: false, rooms: [ { id: 'rwakobo-cottage', name: 'Cottage', maxOccupancy: 4, pricingModel: 'perPerson', lowSeasonPriceSingle: 200, lowSeasonPriceDouble: 150, highSeasonPriceSingle: 250, highSeasonPriceDouble: 180 } ], imageUrl: 'https://picsum.photos/seed/rwakobo-lodge/800/600', keywords: ['mid-range', 'views', 'family friendly', 'eco-friendly'] },
  { id: 'mburo-kigambira', name: 'Kigambira Safari Lodge', destinationId: 'lake-mburo', isDefault: false, rooms: [ { id: 'kigambira-banda', name: 'Banda', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 250, lowSeasonPriceDouble: 190, highSeasonPriceSingle: 310, highSeasonPriceDouble: 230 } ], imageUrl: 'https://picsum.photos/seed/kigambira-lodge/800/600', keywords: ['mid-range', 'tented camp', 'Lake Mburo lodge'] },
  { id: 'mburo-kigarama', name: 'Kigarama Wilderness Lodge', destinationId: 'lake-mburo', isDefault: false, rooms: [ { id: 'kigarama-banda', name: 'Banda', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 130, lowSeasonPriceDouble: 90, highSeasonPriceSingle: 160, highSeasonPriceDouble: 110 } ], imageUrl: 'https://picsum.photos/seed/kigarama-lodge/800/600', keywords: ['budget', 'views', 'eco-friendly', 'Lake Mburo lodge'] },
  { id: 'mburo-eagles', name: 'Eagles Nest', destinationId: 'lake-mburo', isDefault: false, rooms: [ { id: 'eagles-tent', name: 'Safari Tent', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 100, lowSeasonPriceDouble: 70, highSeasonPriceSingle: 120, highSeasonPriceDouble: 85 } ], imageUrl: 'https://picsum.photos/seed/eagles-nest-lodge/800/600', keywords: ['budget', 'tented camp', 'views', 'basic'] },
  { id: 'kampala-latitude', name: 'Latitude 0', destinationId: 'kampala', isDefault: false, rooms: [ { id: 'latitude-std', name: 'Standard Room', maxOccupancy: 2, pricingModel: 'perNight', lowSeasonPricePerNight: 300, highSeasonPricePerNight: 350 } ], imageUrl: 'https://picsum.photos/seed/latitude-lodge/800/600', keywords: ['luxury', 'boutique hotel', 'Kampala', 'swimming pool', 'spa'] },
  { id: 'kampala-petit', name: 'Le Petit Village', destinationId: 'kampala', isDefault: true, rooms: [ { id: 'petit-std', name: 'Standard Room', maxOccupancy: 2, pricingModel: 'perNight', lowSeasonPricePerNight: 200, highSeasonPricePerNight: 240 } ], imageUrl: 'https://picsum.photos/seed/petit-lodge/800/600', keywords: ['boutique hotel', 'mid-range', 'Kampala', 'unique design'] },
  { id: 'kampala-serena', name: 'Serena Hotel', destinationId: 'kampala', isDefault: false, rooms: [ { id: 'serena-deluxe', name: 'Deluxe Room', maxOccupancy: 2, pricingModel: 'perNight', lowSeasonPricePerNight: 350, highSeasonPricePerNight: 420 } ], imageUrl: 'https://picsum.photos/seed/serena-lodge/800/600', keywords: ['luxury', '5-star hotel', 'Kampala', 'business travel'] },
  { id: 'kidepo-apoka', name: 'Apoka Safari Lodge', destinationId: 'kidepo-valley', isDefault: true, rooms: [ { id: 'apoka-room', name: 'Safari Room', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 700, lowSeasonPriceDouble: 550, highSeasonPriceSingle: 850, highSeasonPriceDouble: 680 } ], imageUrl: 'https://picsum.photos/seed/apoka-lodge/800/600', keywords: ['luxury', 'remote', 'Kidepo lodge', 'swimming pool', 'exclusive'] },
  { id: 'kidepo-savannah', name: 'Kidepo Savannah Lodge', destinationId: 'kidepo-valley', isDefault: false, rooms: [ { id: 'kidepo-s-tent', name: 'Safari Tent', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 200, lowSeasonPriceDouble: 150, highSeasonPriceSingle: 250, highSeasonPriceDouble: 180 } ], imageUrl: 'https://picsum.photos/seed/kidepo-s-lodge/800/600', keywords: ['mid-range', 'budget', 'Kidepo lodge', 'views', 'tents'] },
  { id: 'kidepo-adere', name: 'Adere Safari Lodge', destinationId: 'kidepo-valley', isDefault: false, rooms: [ { id: 'adere-cottage', name: 'Cottage', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 280, lowSeasonPriceDouble: 210, highSeasonPriceSingle: 340, highSeasonPriceDouble: 260 } ], imageUrl: 'https://picsum.photos/seed/adere-lodge/800/600', keywords: ['mid-range', 'Kidepo lodge', 'swimming pool'] },
  { id: 'ziwa-amuka', name: 'Amuka Lodge', destinationId: 'ziwa-rhino', isDefault: true, rooms: [ { id: 'amuka-chalet', name: 'Chalet', maxOccupancy: 4, pricingModel: 'perPerson', lowSeasonPriceSingle: 220, lowSeasonPriceDouble: 170, highSeasonPriceSingle: 270, highSeasonPriceDouble: 210 } ], imageUrl: 'https://picsum.photos/seed/amuka-lodge/800/600', keywords: ['mid-range', 'rhino tracking', 'family friendly', 'swimming pool'] },
  { id: 'sipi-heritage', name: 'Sipi Heritage', destinationId: 'sipi-falls', isDefault: true, rooms: [ { id: 'sipi-h-room', name: 'Standard Room', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 150, lowSeasonPriceDouble: 110, highSeasonPriceSingle: 180, highSeasonPriceDouble: 140 } ], imageUrl: 'https://picsum.photos/seed/sipi-h-lodge/800/600', keywords: ['mid-range', 'Sipi Falls lodge', 'views', 'hiking'] },
  { id: 'jinja-lemala', name: 'Lemala Wild Waters Lodge', destinationId: 'jinja', isDefault: true, rooms: [ { id: 'lemala-suite', name: 'River Suite', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 480, lowSeasonPriceDouble: 380, highSeasonPriceSingle: 590, highSeasonPriceDouble: 450 } ], imageUrl: 'https://picsum.photos/seed/lemala-lodge/800/600', keywords: ['luxury', 'private island', 'Nile river', 'adventure'] },
  { id: 'jinja-adrift', name: 'Adrif River Club', destinationId: 'jinja', isDefault: false, rooms: [ { id: 'adrift-cottage', name: 'Cottage', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 250, lowSeasonPriceDouble: 190, highSeasonPriceSingle: 310, highSeasonPriceDouble: 230 } ], imageUrl: 'https://picsum.photos/seed/adrift-lodge/800/600', keywords: ['mid-range', 'bungee jumping', 'Nile river', 'adventure'] },
  { id: 'jinja-haven', name: 'The Haven Lodge, Jinja', destinationId: 'jinja', isDefault: false, rooms: [ { id: 'haven-j-banda', name: 'Banda', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 220, lowSeasonPriceDouble: 170, highSeasonPriceSingle: 270, highSeasonPriceDouble: 210 } ], imageUrl: 'https://picsum.photos/seed/haven-j-lodge/800/600', keywords: ['mid-range', 'family friendly', 'Nile river', 'swimming pool'] },
  { id: 'semuliki-safari', name: 'Semuliki Safari Lodge', destinationId: 'semuliki', isDefault: true, rooms: [ { id: 'semuliki-tent', name: 'Canvas Tent', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 450, lowSeasonPriceDouble: 350, highSeasonPriceSingle: 550, highSeasonPriceDouble: 420 } ], imageUrl: 'https://picsum.photos/seed/semuliki-lodge/800/600', keywords: ['luxury', 'remote', 'tented camp', 'hot springs'] },
  { id: 'entebbe-papyrus', name: 'Papyrus Guesthouse', destinationId: 'entebbe', isDefault: true, rooms: [ { id: 'papyrus-room', name: 'Standard Room', maxOccupancy: 2, pricingModel: 'perNight', lowSeasonPricePerNight: 120, highSeasonPricePerNight: 140 } ], imageUrl: 'https://picsum.photos/seed/papyrus-lodge/800/600', keywords: ['guesthouse', 'budget', 'Entebbe', 'airport hotel'] },
  { id: 'entebbe-boma', name: 'The Boma Hotel', destinationId: 'entebbe', isDefault: false, rooms: [ { id: 'boma-room', name: 'Standard Room', maxOccupancy: 2, pricingModel: 'perNight', lowSeasonPricePerNight: 180, highSeasonPricePerNight: 220 } ], imageUrl: 'https://picsum.photos/seed/boma-lodge/800/600', keywords: ['mid-range', 'boutique hotel', 'Entebbe', 'colonial style'] },
  { id: 'entebbe-protea', name: 'Protea Hotel', destinationId: 'entebbe', isDefault: false, rooms: [ { id: 'protea-room', name: 'Standard Room', maxOccupancy: 2, pricingModel: 'perNight', lowSeasonPricePerNight: 250, highSeasonPricePerNight: 300 } ], imageUrl: 'https://picsum.photos/seed/protea-lodge/800/600', keywords: ['luxury', 'Marriott', 'Entebbe', 'Lake Victoria'] },
  { id: 'entebbe-no5', name: 'No.5 Boutique Hotel', destinationId: 'entebbe', isDefault: false, rooms: [ { id: 'no5-room', name: 'Luxury Room', maxOccupancy: 2, pricingModel: 'perNight', lowSeasonPricePerNight: 320, highSeasonPricePerNight: 380 } ], imageUrl: 'https://picsum.photos/seed/no5-lodge/800/600', keywords: ['luxury', 'boutique hotel', 'Entebbe', 'spa', 'exclusive'] },
  { id: 'murchison-fort', name: 'Fort Murchison Lodge', destinationId: 'murchison-falls', isDefault: false, rooms: [ { id: 'fort-m-room', name: 'Standard Room', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 150, lowSeasonPriceDouble: 110, highSeasonPriceSingle: 180, highSeasonPriceDouble: 140 } ], imageUrl: 'https://picsum.photos/seed/fort-m-lodge/800/600', keywords: ['budget', 'mid-range', 'Murchison lodge', 'tents', 'thatched rooms'] },
  { id: 'murchison-river', name: 'Murchison River Lodge', destinationId: 'murchison-falls', isDefault: false, rooms: [ { id: 'm-river-cottage', name: 'Thatched Cottage', maxOccupancy: 4, pricingModel: 'perPerson', lowSeasonPriceSingle: 220, lowSeasonPriceDouble: 170, highSeasonPriceSingle: 270, highSeasonPriceDouble: 210 } ], imageUrl: 'https://picsum.photos/seed/m-river-lodge/800/600', keywords: ['mid-range', 'family friendly', 'Nile river', 'thatched cottages', 'tents'] },
  { id: 'murchison-pakuba', name: 'Pakuba Safari Lodge', destinationId: 'murchison-falls', isDefault: false, rooms: [ { id: 'pakuba-room', name: 'Standard Room', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 280, lowSeasonPriceDouble: 210, highSeasonPriceSingle: 340, highSeasonPriceDouble: 260 } ], imageUrl: 'https://picsum.photos/seed/pakuba-lodge/800/600', keywords: ['mid-range', 'game viewing', 'Albert Nile', 'Murchison lodge'] },
  { id: 'murchison-entikko', name: 'Entikko Safari Lodge', destinationId: 'murchison-falls', isDefault: false, rooms: [ { id: 'entikko-room', name: 'Standard Room', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 130, lowSeasonPriceDouble: 95, highSeasonPriceSingle: 160, highSeasonPriceDouble: 120 } ], imageUrl: 'https://picsum.photos/seed/entikko-lodge/800/600', keywords: ['budget', 'Murchison lodge', 'new'] },
  { id: 'murchison-twiga', name: 'Twiga Safari Lodge', destinationId: 'murchison-falls', isDefault: false, rooms: [ { id: 'twiga-tent', name: 'Safari Tent', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 300, lowSeasonPriceDouble: 230, highSeasonPriceSingle: 370, highSeasonPriceDouble: 280 } ], imageUrl: 'https://picsum.photos/seed/twiga-lodge/800/600', keywords: ['mid-range', 'safari tents', 'Nile river', 'views'] },
  { id: 'kibale-lodge', name: 'Kibale Lodge', destinationId: 'kibale', isDefault: false, rooms: [ { id: 'kibale-l-cottage', name: 'Cottage', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 260, lowSeasonPriceDouble: 200, highSeasonPriceSingle: 320, highSeasonPriceDouble: 240 } ], imageUrl: 'https://picsum.photos/seed/kibale-lodge/800/600', keywords: ['mid-range', 'Kibale Forest', 'chimpanzee tracking'] },
  { id: 'kibale-forest-camp', name: 'Kibale Forest Camp', destinationId: 'kibale', isDefault: false, rooms: [ { id: 'k-f-camp-tent', name: 'Safari Tent', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 190, lowSeasonPriceDouble: 140, highSeasonPriceSingle: 230, highSeasonPriceDouble: 170 } ], imageUrl: 'https://picsum.photos/seed/k-f-camp/800/600', keywords: ['budget', 'mid-range', 'tented camp', 'Kibale', 'chimps'] },
  { id: 'kibale-isunga', name: 'Isunga Lodge', destinationId: 'kibale', isDefault: false, rooms: [ { id: 'isunga-cottage', name: 'Cottage', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 240, lowSeasonPriceDouble: 180, highSeasonPriceSingle: 290, highSeasonPriceDouble: 220 } ], imageUrl: 'https://picsum.photos/seed/isunga-lodge/800/600', keywords: ['mid-range', 'views', 'eco-friendly', 'Kibale lodge'] },
  { id: 'kibale-turaco', name: 'Turaco Tree Tops', destinationId: 'kibale', isDefault: false, rooms: [ { id: 'turaco-treetop', name: 'Treetop Cabin', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 270, lowSeasonPriceDouble: 210, highSeasonPriceSingle: 330, highSeasonPriceDouble: 250 } ], imageUrl: 'https://picsum.photos/seed/turaco-lodge/800/600', keywords: ['mid-range', 'treetops', 'Kibale', 'unique'] },
  { id: 'kibale-chimpanzee', name: 'Chimpanzee Forest Lodge', destinationId: 'kibale', isDefault: false, rooms: [ { id: 'chimp-f-room', name: 'Main House Room', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 210, lowSeasonPriceDouble: 160, highSeasonPriceSingle: 260, highSeasonPriceDouble: 190 } ], imageUrl: 'https://picsum.photos/seed/chimp-f-lodge/800/600', keywords: ['mid-range', 'guesthouse', 'tea plantation', 'Kibale'] },
  { id: 'kibale-papaya', name: 'Papaya Lake Lodge', destinationId: 'kibale', isDefault: false, rooms: [ { id: 'papaya-cottage', name: 'Luxury Cottage', maxOccupancy: 3, pricingModel: 'perPerson', lowSeasonPriceSingle: 500, lowSeasonPriceDouble: 400, highSeasonPriceSingle: 620, highSeasonPriceDouble: 480 } ], imageUrl: 'https://picsum.photos/seed/papaya-lodge/800/600', keywords: ['luxury', 'crater lakes', 'swimming pool', 'views', 'boutique'] },
  { id: 'kibale-ndali', name: 'Ndali Lodge', destinationId: 'kibale', isDefault: false, rooms: [ { id: 'ndali-cottage', name: 'Cottage', maxOccupancy: 2, pricingModel: 'perPerson', lowSeasonPriceSingle: 480, lowSeasonPriceDouble: 380, highSeasonPriceSingle: 590, highSeasonPriceDouble: 450 } ], imageUrl: 'https://picsum.photos/seed/ndali-lodge/800/600', keywords: ['luxury', 'classic', 'crater lake', 'historic', 'Kibale'] },
];


export const MOCK_CONSULTANTS: Consultant[] = [
  {
    id: 'c1',
    name: 'Cathy Nabbaale',
    email: 'cathy.nabbaale@example.com',
    phone: '+256 772 123456',
    bio: 'With over 15 years of experience guiding safaris, Cathy has an unparalleled knowledge of Uganda\'s wildlife and ecosystems. She specializes in primate encounters.',
    imageUrl: 'https://picsum.photos/seed/cathy/400/400',
    specialties: ['Gorilla Trekking', 'Chimpanzee Tracking', 'Bird Watching'],
    isAvailable: true,
    commissionRate: 0.25,
    showCommissionRateOnProfile: false,
    socials: {
      linkedin: 'https://linkedin.com/in/ugandasafari',
      instagram: 'https://instagram.com/ugandasafari',
    },
    company: {
      name: 'Nkuringo Safaris',
      website: 'https://www.nkuringosafaris.com',
      tier: 'Mid-range to High-end',
      utbLicensed: true,
      autoMember: true,
    },
    transportRates: {
      road: {
        cruiser: 280, // Default is 300
      }
    },
    lodgeRates: [
      {
        lodgeId: 'bwindi-nkuringo',
        commission: 0.25, // Her special negotiated commission
        sellingRateOverrides: [
          {
            roomId: 'nk-cottage',
            highSeasonPriceDouble: 550, // Default is 575
          },
          {
            roomId: 'nk-villa',
            highSeasonPricePerNight: 1900, // Default is 1950
          }
        ]
      }
    ]
  },
  {
    id: 'c2',
    name: 'Diana Nalubega',
    email: 'diana.nalubega@example.com',
    phone: '+256 772 234567',
    bio: 'Diana is a passionate conservationist and cultural guide. She loves connecting travelers with local communities for authentic experiences. Her focus is on sustainable tourism.',
    imageUrl: 'https://picsum.photos/seed/diana/400/400',
    specialties: ['Cultural Tours', 'Community Visits', 'Adventure Travel'],
    isAvailable: true,
    commissionRate: 0.22,
    showCommissionRateOnProfile: false,
    socials: {
      facebook: 'https://facebook.com/ugandasafari',
      instagram: 'https://instagram.com/ugandasafari',
    },
    company: {
      name: 'Nkuringo Safaris',
      website: 'https://www.nkuringosafaris.com',
      tier: 'Mid-range to High-end',
      utbLicensed: true,
      autoMember: true,
    },
    transportRates: {
      road: {
        cruiser: 270, // Default is 300
      }
    },
    lodgeRates: [
      {
        lodgeId: 'bwindi-nkuringo',
        commission: 0.30, // Her special negotiated commission
        sellingRateOverrides: [
          {
            roomId: 'nk-cottage',
            highSeasonPriceDouble: 500, // Default is 575
          },
          {
            roomId: 'nk-villa',
            highSeasonPricePerNight: 1850, // Default is 1950
          }
        ]
      }
    ]
  },
  {
    id: 'c3',
    name: 'Moreen Tumishabe',
    email: 'moreen.tumishabe@example.com',
    phone: '+256 772 345678',
    bio: 'A photography enthusiast and an expert in the northern safari circuit, Moreen knows the best spots in Kidepo Valley to capture that perfect shot. She is an expert in big cat behavior.',
    imageUrl: 'https://picsum.photos/seed/moreen/400/400',
    specialties: ['Wildlife Photography', 'Kidepo Valley', 'Big Game Safaris'],
    isAvailable: false,
    commissionRate: 0.20,
    showCommissionRateOnProfile: false,
    socials: {
      linkedin: 'https://linkedin.com/in/ugandasafari',
    },
    company: {
      name: 'Nkuringo Safaris',
      website: 'https://www.nkuringosafaris.com',
      tier: 'Mid-range to High-end',
      utbLicensed: true,
      autoMember: true,
    },
    transportRates: {
      road: {
        cruiser: 290, // Default is 300
      }
    },
    lodgeRates: [
      {
        lodgeId: 'bwindi-nkuringo',
        commission: 0.20, // Her special negotiated commission
        sellingRateOverrides: [
          {
            roomId: 'nk-cottage',
            highSeasonPriceDouble: 525, // Default is 575
          },
          {
            roomId: 'nk-villa',
            highSeasonPricePerNight: 1800, // Default is 1950
          }
        ]
      }
    ]
  },
  {
    id: 'c4',
    name: 'Joan Muduwa',
    email: 'joan.muduwa@example.com',
    phone: '+256 772 456789',
    bio: "Joan is an adventure travel specialist with a love for Uganda's hidden gems. From the roaring Sipi Falls to the tranquil crater lakes, she crafts itineraries that blend adrenaline with authentic local encounters.",
    imageUrl: 'https://picsum.photos/seed/joan/400/400',
    specialties: ['Hiking & Trekking', 'Adventure Travel', 'Coffee Tours'],
    isAvailable: true,
    commissionRate: 0.15,
    showCommissionRateOnProfile: false,
    socials: {
      instagram: 'https://instagram.com/ugandasafari',
    },
    company: {
      name: 'Nkuringo Safaris',
      website: 'https://www.nkuringosafaris.com',
      tier: 'Mid-range to High-end',
      utbLicensed: true,
      autoMember: true,
    },
    transportRates: {
      road: {
        cruiser: 265, // Default is 300
      }
    },
    lodgeRates: [
      {
        lodgeId: 'bwindi-nkuringo',
        commission: 0.15, // Her special negotiated commission
        sellingRateOverrides: [
          {
            roomId: 'nk-cottage',
            highSeasonPriceDouble: 475, // Default is 575
          },
          {
            roomId: 'nk-villa',
            highSeasonPricePerNight: 1800, // Default is 1950
          }
        ]
      }
    ]
  }
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'r1',
    itineraryId: 'TU-COMPLETED1',
    consultantId: 'c1',
    travelerName: 'Sarah J.',
    rating: 5,
    comment: 'Cathy was incredible! Her knowledge of the gorillas in Bwindi was amazing. She made our trip unforgettable. Highly recommended!',
    consultantReply: 'Thank you, Sarah! It was a pleasure planning your adventure. So glad you enjoyed the gorillas!'
  },
  {
    id: 'r2',
    itineraryId: 'TU-COMPLETED2',
    consultantId: 'c2',
    travelerName: 'Mike & Lisa',
    rating: 5,
    comment: 'Diana organized a fantastic cultural tour. We learned so much and felt truly welcomed by the local communities. Uganda Safari is a fantastic platform.',
  },
   {
    id: 'r3',
    itineraryId: 'TU-COMPLETED3',
    consultantId: 'c1',
    travelerName: 'Chen W.',
    rating: 4,
    comment: 'Great trip to Murchison Falls. Cathy was very professional. The boat cruise was the highlight. Only wish we had more time!',
  }
];

export const MOCK_ITINERARIES: Itinerary[] = [
    {
        id: 'TU-COMPLETED1',
        title: 'Sarah J. x2 Safari',
        travelerName: 'Sarah J.',
        travelerEmail: 'sarah@example.com',
        duration: 3,
        stops: [],
        consultantId: 'c1',
        status: 'completed',
        startDate: '2024-05-10',
        travelerCount: 2,
        startLocation: 'kigali',
        endLocation: 'entebbe',
        totalPrice: 4500,
    },
     {
        id: 'TU-COMPLETED2',
        title: 'Mike & Lisa x4 Safari',
        travelerName: 'Mike & Lisa',
        travelerEmail: 'm.l@example.com',
        duration: 7,
        stops: [],
        consultantId: 'c2',
        status: 'completed',
        startDate: '2024-06-20',
        travelerCount: 4,
        startLocation: 'entebbe',
        endLocation: 'entebbe',
        totalPrice: 9800,
    },
    {
        id: 'TU-COMPLETED3',
        title: 'Chen W. x1 Safari',
        travelerName: 'Chen W.',
        travelerEmail: 'chen@example.com',
        duration: 4,
        stops: [],
        consultantId: 'c1',
        status: 'completed',
        startDate: '2024-07-01',
        travelerCount: 1,
        startLocation: 'entebbe',
        endLocation: 'entebbe',
        totalPrice: 2100,
    },
    {
        id: 'TU-XYZ123',
        title: 'Test User x2 Safari',
        travelerName: 'Test User',
        travelerEmail: 'user@example.com',
        duration: 5,
        stops: [],
        consultantId: 'c2',
        status: 'confirmed',
        startDate: '2024-09-15',
        travelerCount: 2,
        startLocation: 'entebbe',
        endLocation: 'kigali',
        totalPrice: 6200,
    },
    {
        id: 'TU-PLANNING1',
        title: 'Alex Smith x2 Safari',
        travelerName: 'Alex Smith',
        travelerEmail: 'alex@example.com',
        duration: 6,
        stops: [],
        consultantId: 'c3',
        status: 'planning',
        startDate: '2024-10-05',
        travelerCount: 2,
        startLocation: 'entebbe',
        endLocation: 'entebbe',
        totalPrice: 8500,
    },
    {
        id: 'TU-CANCELLED1',
        title: 'Jane Doe x3 Safari',
        travelerName: 'Jane Doe',
        travelerEmail: 'jane@example.com',
        duration: 3,
        stops: [],
        consultantId: 'c1',
        status: 'cancelled',
        startDate: '2024-08-20',
        travelerCount: 3,
        startLocation: 'entebbe',
        endLocation: 'entebbe',
        totalPrice: 4100,
    },
     {
        id: 'TU-CONFIRMED2',
        title: 'The Miller Family x4 Safari',
        travelerName: 'The Miller Family',
        travelerEmail: 'millers@example.com',
        duration: 10,
        stops: [],
        consultantId: 'c2',
        status: 'confirmed',
        startDate: '2024-11-15',
        travelerCount: 4,
        startLocation: 'entebbe',
        endLocation: 'entebbe',
        totalPrice: 15500,
    }
];

export const TRANSPORT_COSTS = {
  road: {
    cruiser: 300, // per day for a 4x4 Safari Cruiser
    van: 200,     // per day for a 4x4 Safari Van
  },
  flyIn: 300, // Fallback average cost per person, per leg
};

export const FLIGHT_OPERATORS: FlightOperator[] = [
    { id: 'op_aerolink', name: 'Aerolink' },
];

export const FLIGHT_COSTS: FlightLegCost[] = [
    // Entebbe Hub
    { id: 'fc_1', from: 'entebbe', to: 'murchison-falls', cost: 260, operatorId: 'op_aerolink' },
    { id: 'fc_2', from: 'entebbe', to: 'kidepo-valley', cost: 450, operatorId: 'op_aerolink' },
    { id: 'fc_3', from: 'entebbe', to: 'queen-elizabeth', cost: 250, operatorId: 'op_aerolink' },
    { id: 'fc_4', from: 'entebbe', to: 'kibale', cost: 250, operatorId: 'op_aerolink' },
    { id: 'fc_5', from: 'entebbe', to: 'bwindi', cost: 290, operatorId: 'op_aerolink' }, // Kihihi
    { id: 'fc_6', from: 'entebbe', to: 'mgahinga', cost: 290, operatorId: 'op_aerolink' }, // Kisoro
    
    // Inter-park connections (Western Circuit)
    { id: 'fc_7', from: 'bwindi', to: 'mgahinga', cost: 150, operatorId: 'op_aerolink' }, // Kihihi <> Kisoro
    { id: 'fc_8', from: 'bwindi', to: 'queen-elizabeth', cost: 160, operatorId: 'op_aerolink' }, // Kihihi <> Kasese
    { id: 'fc_9', from: 'bwindi', to: 'kibale', cost: 160, operatorId: 'op_aerolink' },
    { id: 'fc_10', from: 'bwindi', to: 'murchison-falls', cost: 280, operatorId: 'op_aerolink' },
    
    { id: 'fc_11', from: 'mgahinga', to: 'queen-elizabeth', cost: 170, operatorId: 'op_aerolink' }, // Kisoro <> Kasese
    { id: 'fc_12', from: 'mgahinga', to: 'kibale', cost: 170, operatorId: 'op_aerolink' },

    { id: 'fc_13', from: 'queen-elizabeth', to: 'murchison-falls', cost: 280, operatorId: 'op_aerolink' },
    { id: 'fc_14', from: 'kibale', to: 'murchison-falls', cost: 280, operatorId: 'op_aerolink' },
];


// Defines the logical next destinations from a given point to help guide users.
export const SAFARI_CIRCUIT_SUGGESTIONS: Record<string, string[]> = {
    'entebbe': ['lake-mburo', 'kampala', 'jinja'],
    'kampala': ['ziwa-rhino', 'lake-mburo', 'jinja'],
    'kigali': ['bwindi', 'mgahinga'],
    'lake-mburo': ['queen-elizabeth', 'bwindi', 'kampala', 'entebbe'],
    'bwindi': ['queen-elizabeth', 'mgahinga', 'lake-mburo'],
    'mgahinga': ['bwindi', 'lake-mburo'],
    'queen-elizabeth': ['kibale', 'bwindi', 'lake-mburo'],
    'kibale': ['queen-elizabeth', 'murchison-falls', 'semuliki', 'kampala'],
    'semuliki': ['kibale'],
    'ziwa-rhino': ['murchison-falls', 'kampala'],
    'murchison-falls': ['kibale', 'kidepo-valley', 'ziwa-rhino', 'jinja'],
    'kidepo-valley': ['murchison-falls', 'sipi-falls'],
    'jinja': ['sipi-falls', 'kampala'],
    'sipi-falls': ['kidepo-valley', 'jinja'],
};