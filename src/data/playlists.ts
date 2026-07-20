export type Lesson = {
  id: number;
  title: string;
  duration: string;
};

export type Playlist = {
  id: string;
  title: string;
  description: string;
  level: string;
  videos: number;
  category: string;
  playlistUrl: string;
  learningPoints: string[];
  lessons: Lesson[];
};

export const playlists: Playlist[] = [
  {
    id: "react-complete",
    title: "React Complete Guide",
    description: "Build modern React applications.",
    level: "Intermediate",
    videos: 35,
    category: "React",

    playlistUrl: "https://youtube.com/playlist?list=YOUR_REACT_PLAYLIST",

    learningPoints: [
      "React Components",
      "JSX",
      "Props",
      "State Management",
      "React Router",
      "Build Real Projects",
    ],

    lessons: [
      {
        id: 1,
        title: "Introduction to React",
        duration: "12 min",
      },
      {
        id: 2,
        title: "JSX Fundamentals",
        duration: "18 min",
      },
      {
        id: 3,
        title: "Components",
        duration: "20 min",
      },
    ],
  },

  {
    id: "java-masterclass",
    title: "Java Masterclass",
    description: "Learn Java from beginner to advanced.",
    level: "Beginner",
    videos: 42,
    category: "Java",

    playlistUrl: "https://youtube.com/playlist?list=YOUR_JAVA_PLAYLIST",

    learningPoints: ["Variables", "Loops", "OOP", "Collections"],

    lessons: [
      {
        id: 1,
        title: "Java Introduction",
        duration: "15 min",
      },
    ],
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
