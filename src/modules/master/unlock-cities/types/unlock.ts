export interface City {
  id: string;
  name: string;
  isActive: boolean;
  imageUrl: string;
}

// City Part data structure
export interface CityPart {
  id: string;
  name: string;
  cityId: string;
  pointsRequired: number;
  isActive: boolean;
  unlockCost: number;
}
