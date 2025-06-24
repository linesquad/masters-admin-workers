export interface City {
  id: string;
  name: string;
  isActive: boolean;
}

// City Part data structure
export interface CityPart {
  id: string;
  name: string;
  cityId: string;
  pointsRequired: number;
  isActive: boolean;
}
