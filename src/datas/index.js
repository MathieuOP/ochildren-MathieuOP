import shuffle from 'shuffle-array';

const memory = [
  {
    id: 1,
    title: "Animal",
    "icon": "memory.svg",
    memory: [
      {
        id: 1,
        name: 'tiger',
        image: 'tiger.jpg',
        complete: false,
        close: true,
      },
      {
        id: 2,
        name: 'tiger',
        image: 'tiger.jpg',
        complete: false,
        close: true,
      },
      {
        id: 3,
        name: 'dog',
        image: 'dog.jpg',
        complete: false,
        close: true,
      },
      { 
        id: 4,
        name: 'dog',
        image: 'dog.jpg',
        complete: false,
        close: true,
      },
      {
        id: 5,
        name: 'lion',
        image: 'lion.jpg',
        complete: false,
        close: true,
      },
      {
        id: 6,
        name: 'lion',
        image: 'lion.jpg',
        complete: false,
        close: true,
      },
      {
        id: 7,
        name: 'cat',
        image: 'cat.svg',
        complete: false,
        close: true,
      },
      {
        id: 8,
        name: 'cat',
        image: 'cat.svg',
        complete: false,
        close: true,
      },
    ],
    "world": {
      "id": 1,
      "name": "3-6 ans"
    },
  },
  {
    "id": 2,
    "title": "L'espace",
    "icon": "memory.svg",
    memory: [
      {
        id: 1,
        name: 'terre',
        image: 'terre.png',
        complete: false,
        close: true,
      },
      {
        id: 2,
        name: 'terre',
        image: 'terre.png',
        complete: false,
        close: true,
      },
      {
        id: 3,
        name: 'lune',
        image: 'lune.png',
        complete: false,
        close: true,
      },
      { 
        id: 4,
        name: 'lune',
        image: 'lune.png',
        complete: false,
        close: true,
      },
      {
        id: 5,
        name: 'jupiter',
        image: 'jupiter.png',
        complete: false,
        close: true,
      },
      {
        id: 6,
        name: 'jupiter',
        image: 'jupiter.png',
        complete: false,
        close: true,
      },
      {
        id: 7,
        name: 'mars',
        image: 'mars.png',
        complete: false,
        close: true,
      },
      {
        id: 8,
        name: 'mars',
        image: 'mars.png',
        complete: false,
        close: true,
      },
      {
        id: 9,
        name: 'soleil',
        image: 'soleil.png',
        complete: false,
        close: true,
      },
      {
        id: 10,
        name: 'soleil',
        image: 'soleil.png',
        complete: false,
        close: true,
      },
      {
        id: 11,
        name: 'fusee',
        image: 'fusee.png',
        complete: false,
        close: true,
      },
      {
        id: 12,
        name: 'fusee',
        image: 'fusee.png',
        complete: false,
        close: true,
      },
    ],
    "world": {
      "id": 2,
      "name": "7-10 ans"
    },
  }
]

memory.map((data) => shuffle(data.memory));

export default memory;
