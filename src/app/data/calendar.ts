import { v4 as uuidv4 } from 'uuid';
export interface AdventDoor {
  day: number; // z.B. 1 für 1. Dezember, 2 für 2. Dezember, usw.
  image: string;
  isOpen: boolean;
  uuid: string;
}


export const adventDoors = [
  { day: 1, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 2, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 3, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 4, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 5, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 6, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 7, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 8, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 9, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 10, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 11, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 12, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 13, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 14, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 15, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 16, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 17, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 18, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 19, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 20, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 21, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 22, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 24, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
  { day: 23, image: 'assets/images/day1.jpg', isOpen: false, uuid: uuidv4(), },
];