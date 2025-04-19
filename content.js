// content.js

const products = [
  // Shoes
  {
    id: 1,
    name: "Max 270",
    preview: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSzFOi0sPHeP8Qfhssj91KdPyl_CDg3mgwAS88nCTRFYN7hjW6fS4rQdpj4iPb_x0REJrhh2sm1g43o4LReFgnYtxFisACOPwVNRuywPHTJeNaD4CNOe5RcsA",
    photos: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSzFOi0sPHeP8Qfhssj91KdPyl_CDg3mgwAS88nCTRFYN7hjW6fS4rQdpj4iPb_x0REJrhh2sm1g43o4LReFgnYtxFisACOPwVNRuywPHTJeNaD4CNOe5RcsA",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRegE3OVi0q9OzQl4FO9g8kFm5g_Hr1ypVCuVBXMyicsTAnu8cEVM0GngofWFA-zVBOzSVcNPF0i1IKiQ5WRQHEeBy49AvX2WlS33UOzcv4fUB3J_Ht0kEAkw",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSXmo_6yAlz4u-k0Yz6fkX08omsy1FQIW98gWeGobumzj6v81YAKDhdYdH1KLUGSGYPYDaA0uvf_exFQT7G3wLS-f0ch5BefAsmRrL6rLQLln6VUlWib8d0BH8"

    ],
    description: "Elite Kicks's first lifestyle Max 270 brings you style, comfort, and big attitude.",
    brand: "Elite Kicks",
    price: 160,
    isAccessory: false
  },
  {
    id: 2,
    name: "Ultraboost 22",
    preview: "https://www.shooos.com/media/catalog/product/cache/2/image/1350x778/9df78eab33525d08d6e5fb8d27136e95/a/d/adidas-ultraboost-22-w-gx55911.jpg",
    photos: [
      "https://www.shooos.com/media/catalog/product/cache/2/image/1350x778/9df78eab33525d08d6e5fb8d27136e95/a/d/adidas-ultraboost-22-w-gx55911.jpg"
    ],
    description: "Responsive Boost cushioning and a sock-like upper crafted from recycled materials.",
    brand: "Elite Kicks",
    price: 190,
    isAccessory: false
  },
  {
    id: 3,
    name: "RS-X3",
    preview: "https://cdn-images.farfetch-contents.com/18/06/94/78/18069478_38511887_2048.jpg",
    photos: [
      "https://cdn-images.farfetch-contents.com/18/06/94/78/18069478_38511887_2048.jpg",
      "https://cdn-images.farfetch-contents.com/18/06/94/78/18069478_38511880_2048.jpg",
      "https://cdn-images.farfetch-contents.com/18/06/94/78/18069478_38511891_2048.jpg",
      "https://cdn-images.farfetch-contents.com/18/06/94/78/18069478_38511885_2048.jpg"
    ],
    description: "Bold and retro-inspired design with modern-day chunkiness.",
    brand: "Elite Kicks",
    price: 110,
    isAccessory: false
  },
  {
    id: 4,
    name: "574",
    preview: "https://nb.scene7.com/is/image/NB/ml574evw_nb_02_i?$pdpflexf2$&wid=440&hei=440",
    photos: [
      "https://nb.scene7.com/is/image/NB/ml574evw_nb_02_i?$pdpflexf2$&wid=440&hei=440",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQa0hGbpjwq5bFz41VQm-4KAyQ5NJXVrQq0HbKDo6laM2aF45FZLF9uYq0jgwwNpiiNH5pK-OHM_VISwX1YiKog90V6K2p_WY8USftPnpSV9spMHLAysph",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSjItxB9cf5581x4wXX8eeaOlFim-quWFovsDqm1EtYyuReyqlFanLw5CI8502nRBmiV5nefS9277SaAPDF-cx_9ztenveJdqemQ0VPHHTVA2mr117mvMGr"
    ],
    description: "Classic design pairs perfectly with almost any outfit.",
    brand: "Elite Kicks",
    price: 85,
    isAccessory: false
  },
  {
    id: 5,
    name: "Chuck Taylor All Star",
    preview: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSCZ0V_XNylusfW-ef31PNbPMPUbwE_wVNb13baBZmJ-kDhOvjXCbnfw9VZIC1oDdfideWcFAC05nNz9DoxjJzl8BsJvcl6mANfHc95CqYOpO_CLl7462TODQ",
    photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSCZ0V_XNylusfW-ef31PNbPMPUbwE_wVNb13baBZmJ-kDhOvjXCbnfw9VZIC1oDdfideWcFAC05nNz9DoxjJzl8BsJvcl6mANfHc95CqYOpO_CLl7462TODQ",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRoB8BK5C01ZwAEOy4ok9z6xxw-mJMqgaUz2llLSR25KYbTAB4GGSGXlI1V129AaSJ8FLUs-0oPzI6_SQXm5Iukuy2WVFEI-0XycyiWahmg-JFu6AiTXLm4",
      ""
    ],
    description: "The most iconic and timeless silhouette.",
    brand: "Elite Kicks",
    price: 65,
    isAccessory: false
  },

  // Watches
  {
    id: 6,
    name: "Watch 1",
    preview: "https://i5.walmartimages.com/seo/Apple-Watch-Series-9-GPS-45mm-Smartwatch-Starlight-Aluminum-Case-Starlight-Sport-Band-M-L-Fitness-Tracker-ECG-Apps-Always-On-Retina-Display-Water-Res_bb1e67be-1a60-47fd-ac84-24c8b518944f.6bb4742b837920f9c126a57efb4addb8.jpeg",
    photos: [
      "https://i5.walmartimages.com/seo/Apple-Watch-Series-9-GPS-45mm-Smartwatch-Starlight-Aluminum-Case-Starlight-Sport-Band-M-L-Fitness-Tracker-ECG-Apps-Always-On-Retina-Display-Water-Res_bb1e67be-1a60-47fd-ac84-24c8b518944f.6bb4742b837920f9c126a57efb4addb8.jpeg",
      "https://i5.walmartimages.com/asr/39a02574-7eb2-4acf-aa65-45dfea32956a.9a759c6020aef963aa58da82430de56b.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/f8ce5c91-2d57-4353-a97b-4e99cfe8e23f.927051ea57f463cf7d944547799ff952.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/b0327c53-3ab6-4943-bf73-2b2abad07cdb.bdb00803dc7077ecaaa2c8450de6effa.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
    ],
    description: "Advanced health features, including ECG and blood oxygen apps.",
    brand: "Elite Time",
    price: 399,
    isAccessory: true
  },
  {
    id: 7,
    name: "Watch x6",
    preview: "https://m.media-amazon.com/images/I/711f6KLsMaL.jpg",
    photos: [
      "https://m.media-amazon.com/images/I/711f6KLsMaL.jpg",
      "https://m.media-amazon.com/images/I/61Zk7b7JfdL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71771hYa36L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61Dwyhti4xL._AC_SL1500_.jpg"
    ],
    description: "Sleek design with advanced fitness tracking features.",
    brand: "Elite Time",
    price: 299,
    isAccessory: true
  },
  {
    id: 8,
    name: "Forerunner 265",
    preview: "https://res.garmin.com/transform/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_400,q_auto,w_400/c_pad,h_400,w_400/v1/Product_Images/en/products/010-02810-01/v/cf-xl?pgw=1",
    photos: [
      "https://res.garmin.com/transform/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_400,q_auto,w_400/c_pad,h_400,w_400/v1/Product_Images/en/products/010-02810-01/v/cf-xl?pgw=1"
    ],
    description: "High-performance GPS running smartwatch with AMOLED display.",
    brand: "Elite Time",
    price: 449,
    isAccessory: true
  },
  {
    id: 9,
    name: "Gen 10 Smartwatch",
    preview: "https://fossil.scene7.com/is/image/FossilPartners/FTW4061_main?$sfcc_fos_large$",
    photos: [
      "https://fossil.scene7.com/is/image/FossilPartners/FTW4061_main?$sfcc_fos_large$"
    ],
    description: "Stylish smartwatch with advanced health features.",
    brand: "Elite Time",
    price: 299,
    isAccessory: true
  },
  {
    id: 10,
    name: "Cross 4 fit",
    preview: "https://m.media-amazon.com/images/I/61CZSoSnVPL.jpg",
    photos: [
      "https://m.media-amazon.com/images/I/61CZSoSnVPL.jpg",
      "https://m.media-amazon.com/images/I/71rINRiSQ6L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61Bnhgku4zL._AC_SL1500_.jpg"
    ],
    description: "Fitness smartwatch with built-in GPS and heart rate tracking.",
    brand: "Elite Time",
    price: 229,
    isAccessory: true
  }
];

// Inject product count to badge if cookie exists
if (document.cookie.indexOf(",counter=") >= 0) {
  const counter = document.cookie.split(",")[1].split("=")[1];
  document.getElementById("badge").innerText = counter;
}

// Render products
function dynamicProductBox(product) {
  const boxDiv = document.createElement("div");
  boxDiv.id = "box";

  const boxLink = document.createElement("a");
  boxLink.href = "/contentDetails.html?" + product.id;

  const imgTag = document.createElement("img");
  imgTag.src = product.preview;

  const detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  const h3 = document.createElement("h3");
  h3.innerText = product.name;

  const h4 = document.createElement("h4");
  h4.innerText = product.brand;

  const h2 = document.createElement("h2");
  h2.innerText = "$ " + product.price;

  detailsDiv.append(h3, h4, h2);
  boxLink.append(imgTag, detailsDiv);
  boxDiv.appendChild(boxLink);

  return boxDiv;
}

const containerShoes = document.getElementById("containerClothing");
const containerWatches = document.getElementById("containerAccessories");

for (let product of products) {
  const section = product.isAccessory ? containerWatches : containerShoes;
  section.appendChild(dynamicProductBox(product));
}
