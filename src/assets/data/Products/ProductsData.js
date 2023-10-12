const productos = [
    {
        id: 1,
        name: "AORUS Geforce RTX 4060 ELITE 8GB",
        value: 200,
        garantía: "2 años",
        category: "grafica",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/72a267cbdd03018f5e41c9a0a0b37dc2/Product/35397/webp/400"
    },
    {
        id: 2,
        name: "AORUS GeForce RTX 4080 16GB MASTER",
        value: 170,
        garantía: "1 año",
        category: "grafica",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/acb001b5080604b2ccc5107fec8c8305/Product/32836/webp/400"
    },
    {
        id: 3,
        name: "AORUS GeForce RTX 4090 XTREME WATERFORCE 24GB",
        value: 300,
        garantía: "2 años",
        category: "grafica",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/35b0cbd3888b6fe9de7ece82930b90f6/Product/32764/webp/400"
    },
    {
        id: 4,
        name: "AORUS RX 6950XT XTREME WATERFORCE WB 16G",
        value: 350,
        garantía: "2 años",
        category: "grafica",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/1575ca3107ada01c47255e7580a30d42/Product/31524/webp/400"
    },
    {
        id: 5,
        name: "AORUS 7 (2023)Laptop",
        value: 250,
        garantía: "2 años",
        category: "laptop",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/0f3955bd225d3fa6b7476b1ee3b34297/Product/34341/webp/400"
    },
    {
        id: 6,
        name: "AORUS 15 (2023)Laptop",
        value: 150,
        garantía: "1 año",
        category: "laptop",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/b13ab75aa632f0c6325d71141b78c02a/Product/33680/webp/400"
    },
    {
        id: 7,
        name: "AORUS 17 (2023)Laptop",
        value: 270,
        garantía: "2 años",
        category: "laptop",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/4ccdb8199833c4f2e9e99ecb9a5c7b97/Product/33668/webp/400"
    },
    {
        id: 8,
        name: "AORUS 17X (2023)Laptop",
        value: 300,
        garantía: "2 años",
        category: "laptop",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/fd002201f5d15316c3e12bdb0923bc5b/Product/33171/webp/400"
    },
    {
        id: 9,
        image: "https://static.gigabyte.com/StaticFile/Image/Global/f1a72b696c30f8a944696802c941fa86/Product/22038/webp/400",
        name: "AORUS CV27F Gaming Monitor",
        value: 60,
        garantía: "1 año",
        category: "monitor",
    },
    {
       id: 10,
       image: "https://static.gigabyte.com/StaticFile/Image/Global/93e708041b91c346ce74c31c06db98c7/Product/29488/webp/400",
       name: "AORUS F048U Gaming Monitor",
       value: 90,
       garantía: "1 año",
       category: "monitor",
    },
    {
        id: 11,
        image: "https://static.gigabyte.com/StaticFile/Image/Global/f0a5c0827937b55d81bd6b0c105779e3/Product/23277/webp/400",
        name: "AORUS FI27Q Gaming Monitor",
        value: 110,
        garantía: "2 años",
        category: "monitor"
     },
     {
        id: 12,
        image: "https://static.gigabyte.com/StaticFile/Image/Global/a78c26693627c1dfc76ba75747af8862/Product/28809/webp/400",
        name: "AORUS FI32U Gaming Monitor",
        value: 120,
        garantía: "1 año",
        category: "monitor",
     },
     {
        id: 13,
        image: "https://static.gigabyte.com/StaticFile/Image/Global/6573ed208d8ebd3d85a7880d9981f33a/Product/36685/webp/400",
        name: "Motherboard B550M AORUS ELITE AX. V2",
        value: 150,
        garantía: "2 años",
        category: "motherboard",
     },
     {
        id: 14,
        image: "https://static.gigabyte.com/StaticFile/Image/Global/131f42783180d1e8d7f0b025174a6526/Product/36921/webp/400",
        name: "Motherboard Z790 AORUS PRO X",
        value: 100,
        garantía: "1 año",
        category: "motherboard",
     },
     {
        id: 15,
        image: "https://static.gigabyte.com/StaticFile/Image/Global/21d9a483a8e6899fa2767ef8c7727711/Product/36673/webp/400",
        name: "Motherboard Z790 AORUS ELITE X WIFI",
        value: 80,
        garantía: "3 años",
        category: "motherboard",
     },
     {
        id: 16,
        image: "https://static.gigabyte.com/StaticFile/Image/Global/c436d805400a1386b3b28e8d15f21461/Product/19221/webp/400",
        name: "Gaming Chair AGC300",
        value: 150,
        garantía: "1 año",
        category: "periferico",
     },
     {
        id: 17,
        image: "https://static.gigabyte.com/StaticFile/Image/Global/12b8c58e19caf1b4b8a6660e6cacd8f9/Product/29154/webp/400",
        name: "Gaming Chair AGC310",
        value: 170,
        garantía: "1 año",
        category: "periferico",
     },
     {
        id: 18,
        image: "https://static.gigabyte.com/StaticFile/Image/Global/d6166356ea106094c895b3b473686010/Product/24798/webp/400",
        name: "AORUS K1 KEYBOARD",
        value: 100,
        garantía: "2 años",
        category: "periferico",
     },
     {
        id: 19,
        image: "https://static.gigabyte.com/StaticFile/Image/Global/5db4535c2cb6f167ec90827f73e1e669/Product/18150/webp/400",
        name: "AORUS K7 KEYBOARD",
        value: 130,
        garantía: "2 años",
        category: "periferico",
     },
     {
        id: 20,
        image: "https://static.gigabyte.com/StaticFile/Image/Global/e2442b80f054e0eb7bd35d6af97eee89/Product/18856/webp/400",
        name: "AORUS K9 Optical KEYBOARD",
        value: 170,
        garantía: "3 años",
        category: "periferico",
     },
     {
        id: 21,
        image: "https://static.gigabyte.com/StaticFile/Image/Global/96b00bb50b1f38890809d4dd43d85e1b/Product/21986/webp/400",
        name: "AORUS M4 Gaming Mouse",
        value: 90,
        garantía: "2 años",
        category: "periferico",
     },
     {
        id: 22,
        image: "https://static.gigabyte.com/StaticFile/Image/Global/985c0c3fac271548ad40da53f97fbf67/Product/21988/webp/400",
        name: "AORUS M5 Gaming Mouse",
        value: 120,
        garantía: "3 años",
        category: "periferico",
     },
]

export const TotalProducts = productos.length

export const Products = productos.reduce((acc, producto) => {
   if(!acc[producto.category]) {
      acc[producto.category] = [];
   }


   acc[producto.category] = [...acc[producto.category], producto];

   return acc;
}, {});

