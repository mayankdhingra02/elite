// content.js

const products = [
  // Shoes
  {
    id: 1,
    name: "Max 270",
    preview: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQpzVE9-ZfvD5jVDfz-Fs9hDFDIgQiTIk8GKEltjGM_H8kzfpgWSxQ0s38y0GzcVC94qKW5XlaXmGfuyikElKNAgo79xFZ9MXkkRCKhpy0u3oypYR1I9gzxc_s",
    photos: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQpzVE9-ZfvD5jVDfz-Fs9hDFDIgQiTIk8GKEltjGM_H8kzfpgWSxQ0s38y0GzcVC94qKW5XlaXmGfuyikElKNAgo79xFZ9MXkkRCKhpy0u3oypYR1I9gzxc_s",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSPqwLJu7H-5fYyv6txT0YCh7smpEswgbfXynhUWksT372GeZmPieyuOlZJ9W2LsSeX22b2ZOyOAEK_e5ecEdicLROmcagqK-H9F3u58xfdwfI-csdSImMnwpE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ_FlklpRnn00ktDIGzW_Ck0LDobPa9vUv3vIbKaDilvFOXJJORr_sSAK3S8VAPGKFd2uCIN8VArR-MXZlQt7XHWQRzDhw3scGCdx5DgGz4oq-uoF9NlSVcbx4",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ6bLtba82OmIdkkNOiqzUWsSUjDjW05RH_fF3ecl0c57NNphg9y98fodZp29BdNICLupz2PJWR5N061dcm1hzUO7LLsivozDyHDYbN3z9D8cP2cJVwtAAOZw"

    ],
    description: "Step into sophistication with the Elite Kicks Executive Gloss Derby — a polished black lace-up designed for sharp dressers and bold impressions. Crafted with high-shine synthetic leather and clean stitch detailing, these shoes offer a sleek silhouette perfect for boardrooms, black-tie events, or upscale evenings out.The cushioned insole ensures day-long comfort, while the tapered toe and durable sole deliver both style and structure. Whether paired with a suit or dressed down with chinos, this shoe is built to impress.",
    brand: "Elite Kicks",
    price: 160,
    isAccessory: false
  },
  {
    id: 2,
    name: "Ultraboost 22",
    preview: "https://m.media-amazon.com/images/I/51WpZbC4dsL._AC_SY695_.jpg",
    photos: [
      "https://m.media-amazon.com/images/I/51WpZbC4dsL._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/61eBo6KD9OL._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/61fog69MaRL._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/61N4DXxZdFL._AC_SY695_.jpg"
    ],
    description: "Timeless charm meets modern craftsmanship in the Elite Kicks Oxford Brogue Classic. Designed with intricate perforated detailing and elegant wingtip styling, this lace-up dress shoe is perfect for refined professionals and style-conscious gentlemen. Made with polished synthetic leather and a low stacked heel, it delivers a sharp silhouette and all-day comfort — whether you're in the office, at a wedding, or commanding the boardroom.",
    brand: "Elite Kicks",
    price: 190,
    isAccessory: false
  },
  {
    id: 3,
    name: "RS-X3",
    preview: "https://giovannifootwear.com/wp-content/uploads/2020/10/product-image-1423866123.jpg",
    photos: [
      "https://giovannifootwear.com/wp-content/uploads/2020/10/product-image-1423866123.jpg",
      "https://giovannifootwear.com/wp-content/uploads/2020/10/product-image-1423866127.jpg",
      "https://giovannifootwear.com/wp-content/uploads/2020/10/product-image-1021788423.jpg",
    ],
    description: "Make a bold, effortless statement with the Elite Kicks Vintage Tassel Loafers — a refined slip-on silhouette that merges heritage design with modern comfort. Crafted in rich, burnished brown leather and finished with hand-stitched detailing and twin tassels, these loafers are perfect for days when you want to dress sharp without laces. Ideal for semi-formal events, evening outings, or even a confident office look, this pair delivers elegance with edge — pairing perfectly with chinos, trousers, or rolled-up jeans.",
    brand: "Elite Kicks",
    price: 110,
    isAccessory: false
  },
  {
    id: 4,
    name: "574",
    preview: "https://m.media-amazon.com/images/I/61yipaox4+L._AC_SY695_.jpg",
    photos: [
      "https://m.media-amazon.com/images/I/61yipaox4+L._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/71Ba4hFv5gL._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/714plbtgWHL._AC_SY695_.jpg",
      "http://m.media-amazon.com/images/I/71Agqi7TNBL._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/71Nw46O73fL._AC_SY695_.jpg"
    ],
    description: "Meet the Elite Kicks Urban Combat Derby — where classic derby structure meets bold, street-style attitude. Built with a matte black leather finish and grounded by a thick, lugged sole, this pair is made for those who walk with confidence and edge. Whether you're heading to a gig, styling an all-black fit, or just need a shoe that doesn't mess around, this derby gets the job done — durable, unapologetic, and endlessly versatile.",
    brand: "Elite Kicks",
    price: 85,
    isAccessory: false
  },
  {
    id: 5,
    name: "Chuck Taylor All Star",
    preview: "https://m.media-amazon.com/images/I/61cfBH0kkyL._AC_SY695_.jpg",
    photos: [
      "https://m.media-amazon.com/images/I/61cfBH0kkyL._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/61ZNKAIQ8mL._AC_SY695_.jpg",
      "https://m.media-amazon.com/images/I/61kxmKY9wXL._AC_SY695_.jpg"
    ],
    description: "Elevate your everyday elegance with the Elite Kicks Classic Block Heels — designed for women who blend confidence with comfort. With a clean rounded toe, smooth black finish, and easy slip-on fit, these heels are your go-to for everything from office hours to evening outings.",
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
