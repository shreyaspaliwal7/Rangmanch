import type { Movie, GalleryItem } from './types.ts';

export interface TeamMember {
  // id: string;
  name: string;
  role?: string;
  image: string;
  instagram?:string;
  linkedin?:string;
}

export const SOCIETY_LOGO = "https://i.ibb.co/30Bw8Y0/rangmanch-logo.png";

export const TEAM_MEMBERS: TeamMember[] = [
  
  {
    name: "Aditya Soni",
    role: 'President',
    instagram: "https://www.instagram.com/whoadityaazad?igsh=a2ZlNTYwaWV5a29s&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/aditya-soni-09008a260?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    image: "https://drive.google.com/open?id=1gR6swzkPHd60mAUSlFQNhlZA_VzMUhcn"
  },
  {
    name: "Ishika Kumari",
    role: 'Vice President',
    image: "https://drive.google.com/open?id=1NgJseB2aMXfuiRgEC_3Lm5i43YE5CIVT"
  },
    {
    name: "Vidhan Chaudhary",
    role: 'Coordinator',
    instagram: "www.instagram.com/vidhan__chaudhary",
    linkedin: "www.linkedin.com/in/vidhanchaudhary/",
    image: "https://drive.google.com/open?id=189llMktIzSO-YJfRBKQ179nj33dFMqlF"
  },
  {
    name: "Kartikeya Pandey ",
    role: 'Co-Coordinator',
    instagram: "https://www.instagram.com/kartikeya._.16?igsh=MXRtZG83Y2E5YWN6Ng==",
    linkedin: "https://www.linkedin.com/in/kartikeya-pandey-316918325?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    image: "https://drive.google.com/open?id=1ertN9IOhuk3HXBnABByQjdizUvLvNilB"
  },
  {
    name: 'Shreyas Paliwal',
    role: 'Technical Head',
    image: "https://lh3.googleusercontent.com/d/17mtxEFcKh8fJ0mu-4XiiKlYPfLQpDsRn",
    instagram:"https://www.instagram.com/paliwal_shreyas?igsh=Mzkxd2dmNGxpYWk0",
    linkedin:"https://www.linkedin.com/in/shreyas-paliwal-8a2178345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Rageesh Patel",
    role: 'Creative Head',
    instagram: "https://www.instagram.com/rageesh0?igsh=Z2kzNHpscnFwaDR2",
    linkedin: "www.linkedin.com/in/rageeshpatel",
    image: "https://drive.google.com/open?id=16956Mb-aFeLBW_LKsno1T97Hag5PVDXg"
  },
  {
    name: "Gargi Bhadange ",
    role: 'Creative Head',
    instagram: "https://www.instagram.com/gargi_b55?utm_source=qr&igsh=cGRuYWF6aTk4czI1",
    linkedin: "https://www.linkedin.com/in/gargi-bhadange-a60283326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "https://drive.google.com/open?id=1rKHTjlzgKEPxcxx3xUCzJtrgGoRPOEA6"
  },
  {
    name: "Rudransh Sharma ",
    role: 'Finance Head',
    linkedin: "https://www.linkedin.com/in/rudransh-sharma-66ab9a310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "https://drive.google.com/open?id=1KgRdoFTN3PO9RXi1b6x1b7uEqtLdqHqS"
  },
  {
    name: "Khushi Rana",
    role: 'PR Head',
    instagram: "https://www.instagram.com/_khushirana_08/?hl=en",
    linkedin: "www.linkedin.com/in/ khushi-rana-2b9a84324",
    image: "https://drive.google.com/open?id=1X4VYD_Jnm3BbergCZ598xbze5yfoLbmn"
  },
  {
    name: "Raunak Sahu",
    instagram: "https://www.instagram.com/raunak._.sahu?igsh=MW96MGwxcHJueWpiaA==",
    linkedin: "https://www.linkedin.com/in/raunak-sahu-84ba63346?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    image: "https://drive.google.com/open?id=13RA85Vo0k1M_qXYobpaOW_y-MN05cPz7"
  },
  {
    name: "Ishika Arya ",
    instagram: "https://www.instagram.com/ishika_arya2706?igsh=ZjIzM2lyMXltaDl3",
    linkedin: "https://www.linkedin.com/in/ishika-arya-39600a31a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    image: "https://drive.google.com/open?id=1o3cDBX5Wg1Ogfy3K5ZYxwFzQHS5GuoHk"
  },
  {
    name: "Arushi Patwa",
    instagram: "https://www.instagram.com/aru5hiee?igsh=MW41MGZpYmV6eGF6bg==",
    linkedin: "https://www.linkedin.com/in/arushi-patwa-39522431b",
    image: "https://drive.google.com/open?id=1KeVoNmxUeawr61lKO01W_dxly7QesY63"
  },
  {
    name: "Divyansh Narvariya",
    instagram: "https://www.instagram.com/divyanshnarvariya/",
    linkedin: "https://www.linkedin.com/in/divyanshnarvariya/",
    image: "https://drive.google.com/open?id=1n3XkxZvYkplwRR_zzpYnwBFBaV4v7bL5"
  },
  {
    name: "Ayush Narganwe ",
    instagram: "https://www.instagram.com/ayush_narganwe?igsh=MXd0ODI4Mmp0MXU3bw==",
    linkedin: "https://in.linkedin.com/in/ayush-k-narganwe-21291a325",
    image: "https://drive.google.com/open?id=1f_V1-aniJXRO9o-YpGATqcBW35xJ0VKT"
  },
  {
    name: "Pushkar Chaudhary",
    instagram: "instagram.com/pushkarc28",
    image: "https://drive.google.com/open?id=1X9KP81hRvl3VoNuD5O9Rha3VTGfwQDbg"
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
    thumbnail: '/second take main.jpeg',
    description: 'A deep dive into the soul of the city of lakes, exploring the lives that make Bhopal what it is today.'
  },
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', url: '/photo1.jpeg' },
  { id: 'g2', url: '/photo2.jpeg'},
  { id: 'g3', url: '/photo3.jpeg'},
  { id: 'g4', url: '/photo4.jpeg'},
  { id: 'g5', url: '/photo5.jpeg' },
  { id: 'g6', url: '/phoro6.jpeg' },
  { id: 'g7', url: '/secondtake.jpeg' },
];

export const COLORS = {
  primary: '#500b0b',
  secondary: '#c5a059',
  bg: '#0c0a09',
};
