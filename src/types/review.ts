export interface Review {
  id: string;
  itineraryId: string;
  consultantId: string;
  travelerName: string;
  rating: number;
  comment: string;
  consultantReply?: string;
}
