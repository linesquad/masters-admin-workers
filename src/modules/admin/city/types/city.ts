export interface City {
  id: string;
  name: string;
  imageUrl?: string;
}

export interface CreateCityData {
  name: string;
  image?: File;
} 