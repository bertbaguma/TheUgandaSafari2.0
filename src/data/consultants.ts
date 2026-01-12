import { Consultant } from '../types.js';

export const MOCK_CONSULTANTS: Consultant[] = [
  {
    id: 'c1',
    name: 'Cathy Nabbaale',
    email: 'cathy.nabbaale@example.com',
    phone: '+256 772 123456',
    bio: `With over 15 years of experience guiding safaris, Cathy has an unparalleled knowledge of Uganda's wildlife and ecosystems. She specializes in primate encounters.`,
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
    bio: `Diana is a passionate conservationist and cultural guide. She loves connecting travelers with local communities for authentic experiences. Her focus is on sustainable tourism.`,
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
    bio: `A photography enthusiast and an expert in the northern safari circuit, Moreen knows the best spots in Kidepo Valley to capture that perfect shot. She is an expert in big cat behavior.`,
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
    bio: `Joan is an adventure travel specialist with a love for Uganda's hidden gems. From the roaring Sipi Falls to the tranquil crater lakes, she crafts itineraries that blend adrenaline with authentic local encounters.`,
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
