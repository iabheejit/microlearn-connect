
export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  courses: number;
  joined: string;
  status: "active" | "inactive";
}

export interface Course {
  id: number;
  title: string;
  instructor?: string;
  description?: string;
  category?: string;
  language?: string;
  price?: number;
  enrolled: number;
  completion: number;
  status: "active" | "draft" | "archived";
  created: string;
  days?: CourseDay[];
}

export interface CourseDay {
  id: number;
  title: string;
  paragraphs: CourseParagraph[];
  media?: string;
}

export interface CourseParagraph {
  id: number;
  content: string;
}

export interface Stat {
  name: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
}

export interface NavItem {
  name: string;
  path: string;
  icon: string;
}

export interface WhatsAppTemplate {
  id: number;
  name: string;
  content: string;
  variables: string[];
  status: "approved" | "pending" | "rejected";
}

export interface Organization {
  id: number;
  name: string;
  plan: string;
  users: number;
  courses: number;
}

