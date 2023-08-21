// import i from '../../src/assets/images'
const products = [
  {
    id: 0,
    text: "GRADVIS",
    type: "Vase",
    size: '21 cm (8 1/4 ")',
    rating: "3",
    reviews: "274",
    options: "2",
    img: "/images/vase.jpg",
    price: "16.99",
    desc: "Subdued colours, round shapes and beautiful grooves – GRADVIS vase gives your home a slightly softer and warmer feel. Enhance your favourite flowers or just let it stand beautifully on its own.",
    articleNum: "705.451.92",

    options: [
      {
        id1: 0,
        img1: "/images/vase.jpg",
        examples: [
          { id2: 0, img2: "/images/examples/vase.jpg" },
          { id2: 1, img2: "/images/examples/vase-blue-1.jpg" },
          { id2: 2, img2: "/images/examples/vase-blue-2.jpg" },
          { id2: 3, img2: "/images/examples/vase-blue-3.jpg" },
        ],
      },
      {
        id1: 1,
        img1: "/images/vase-pink.jpg",
        examples: [
          { id2: 0, img2: "/images/examples/vase-pink.jpg" },
          { id2: 1, img2: "/images/examples/vase-pink-1.png" },
          { id2: 2, img2: "/images/examples/vase-pink-2.png" },
          { id2: 3, img2: "/images/examples/vase-pink-3.png" },
          { id2: 4, img2: "/images/examples/vase-pink-4.png" },
        ],
      },
    ],
  },
  {
    id: 1,
    text: "GURLI",
    type: "Cushion cover",
    size: '50x50 cm (20x20")',
    rating: "5",
    reviews: "274",
    options: "2",
    img: "/images/green-pillow.jpg",
    price: "4.99",
    desc: "Subdued colours, round shapes and beautiful grooves – GRADVIS vase gives your home a slightly softer and warmer feel. Enhance your favourite flowers or just let it stand beautifully on its own.",
    articleNum: "705.451.92",
    options: [
      {
        id1: 0,
        img1: "/images/vase.jpg",
        examples: [
          { id2: 0, img2: "/images/examples/vase.jpg" },
          { id2: 1, img2: "/images/examples/vase-blue-1.jpg" },
          { id2: 2, img2: "/images/examples/vase-blue-2.jpg" },
          { id2: 3, img2: "/images/examples/vase-blue-3.jpg" },
        ],
      },
      {
        id1: 1,
        img1: "/images/vase-pink.jpg",
        examples: [
          { id2: 1, img2: "/images/examples/vase-pink-1.jpg" },
          { id2: 2, img2: "/images/examples/vase-pink-2.jpg" },
        ],
      },
    ],
  },
  // {
  //   id: 2,
  //   text: "KLIPPAN",
  //   type: "Loveseat",
  //   size: "",
  //   rating: "2",
  //   reviews: "274",
  //   options: "2",
  //   img: "/images/sofa.jpg",
  //   price: "479.00",
  //   examples: [
  //     { id1: 1, img1: "/images/examples/vase.jpg" },
  //     { id1: 2, img2: "/images/examples/vase-pink.jpg" },
  //   ],
  //   options: [
  //     { id2: 0, img: "/images/vase.jpg" },
  //     { id2: 1, img: "/images/vase-pink.jpg" },
  //   ],
  // },
  // {
  //   id: 3,
  //   text: "HALVTOM",
  //   type: "Bottle with pour spout",
  //   size: '19cn (7 1/2")',
  //   rating: "4",
  //   reviews: "4",
  //   options: "0",
  //   img: "/images/bottle.jpg",
  //   price: "4.99",
  //   examples: [
  //     { id1: 1, img1: "/images/examples/vase.jpg" },
  //     { id1: 2, img2: "/images/examples/vase-pink.jpg" },
  //   ],
  //   options: [
  //     { id2: 0, img: "/images/vase.jpg" },
  //     { id2: 1, img: "/images/vase-pink.jpg" },
  //   ],
  // },
  // {
  //   id: 4,
  //   text: "KNARREVIK",
  //   type: "Nightstand",
  //   size: '37x28 cm (14 5/8x11")',
  //   rating: "45",
  //   reviews: "1012",
  //   options: "2",
  //   img: "/images/table.jpg",
  //   price: "17.99",
  //   examples: [
  //     { id1: 1, img1: "/images/examples/vase.jpg" },
  //     { id1: 2, img2: "/images/examples/vase-pink.jpg" },
  //   ],
  //   options: [
  //     { id2: 0, img: "/images/vase.jpg" },
  //     { id2: 1, img: "/images/vase-pink.jpg" },
  //   ],
  // },

  // {
  //   id: 5,
  //   text: "LIVBOJ",
  //   type: "Wireless charger",
  //   size: "",
  //   rating: "3",
  //   reviews: "543",
  //   options: "1",
  //   img: "/images/charger.jpg",
  //   price: "479.00",
  //   examples: [
  //     { id1: 1, img1: "/images/examples/vase.jpg" },
  //     { id1: 2, img2: "/images/examples/vase-pink.jpg" },
  //   ],
  //   options: [
  //     { id2: 0, img: "/images/vase.jpg" },
  //     { id2: 1, img: "/images/vase-pink.jpg" },
  //   ],
  // },

  // {
  //   id: 6,
  //   text: "DRÖNA",
  //   type: "Box",
  //   size: '33x38x33 cm (13x15x13")',
  //   rating: "4",
  //   reviews: "5771",
  //   options: "5",
  //   img: "/images/box.jpg",
  //   price: "7.99",

  //   examples: [
  //     { id1: 1, img1: "/images/examples/vase.jpg" },
  //     { id1: 2, img2: "/images/examples/vase-pink.jpg" },
  //   ],
  //   options: [
  //     { id2: 0, img: "/images/vase.jpg" },
  //     { id2: 1, img: "/images/vase-pink.jpg" },
  //   ],
  // },
];
export default products;
