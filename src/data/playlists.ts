export type Playlist = {
  id: string;
  title: string;
  description: string;
  level: string;
  videos: number;
  category: string;
};

export const playlists: Playlist[] = [
  {
    id: "java-masterclass",
    title: "Java Masterclass",
    description: "Learn Java from beginner to advanced.",
    level: "Beginner",
    videos: 42,
    category: "Java",
  },
  {
    id: "react-complete",
    title: "React Complete Guide",
    description: "Build modern React applications.",
    level: "Intermediate",
    videos: 35,
    category: "React",
  },
  {
    id: "javascript-fundamentals",
    title: "JavaScript Fundamentals",
    description: "Master modern JavaScript concepts.",
    level: "Beginner",
    videos: 28,
    category: "JavaScript",
  },
  {
    id: "dsa-course",
    title: "DSA Complete Course",
    description: "Data Structures & Algorithms from scratch.",
    level: "Intermediate",
    videos: 60,
    category: "DSA",
  },
  {
    id: "html-css",
    title: "HTML & CSS Bootcamp",
    description: "Build responsive websites from scratch.",
    level: "Beginner",
    videos: 24,
    category: "HTML & CSS",
  },
  {
    id: "typescript",
    title: "TypeScript Essentials",
    description: "Write safer and scalable JavaScript.",
    level: "Intermediate",
    videos: 30,
    category: "TypeScript",
  },
];

export const playlistCategories = [
  "All",
  "React",
  "Java",
  "JavaScript",
  "DSA",
  "HTML & CSS",
  "TypeScript",
];
