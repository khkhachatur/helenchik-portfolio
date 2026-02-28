export interface SliderImage {
  src: string;
  alt: string;
  fit: 'cover' | 'contain';
}

export const projects = [
  {
    id: '01',
    title: 'IMPRISONMENT',
    category: 'Fashion Collection',
    year: '2026',
    image: '/images/imprisonment.jpg',
  },
  {
    id: '02',
    title: 'THE MOON',
    category: 'Mini Hiking Backpack',
    year: '2026',
    image: '/images/moon-backpack.jpg',
  },
  {
    id: '03',
    title: 'MUSEUM UNIFORM',
    category: 'Moscow Transport Museum',
    year: '2026',
    image: '/images/museum-uniform.jpg',
  },
  {
    id: '04',
    title: "MARSHAL'S BELT BAG",
    category: 'Sashiko & Boro',
    year: '2026',
    image: '/images/marshals-bag.jpg',
  },
  {
    id: '05',
    title: 'BACTERIA BAG',
    category: 'Wool Knitted Accessory',
    year: '2026',
    image: '/images/bacteria-bag.jpg',
  },
  {
    id: '06',
    title: 'TUMO UPCYCLE',
    category: 'Old Yarns Project',
    year: '2026',
    image: '/images/tumo-upcycle-1.jpg',
  },
];

export const projectDetails = {
  '01': {
    title: 'IMPRISONMENT',
    category: 'Fashion Collection',
    year: '2026',
    description: 'Collection "IMPRISONMENT" shows the process that occurs when the freedom of a living being is taken away. In a state of despair, they become consumed by their emotions, and the body overwhelmed by this inner tension begins to "purify" or "cleanse" itself by expressing negative experiences through physical reactions.',
    materials: ['100% cotton yarn', '100% merino wool', 'Mohair', 'Chiffon'],
    techniques: ['Wet Felting', 'Nuno Felting', 'Knitting Machine', 'Fabric Manipulation'],
    stages: [
      { name: 'SHIELD', desc: 'A fierce, intimidating appearance serves as protection against the harshness of the outside world.' },
      { name: 'WOUNDED', desc: 'Despite the defense, the world leaves its mark. Fragments of the former protective structure still repel threats.' },
      { name: 'SHATTERED', desc: 'The injuries cut too deep, and all defenses crumble. It seems like the end is near.' },
      { name: 'HOPE', desc: 'From the thorns of struggle, strength emerges. The figure transforms, shedding the past, and embraces a new beginning.' }
    ],
    sketches: [
      { src: '/images/imprisonment/imprisonment-sketch-1.png', alt: 'Design Sketch 1', fit: 'contain' as const },
      { src: '/images/imprisonment/imprisonment-sketch-2.png', alt: 'Design Sketch 2', fit: 'contain' as const },
      { src: '/images/imprisonment/imprisonment-sketch-3.png', alt: 'Design Sketch 3', fit: 'contain' as const },
      { src: '/images/imprisonment/imprisonment-sketch-4.png', alt: 'Design Sketch 4', fit: 'contain' as const },
      { src: '/images/imprisonment/imprisonment-sketch-5.png', alt: 'Design Sketch 5', fit: 'contain' as const },
    ],
    materialImages: [
      { src: '/images/imprisonment/imprisonment-fabric-1.png', alt: 'Wet Felting Process', fit: 'cover' as const },
      { src: '/images/imprisonment/imprisonment-fabric-2.png', alt: 'Knitting Machine Texture', fit: 'cover' as const },
      { src: '/images/imprisonment/imprisonment-fabric-3.png', alt: 'Fabric Manipulation', fit: 'cover' as const },
      { src: '/images/imprisonment/imprisonment-fabric-4.png', alt: 'Yarn Details', fit: 'cover' as const },
      { src: '/images/imprisonment/imprisonment-fabric-5.png', alt: 'Yarn Details', fit: 'cover' as const },
    ],
    products: [
      { src: '/images/imprisonment/imprisonment-runway-1.jpg', alt: 'Runway Look 1', fit: 'cover' as const },
      { src: '/images/imprisonment/imprisonment-runway-2.jpg', alt: 'Runway Look 2', fit: 'cover' as const },
      { src: '/images/imprisonment/imprisonment-runway-3.jpg', alt: 'Runway Look 3', fit: 'cover' as const },
      { src: '/images/imprisonment/imprisonment-runway-4.jpg', alt: 'Runway Look 4', fit: 'cover' as const },
      { src: '/images/imprisonment/imprisonment-runway-5.jpg', alt: 'Runway Look 5', fit: 'cover' as const },
    ]

  },
  '02': {
    title: 'THE MOON',
    category: 'Mini Hiking Backpack',
    year: '2026',
    description: 'This backpack is designed for a one day one night hike. The inspiration comes from the Moon and the connection I feel between us. It has 3 pockets, handles to carry your blanket and an elastic ribbon to carry an emergency tool such as a light or pepper spray.',
    materials: ['Waterproof fabric', 'Zippers', 'Elastic Ribbon'],
    techniques: ['Pattern Making', 'Sewing'],
    stages: [],
    sketches: [
      { src: '/images/moon/the-moon-sketch-1.png', alt: 'Design Sketch 1', fit: 'contain' as const },
      { src: '/images/moon/the-moon-sketch-2.png', alt: 'Design Sketch 2', fit: 'contain' as const },
      { src: '/images/moon/the-moon-sketch-3.png', alt: 'Design Sketch 3', fit: 'contain' as const },
      { src: '/images/moon/the-moon-sketch-4.png', alt: 'Design Sketch 4', fit: 'contain' as const },
      { src: '/images/moon/the-moon-sketch-5.png', alt: 'Design Sketch 5', fit: 'contain' as const },
    ],
    materialImages: [
      { src: '/images/moon/the-moon-fabric-1.png', alt: 'Wet Felting Process', fit: 'cover' as const },
      { src: '/images/moon/the-moon-fabric-2.png', alt: 'Knitting Machine Texture', fit: 'cover' as const },
      { src: '/images/moon/the-moon-fabric-3.png', alt: 'Fabric Manipulation', fit: 'cover' as const },
      { src: '/images/moon/the-moon-fabric-4.png', alt: 'Yarn Details', fit: 'cover' as const },
      { src: '/images/moon/the-moon-fabric-5.png', alt: 'Yarn Details', fit: 'cover' as const },
    ],
    products: [
      { src: '/images/moon/the-moon-runway-1.jpg', alt: 'Runway Look 1', fit: 'cover' as const },
      { src: '/images/moon/the-moon-runway-2.jpg', alt: 'Runway Look 2', fit: 'cover' as const },
      { src: '/images/moon/the-moon-runway-3.jpg', alt: 'Runway Look 3', fit: 'cover' as const },
      { src: '/images/moon/the-moon-runway-4.jpg', alt: 'Runway Look 4', fit: 'cover' as const },
    ]
  },
  '03': {
    title: 'MUSEUM UNIFORM',
    category: 'Moscow Transport Museum',
    year: '2026',
    description: 'During this workshop we were challenged to make a functional, but still fun uniform for the Moscow Transport Museum. Led by Tanmay Saxena we embroidered related images on the uniform.',
    materials: ['Uniform Fabric', 'Embroidery Thread'],
    techniques: ['Embroidery', 'Garment Construction'],
    stages: [],
    sketches: [
      { src: '/images/museum/museum-uniform-sketch-1.png', alt: 'Design Sketch 1', fit: 'contain' as const },
      { src: '/images/museum/museum-uniform-sketch-2.png', alt: 'Design Sketch 2', fit: 'contain' as const },
      { src: '/images/museum/museum-uniform-sketch-3.png', alt: 'Design Sketch 3', fit: 'contain' as const },
      { src: '/images/museum/museum-uniform-sketch-4.png', alt: 'Design Sketch 4', fit: 'contain' as const },
      { src: '/images/museum/museum-uniform-sketch-5.png', alt: 'Design Sketch 5', fit: 'contain' as const },
    ],
    materialImages: [
      { src: '/images/museum/museum-uniform-fabric-1.jpg', alt: 'Wet Felting Process', fit: 'cover' as const },
      { src: '/images/museum/museum-uniform-fabric-2.jpg', alt: 'Knitting Machine Texture', fit: 'cover' as const },
      { src: '/images/museum/museum-uniform-fabric-3.jpg', alt: 'Fabric Manipulation', fit: 'cover' as const },
      { src: '/images/museum/museum-uniform-fabric-4.jpg', alt: 'Yarn Details', fit: 'cover' as const },
    ],
    products: [
      { src: '/images/museum/museum-uniform-runway-1.jpg', alt: 'Runway Look 1', fit: 'cover' as const },
      { src: '/images/museum/museum-uniform-runway-2.jpg', alt: 'Runway Look 2', fit: 'cover' as const },
      { src: '/images/museum/museum-uniform-runway-3.jpg', alt: 'Runway Look 3', fit: 'cover' as const },
      { src: '/images/museum/museum-uniform-runway-4.jpg', alt: 'Runway Look 4', fit: 'cover' as const },
    ]
  },
  '04': {
    title: "MARSHAL'S BELT BAG",
    category: 'Sashiko & Boro',
    year: '2026',
    description: 'I tried to modernize the Japanese traditional hand stitching techniques: Sashiko & Boro, and make a functional belt bag for my headphones that fits perfectly in it. The front of the bag carries on several techniques.',
    materials: ['Cotton/Denim', 'Sashiko Thread'],
    techniques: ['Sashiko', 'Boro', 'Hand Stitching'],
    stages: [],
    sketches: [
      { src: '/images/belt-bag/marshal-belt-sketch-1.png', alt: 'Design Sketch 1', fit: 'contain' as const },
      { src: '/images/belt-bag/marshal-belt-sketch-2.png', alt: 'Design Sketch 2', fit: 'contain' as const },
      { src: '/images/belt-bag/marshal-belt-sketch-3.png', alt: 'Design Sketch 3', fit: 'contain' as const },
      { src: '/images/belt-bag/marshal-belt-sketch-4.png', alt: 'Design Sketch 4', fit: 'contain' as const },
      { src: '/images/belt-bag/marshal-belt-sketch-5.png', alt: 'Design Sketch 5', fit: 'contain' as const },
    ],
    materialImages: [
      { src: '/images/belt-bag/marshal-belt-fabric-1.png', alt: 'Wet Felting Process', fit: 'cover' as const },
      { src: '/images/belt-bag/marshal-belt-fabric-2.png', alt: 'Knitting Machine Texture', fit: 'cover' as const },
      { src: '/images/belt-bag/marshal-belt-fabric-3.png', alt: 'Fabric Manipulation', fit: 'cover' as const },
      { src: '/images/belt-bag/marshal-belt-fabric-4.png', alt: 'Yarn Details', fit: 'cover' as const },
    ],
    products: [
      { src: '/images/belt-bag/marshal-belt-runway-1.jpg', alt: 'Runway Look 1', fit: 'cover' as const },
      { src: '/images/belt-bag/marshal-belt-runway-2.jpg', alt: 'Runway Look 2', fit: 'cover' as const },
      { src: '/images/belt-bag/marshal-belt-runway-3.jpg', alt: 'Runway Look 3', fit: 'cover' as const },
      { src: '/images/belt-bag/marshal-belt-runway-4.jpg', alt: 'Runway Look 4', fit: 'cover' as const },
      { src: '/images/belt-bag/marshal-belt-runway-5.jpg', alt: 'Runway Look 5', fit: 'cover' as const },
    ]
  },
  '05': {
    title: 'BACTERIA BAG',
    category: 'Wool Knitted Accessory',
    year: '2026',
    description: 'During this workshop I challenged myself to stop using dull colors. To avoid my fear of using vibrant colors I found my inspiration in bacterias. I knitted my pattern out of a 100% wool fibers.',
    materials: ['100% Wool Fibers'],
    techniques: ['Knitting'],
    stages: [],
   sketches: [
      { src: '/images/bacteria/bacteria-bag-sketch-1.png', alt: 'Design Sketch 1', fit: 'contain' as const },
      { src: '/images/bacteria/bacteria-bag-sketch-2.png', alt: 'Design Sketch 2', fit: 'contain' as const },
      { src: '/images/bacteria/bacteria-bag-sketch-3.png', alt: 'Design Sketch 3', fit: 'contain' as const },
      { src: '/images/bacteria/bacteria-bag-sketch-4.png', alt: 'Design Sketch 4', fit: 'contain' as const },
    ],
    materialImages: [
      { src: '/images/bacteria/bacteria-bag-fabric-1.png', alt: 'Wet Felting Process', fit: 'cover' as const },
      { src: '/images/bacteria/bacteria-bag-fabric-2.png', alt: 'Knitting Machine Texture', fit: 'cover' as const },
      { src: '/images/bacteria/bacteria-bag-fabric-3.png', alt: 'Fabric Manipulation', fit: 'cover' as const },
      { src: '/images/bacteria/bacteria-bag-fabric-4.png', alt: 'Yarn Details', fit: 'cover' as const },
    ],
    products: [
      { src: '/images/bacteria/bacteria-bag-runway-1.jpg', alt: 'Runway Look 1', fit: 'cover' as const },
      { src: '/images/bacteria/bacteria-bag-runway-2.jpg', alt: 'Runway Look 2', fit: 'cover' as const },
      { src: '/images/bacteria/bacteria-bag-runway-3.jpg', alt: 'Runway Look 3', fit: 'cover' as const },
      { src: '/images/bacteria/bacteria-bag-runway-4.jpg', alt: 'Runway Look 4', fit: 'cover' as const },
    ]
  },
  '06': {
    title: 'TUMO UPCYCLE',
    category: 'Old Yarns Project',
    year: '2026',
    description: 'An old yarns upcycle project created at TUMO Studios. This project focuses on exploring various forms, shapes, layers, and braids by mixing different reclaimed yarns together to create entirely new textures and garments.',
    materials: ['Old / Mixed Yarns', 'Lace'],
    techniques: ['Upcycling', 'Knitting', 'Braiding'],
    stages: [],
    sketches: [
      { src: '/images/tumo-upcycle-sketch-1.png', alt: 'Design Sketch 1', fit: 'contain' as const },
      { src: '/images/tumo-upcycle-sketch-2.png', alt: 'Design Sketch 2', fit: 'contain' as const },
      { src: '/images/tumo-upcycle-sketch-3.png', alt: 'Design Sketch 3', fit: 'contain' as const },
      { src: '/images/tumo-upcycle-sketch-4.png', alt: 'Design Sketch 4', fit: 'contain' as const },
    ],
    materialImages: [
      { src: '/images/tumo-upcycle-fabric-1.jpg', alt: 'Wet Felting Process', fit: 'cover' as const },
      { src: '/images/tumo-upcycle-fabric-2.jpg', alt: 'Knitting Machine Texture', fit: 'cover' as const },
      { src: '/images/tumo-upcycle-fabric-3.jpg', alt: 'Fabric Manipulation', fit: 'cover' as const },
      { src: '/images/tumo-upcycle-fabric-4.jpg', alt: 'Yarn Details', fit: 'cover' as const },
    ],
    products: [
      { src: '/images/tumo-upcycle-runway-1.jpg', alt: 'Runway Look 1', fit: 'cover' as const },
      { src: '/images/tumo-upcycle-runway-2.jpg', alt: 'Runway Look 2', fit: 'cover' as const },
      { src: '/images/tumo-upcycle-runway-3.jpg', alt: 'Runway Look 3', fit: 'cover' as const },
      { src: '/images/tumo-upcycle-runway-4.jpg', alt: 'Runway Look 4', fit: 'cover' as const },
    ]
  }
};