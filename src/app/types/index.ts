export interface LoginCredentials {
    userId: string;
    password: string;
  }
  
  export interface LoginResponse {
    status: boolean;
  }
  
  export interface UserProfile {
    name: string;
    email: string;
    phone: string;
    address: string;
    userId: string;
    avatar: string;
  }