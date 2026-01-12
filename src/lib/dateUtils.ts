/**
 * Determines the travel season based on a given date.
 * Low season: March, April, May, October, November.
 * High season: All other months.
 * @param date The date to check.
 * @returns 'low' or 'high' season.
 */
export const getSeason = (date: Date): 'low' | 'high' => {
  const month = date.getMonth(); // 0-indexed (0 for January, 11 for December)

  // Low season months are March (2), April (3), May (4), October (9), November (10)
  const lowSeasonMonths = [2, 3, 4, 9, 10];

  if (lowSeasonMonths.includes(month)) {
    return 'low';
  }
  return 'high';
};

/**
 * Adds a specified number of days to a given date.
 * @param date The starting date.
 * @param days The number of days to add.
 * @returns A new Date object with the added days.
 */
export const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};