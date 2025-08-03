export interface ContactUs {
  id: string;
  name: string;
  surname: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

export interface TotalContactUs {
  count: number;
}

export interface ContactUsResponse {
  messages: ContactUs[];
  total: TotalContactUs;
}
