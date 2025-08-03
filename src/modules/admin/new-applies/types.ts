export interface NewApply {
  id: string;
  fullName: string;
  phone: string;
  speciality: string;
  note: string | null;
  createdAt: Date;
}

export interface NewApplyResponse {
  data: NewApply[];
  total: number;
}
