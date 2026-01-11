export interface DestinationPerformanceData {
    id: string;
    name: string;
    imageUrl: string;
    totalVisitors: number;
    totalNights: number;
    totalRevenue: number;
    avgSpendPerNight: number;
    mostPopularLodge: string;
}

export interface LodgePerformanceData {
    id: string;
    name: string;
    destinationName: string;
    totalNights: number;
    totalBookings: number;
    totalRevenue: number;
    avgSpendPerNight: number;
    mostPopularRoom: string;
}
