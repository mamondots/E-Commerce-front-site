export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  profilePicture: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface TProducts {
  data: [
    {
      _id: string;
      title: string;
      availability: string;
      category: string;
      description: string;
      image: string;
      price: number;
      rating: number;
      stock: string;
      createdAt?: string;
      updatedAt?: string;
      __v?: number;
    }
  ];
  _id: string;
  title: string;
  availability: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  stock: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface TCategory {
  data: [
    {
      _id: string;
      category: string;
      createdAt?: string;
      updatedAt?: string;
      __v?: number;
    }
  ];
  _id: string;
  category: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
