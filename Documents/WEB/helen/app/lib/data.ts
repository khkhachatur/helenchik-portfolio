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
      { src: '/images/bacteria/bacteria-bag-fabric-5.png', alt: 'Yarn Details', fit: 'cover' as const },
    ],
    products: [
      { src: '/images/bacteria/bacteria-bag-runway-1.jpg', alt: 'Runway Look 1', fit: 'cover' as const },
      { src: '/images/bacteria/bacteria-bag-runway-2.jpg', alt: 'Runway Look 2', fit: 'cover' as const },
      { src: '/images/bacteria/bacteria-bag-runway-3.jpg', alt: 'Runway Look 3', fit: 'cover' as const },
      { src: '/images/bacteria/bacteria-bag-runway-4.jpg', alt: 'Runway Look 4', fit: 'cover' as const },
      { src: '/images/bacteria/bacteria-bag-runway-5.jpg', alt: 'Runway Look 5', fit: 'cover' as const },
      { src: '/images/bacteria/bacteria-bag-runway-6.jpg', alt: 'Runway Look 6', fit: 'cover' as const },
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
      { src: '/images/tumo/tumo-upcycle-sketch-1.png', alt: 'Design Sketch 1', fit: 'contain' as const },
      { src: '/images/tumo/tumo-upcycle-sketch-2.png', alt: 'Design Sketch 2', fit: 'contain' as const },
      { src: '/images/tumo/tumo-upcycle-sketch-3.png', alt: 'Design Sketch 3', fit: 'contain' as const },
      { src: '/images/tumo/tumo-upcycle-sketch-4.png', alt: 'Design Sketch 4', fit: 'contain' as const },
      { src: '/images/tumo/tumo-upcycle-sketch-5.png', alt: 'Design Sketch 5', fit: 'contain' as const },
    ],
    materialImages: [
      { src: '/images/tumo/tumo-upcycle-fabric-1.png', alt: 'Wet Felting Process', fit: 'cover' as const },
      { src: '/images/tumo/tumo-upcycle-fabric-2.png', alt: 'Knitting Machine Texture', fit: 'cover' as const },
      { src: '/images/tumo/tumo-upcycle-fabric-3.png', alt: 'Fabric Manipulation', fit: 'cover' as const },
      { src: '/images/tumo/tumo-upcycle-fabric-4.png', alt: 'Yarn Details', fit: 'cover' as const },
      { src: '/images/tumo/tumo-upcycle-fabric-5.png', alt: 'Yarn Details', fit: 'cover' as const },
    ],
    products: [
      { src: '/images/tumo/tumo-upcycle-runway-1.jpg', alt: 'Runway Look 1', fit: 'cover' as const },
      { src: '/images/tumo/tumo-upcycle-runway-2.jpg', alt: 'Runway Look 2', fit: 'cover' as const },
      { src: '/images/tumo/tumo-upcycle-runway-3.jpg', alt: 'Runway Look 3', fit: 'cover' as const },
      { src: '/images/tumo/tumo-upcycle-runway-4.jpg', alt: 'Runway Look 4', fit: 'cover' as const },
      { src: '/images/tumo/tumo-upcycle-runway-5.jpg', alt: 'Runway Look 5', fit: 'cover' as const },
    ]
  }
};

export const galleryItems = [
  { id: 1, src: '/images/gallery/gallery-1.jpg', title: 'Concept Deconstruction', desc: '"Imprisonment" collection mood board and form study' },
  { id: 2, src: '/images/gallery/gallery-2.jpg', title: '"Imprisonment"', desc: 'Draping and textile manipulation under dramatic lighting' },
  { id: 3, src: '/images/gallery/gallery-3.jpg', title: 'Character Styling', desc: 'Jujutsu Kaisen inspired conceptual fashion illustration' },
  { id: 4, src: '/images/gallery/gallery-4.jpg', title: '"Imprisonment"', desc: 'Backstage fitting featuring exaggerated volume and scale' },
  { id: 5, src: '/images/gallery/gallery-5.jpg', title: 'The Process Board', desc: 'Connecting sketches, physical swatches, and runway outcomes' },
  { id: 6, src: '/images/gallery/gallery-6.jpg', title: 'Illustration', desc: 'Look development paired with material and palette references' },
  { id: 7, src: '/images/gallery/gallery-7.jpg', title: 'Technical Flats', desc: 'Precision garment drafting and colorway exploration' },
  { id: 8, src: '/images/gallery/gallery-8.jpg', title: '"Imprisonment"', desc: 'Textural detailing on dark, structured garments' },
  { id: 9, src: '/images/gallery/gallery-9.jpg', title: '"Imprisonment"', desc: 'Abstract visual research and ethereal color studies' },
  { id: 10, src: '/images/gallery/gallery-10.jpg', title: '"Imprisonment"', desc: 'Distressed fiber application and experimental textile design' },
  { id: 11, src: '/images/gallery/gallery-11.jpg', title: 'Structural Sketch', desc: 'Ink and wash illustration focusing on corset detailing and drape' },
  { id: 12, src: '/images/gallery/gallery-12.jpg', title: 'Athleisure Concept', desc: 'Menswear silhouette study with accompanying technical flats' },
  { id: 13, src: '/images/gallery/gallery-13.jpg', title: 'Campaign Visuals', desc: 'Fashion Scout Finalist poster for the "Imprisonment" collection' },
  { id: 14, src: '/images/gallery/gallery-14.jpg', title: 'Atelier Draping', desc: 'Three-dimensional form building and pleating on the mannequin' },
  { id: 15, src: '/images/gallery/gallery-15.jpg', title: 'Runway Presentation', desc: 'Yerevan Fashion Week runway look featuring distressed fibers' },
  { id: 16, src: '/images/gallery/gallery-16.jpg', title: 'Illustration', desc: 'Volumetric coat design with texture mapping and styling notes' },
  { id: 17, src: '/images/gallery/gallery-17.jpg', title: 'Editorial Styling', desc: 'Structured garment presentation for Sonya Avagyan’s collection' },
  { id: 18, src: '/images/gallery/gallery-18.jpg', title: '"Imprisonment"', desc: 'Experimental double-exposure portrait highlighting ethereal textures' },
  { id: 19, src: '/images/gallery/gallery-19.jpg', title: 'Dynamic Ink Study', desc: 'Rapid brushstroke silhouette capturing motion and attitude' },
  { id: 20, src: '/images/gallery/gallery-20.jpg', title: 'Illustration', desc: 'Look development combining digital illustration with tactile swatches' },
  { id: 21, src: '/images/gallery/gallery-21.jpg', title: '"Imprisonment"', desc: 'Gritty lighting emphasizing the raw edges of the "Imprisonment" dress' },
  { id: 22, src: '/images/gallery/gallery-22.jpg', title: 'Illustration', desc: 'Illustration and swatch exploration inspired by organic forms' },
  { id: 23, src: '/images/gallery/gallery-23.jpg', title: 'Urban Silhouette', desc: 'Monochrome structural sketch with extended strap detailing' },
  { id: 24, src: '/images/gallery/gallery-24.jpg', title: 'Tactile Moodboard', desc: 'Mixed media and red thread mapping the chaos of the collection process' },
  { id: 25, src: '/images/gallery/gallery-25.jpg', title: '"Imprisonment"', desc: 'Long-exposure monochromatic study of exaggerated, puffy silhouettes' },
  { id: 26, src: '/images/gallery/gallery-26.jpg', title: '"Imprisonment"', desc: 'Kinetic photography capturing the dynamic movement of draped fabrics' },
  { id: 27, src: '/images/gallery/gallery-27.jpg', title: 'Upcycled Concept', desc: 'Conceptual collage silhouette constructed entirely from reclaimed materials' },
  { id: 28, src: '/images/gallery/gallery-28.jpg', title: '"Imprisonment"', desc: 'Sculptural black and white study contrasting the human form with raw textiles' },
  { id: 29, src: '/images/gallery/gallery-29.jpg', title: '"Imprisonment"', desc: 'Multiple exposure portrait exploring dark, fringed garment dynamics' },
  { id: 30, src: '/images/gallery/gallery-30.jpg', title: 'Illustration', desc: 'Hand-painted floral textile design translated into an A-line illustration' },
  { id: 31, src: '/images/gallery/gallery-31.jpg', title: 'Technical Drafting', desc: 'Precision flats featuring traditional knot closures and cuff variations' },
  { id: 32, src: '/images/gallery/gallery-32.jpg', title: '"Imprisonment"', desc: 'Editorial portrait highlighting frayed edges and avant-garde makeup design' },
  { id: 33, src: '/images/gallery/gallery-33.jpg', title: 'Annotated Silhouette', desc: 'Expressive charcoal form study with detailed construction annotations' },
  { id: 34, src: '/images/gallery/gallery-34.jpg', title: '"Imprisonment"', desc: 'Conceptual double-exposure emphasizing translucent, veined fabric textures' },
  { id: 35, src: '/images/gallery/gallery-35.jpg', title: 'Illustration', desc: 'Stylized illustration focusing on contrasting textures and cinched waistlines' },
  { id: 36, src: '/images/gallery/gallery-36.jpg', title: '"Imprisonment"', desc: 'Asymmetrical runway silhouette demonstrating advanced Nuno felting' },
];



export const fashionExperience = [
  { year: '2025', title: 'Fashion Scout Armenia Polimoda Prize', role: 'Winner' },
  { year: '2025', title: 'TUMO Studios Internship Knitwear Collection', role: 'Brand: @h.lelenh' },
  { year: '2023', title: 'Photo Vogue Competition', role: 'Styling Assistant' },
  { year: '2023', title: 'Naira Khachatryan\'s Fashion Show "Nature Within"', role: 'Backstage Dresser' },
  { year: '2023', title: 'Sonya Avagyan\'s "Dragons" Collection', role: 'Assistant' },
];

export const handsOnExperience = [
  { year: '2025', title: 'Materials & Manipulation', instructor: 'Shanshan Ruan / TUMO' },
  { year: '2025', title: 'Hand-Lettering', instructor: 'Liza Rasskazova & Anna Khorash / TUMO' },
  { year: '2025', title: 'Contemporary Sashiko & Boro', instructor: 'Karina Tanabe Jones / TUMO' },
  { year: '2025', title: 'Uniform for Moscow Transport Museum', instructor: 'Tanmay Saxena / TUMO' },
  { year: '2025', title: 'Embroidery Tech Course', instructor: 'Mariam Gharibyan / TUMO' },
  { year: '2023', title: 'Bag Construction', instructor: 'Armin Sahakyan / TUMO' },
  { year: '2023', title: 'Machine Knitting Tech Course', instructor: 'Victoria Salmon / TUMO' },
  { year: '2023', title: 'Felt Bags: Design, Knitting, Dyeing', instructor: 'Diane Goignoux / TUMO' },
  { year: '2023', title: 'Embroidery Accessories', instructor: 'Mariam Gharibyan / TUMO' },
  { year: '2023', title: 'Fashion Sketching', instructor: 'Lili Mehrabyan / TUMO' },
  { year: '2023', title: 'Pattern Making Tech Course', instructor: 'Anna Rafaelyan / TUMO' },
  { year: '2023', title: 'Doll Making (Paper-Mache & Costume)', instructor: 'Susanna Alaverdyan' },
];

export const education = [
  { year: '2023—2025', title: 'TUMO Studios', desc: '' },
  { year: '2020—2023', title: 'Hayordyats Tun Cultural Center (Yerevan)', desc: 'Fine Arts' },
  { year: '2021—2023', title: 'Hayordyats Tun Cultural Center (Ejmiatsin)', desc: 'Fine Arts' },
  { year: '2020—2022', title: 'A. Margaryan High School No.29', desc: '' },
];


export const skills = ['Styling', 'Sketching', 'Crafting', 'Photography', 'Videography', 'Sewing', 'Hand Knitting', 'Machine Knitting', 'Crochet', 'Embroidery', 'Macrame'];
export const tools = ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'];
export const languages = ['Armenian (Native)', 'Russian (Native)', 'English (Advanced)', 'Portuguese (Intermediate)'];

export const certificates = [
  { 
    id: 1, 
    title: 'Fashion Scout Armenia: Polimoda Prize', 
    issuer: 'Yerevan Fashion Week & Fashion Scout', 
    year: '2025',
    pdfLink: '/pdfs/POLIMODA-PRIZE.pdf', 
    image: '/pdfs/POLIMODA-PRIZE.jpg' 
  },
  { 
    id: 2, 
    title: 'Outstanding Volunteer Contribution', 
    issuer: 'Naira Khachatryan - "Nature Within You"', 
    year: '2023',
    pdfLink: '/pdfs/Certificate-Helen.pdf', 
    image: '/pdfs/Certificate-Helen.jpg' 
  }
];