import type { Movie, GalleryItem } from './types.ts';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  instagram?:string;
  linkedin?:string;
}

export const SOCIETY_LOGO = "https://i.ibb.co/30Bw8Y0/rangmanch-logo.png";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 't1',
    name: 'Shreyas Paliwal',
    role: 'Web Developer',
    image: "https://lh3.googleusercontent.com/d/17mtxEFcKh8fJ0mu-4XiiKlYPfLQpDsRn",
    instagram:"https://www.instagram.com/paliwal_shreyas?igsh=Mzkxd2dmNGxpYWk0",
    linkedin:"https://www.linkedin.com/in/shreyas-paliwal-8a2178345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  
];

export const MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Jigyasa :A Tale of MANIT Bhopal',
    year: '2025',
    thumbnail: '/WhatsApp Image 2026-01-28 at 9.24.43 PM.jpeg',
    description: 'A gripping tale of an aspiring writer who finds himself entangled in a reality he never intended to write.'
  },
  {
    id: '2',
    title: 'Second Take',
    year: '2025',
    thumbnail: '/WhatsApp Image 2026-01-28 at 9.39.10 PM.jpeg',
    description: 'A deep dive into the soul of the city of lakes, exploring the lives that make Bhopal what it is today.'
  },
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', url: '/photo1.jpeg' },
  { id: 'g2', url: '/photo2.jpeg'},
  { id: 'g3', url: '/photo3.jpeg'},
  { id: 'g4', url: '/photo4.jpeg'},
  { id: 'g5', url: '/photo5.jpeg' },
];

export const COLORS = {
  primary: '#500b0b',
  secondary: '#c5a059',
  bg: '#0c0a09',
};
