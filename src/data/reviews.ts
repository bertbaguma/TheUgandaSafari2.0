import { Review } from '../types';

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'r1',
    itineraryId: 'TU-COMPLETED1',
    consultantId: 'c1',
    travelerName: 'Sarah J.',
    rating: 5,
    comment: '''Cathy was incredible! Her knowledge of the gorillas in Bwindi was amazing. She made our trip unforgettable. Highly recommended!''',
    consultantReply: 'Thank you, Sarah! It was a pleasure planning your adventure. So glad you enjoyed the gorillas!'
  },
  {
    id: 'r2',
    itineraryId: 'TU-COMPLETED2',
    consultantId: 'c2',
    travelerName: 'Mike & Lisa',
    rating: 5,
    comment: '''Diana organized a fantastic cultural tour. We learned so much and felt truly welcomed by the local communities. Uganda Safari is a fantastic platform.''',
  },
   {
    id: 'r3',
    itineraryId: 'TU-COMPLETED3',
    consultantId: 'c1',
    travelerName: 'Chen W.',
    rating: 4,
    comment: '''Great trip to Murchison Falls. Cathy was very professional. The boat cruise was the highlight. Only wish we had more time!''',
  }
];
