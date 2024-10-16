type TInstructor = {
  name: string;
  imageUrl: string;
};

export type TCourse = {
  title: string;
  imageUrl: string;
  hours: string;
  lessons: number;
  price: string;
  instructor: TInstructor;
  rating: number;
  level: string;
};
