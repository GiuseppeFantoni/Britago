export interface NavLink {
  label: string;
  href: string;
}

export interface ProductItem {
  id: number;
  name: string;
  desc: string;
  image: string;
}

export interface CulturaCard {
  title: string;
  desc: string;
  image: string;
}

export interface ContactInfo {
  phone: string;
  wa: string;
}

export interface OpeningHours {
  day: string;
  hours: string;
}

export type SubmitStatus = "idle" | "loading" | "success" | "error";
