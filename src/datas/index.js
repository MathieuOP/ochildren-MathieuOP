import shuffle from 'shuffle-array';

const memory = [
  {
    id: 1,
    title: "Animal",
    "icon": "",
    memory: [
      {
        id: 1,
        name: 'tiger',
        complete: false,
        close: true,
      },
      {
        id: 2,
        name: 'tiger',
        complete: false,
        close: true,
      },
      {
        id: 3,
        name: 'dog',
        complete: false,
        close: true,
      },
      { 
        id: 4,
        name: 'dog',
        complete: false,
        close: true,
      },
      {
        id: 5,
        name: 'lion',
        complete: false,
        close: true,
      },
      {
        id: 6,
        name: 'lion',
        complete: false,
        close: true,
      },
      {
        id: 7,
        name: 'cat',
        complete: false,
        close: true,
      },
      {
        id: 8,
        name: 'cat',
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
    "title": "Autres",
    "icon": "",
    memory: [
      {
        id: 1,
        name: 'tiger',
        complete: false,
        close: true,
      },
      {
        id: 2,
        name: 'tiger',
        complete: false,
        close: true,
      },
      {
        id: 3,
        name: 'dog',
        complete: false,
        close: true,
      },
      { 
        id: 4,
        name: 'dog',
        complete: false,
        close: true,
      },
      {
        id: 5,
        name: 'lion',
        complete: false,
        close: true,
      },
      {
        id: 6,
        name: 'lion',
        complete: false,
        close: true,
      },
      {
        id: 7,
        name: 'cat',
        complete: false,
        close: true,
      },
      {
        id: 8,
        name: 'cat',
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

