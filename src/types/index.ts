// Common types for the application
export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
