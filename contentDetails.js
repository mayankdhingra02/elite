// contentDetails.js

console.clear();

// ✅ 1. Extract ID from URL
const id = parseInt(location.search.split('?')[1]);

// ✅ 2. Use the global `products` array from content.js
const selectedProduct = products.find(p => p.id === id);

// ✅ 3. Update cart badge if needed
if (document.cookie.indexOf(',counter=') >= 0) {
  const counter = document.cookie.split(',')[1].split('=')[1];
  document.getElementById("badge").innerHTML = counter;
}

// ✅ 4. Render details
function dynamicContentDetails(ob) {
  let mainContainer = document.createElement('div');
  mainContainer.id = 'containerD';
  document.getElementById('containerProduct').appendChild(mainContainer);

  let imageSectionDiv = document.createElement('div');
  imageSectionDiv.id = 'imageSection';

  let imgTag = document.createElement('img');
  imgTag.id = 'imgDetails';
  imgTag.src = ob.preview;
  imageSectionDiv.appendChild(imgTag);

  let productDetailsDiv = document.createElement('div');
  productDetailsDiv.id = 'productDetails';

  let h1 = document.createElement('h1');
  h1.innerText = ob.name;

  let h4 = document.createElement('h4');
  h4.innerText = ob.brand;

  let detailsDiv = document.createElement('div');
  detailsDiv.id = 'details';

  let h3DetailsDiv = document.createElement('h3');
  h3DetailsDiv.innerText = '$ ' + ob.price;

  let h3 = document.createElement('h3');
  h3.innerText = 'Description';

  let para = document.createElement('p');
  para.innerText = ob.description;

  let productPreviewDiv = document.createElement('div');
  productPreviewDiv.id = 'productPreview';

  let h3Preview = document.createElement('h3');
  h3Preview.innerText = 'Product Preview';
  productPreviewDiv.appendChild(h3Preview);

  ob.photos.forEach(photo => {
    let previewImg = document.createElement('img');
    previewImg.id = 'previewImg';
    previewImg.src = photo;
    previewImg.onclick = function () {
      imgTag.src = this.src;
    };
    productPreviewDiv.appendChild(previewImg);
  });

  let buttonDiv = document.createElement('div');
  buttonDiv.id = 'button';

  let buttonTag = document.createElement('button');
  buttonTag.innerText = 'Add to Cart';
  buttonTag.onclick = function () {
    let order = id + " ";
    let counter = 1;

    if (document.cookie.indexOf(',counter=') >= 0) {
      order = id + " " + document.cookie.split(',')[0].split('=')[1];
      counter = Number(document.cookie.split(',')[1].split('=')[1]) + 1;
    }

    document.cookie = "orderId=" + order + ",counter=" + counter;
    document.getElementById("badge").innerText = counter;
  };
  buttonDiv.appendChild(buttonTag);

  // Add to DOM
  mainContainer.appendChild(imageSectionDiv);
  mainContainer.appendChild(productDetailsDiv);
  productDetailsDiv.append(h1, h4, detailsDiv, productPreviewDiv, buttonDiv);
  detailsDiv.append(h3DetailsDiv, h3, para);
}

// ✅ 5. Call the render function if product exists
if (selectedProduct) {
  dynamicContentDetails(selectedProduct);
} else {
  document.getElementById('containerProduct').innerText = "Product not found.";
}
