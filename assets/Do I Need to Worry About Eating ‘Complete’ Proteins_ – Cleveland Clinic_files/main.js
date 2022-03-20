// Element Selector
function getElement(ele) {
  let elem = document.querySelector(ele) || {};
  return elem
}

// Text Resizing
function resizeText(element) {
  // Get Resizing Values
  var maxSize = Number(element.dataset.maxSize)
  var altMaxSize = Number(element.dataset.altMaxSize) || 0;
  var minSize = Number(element.dataset.minSize)
  var maxLines = Number(element.dataset.maxLines)
  var leading = Number(element.dataset.leading) || 0


  if (!maxSize || !minSize || !maxLines) {
    let err = `${element.id} is missing required resizing attributes`
    console.error(err)
  } else {
    // Set Initial Sizing
    if (altMaxSize > 0) {
      element.style.fontSize =  altMaxSize+'px'
      element.style.lineHeight =  altMaxSize+'px'
      if (element.clientHeight/altMaxSize > 1) {
        element.style.fontSize =  maxSize+'px'
        element.style.lineHeight =  maxSize+'px'
      }
    } else {
      element.style.fontSize =  maxSize+'px'
      element.style.lineHeight =  maxSize+'px'
    }


    // Resize Text if conditions met
    while (maxSize > minSize && (element.clientHeight/maxSize > maxLines)) {
      maxSize--
      element.style.fontSize =  maxSize+'px'
      element.style.lineHeight =  maxSize+'px'
    };

    // Adjust Final Padding
    element.style.lineHeight = (Number(maxSize) + Number(leading))+'px';
  }
};

function formatOfferValues(str) {
  let formatStr = str
  formatStr = formatStr.replace(/\[/g,'<span class="red">');
  formatStr = formatStr.replace(/\]/g,'</span>');
  return formatStr;
}


function buildAd(data) {

  // Set Orientation
  getElement("body").classList.add(adData.orientation)

  // Define Elements
  var clickTag = getElement("#click-area");
  var headline = getElement("#headline");
  var subhead = getElement("#subhead");
  var productImage = getElement("#product-image");
  var cta = getElement("#cta");
  var ctaText = getElement("#cta-text");
  var disclaimerBtn = getElement("#disclaimer-button");
  var disclaimer = getElement("#disclaimer-box");
  var disclaimerText = getElement("#disclaimer-text");

  // SET AND SIZE COPY
  headline.innerHTML = formatOfferValues(data.headlineText);
  subhead.innerHTML = formatOfferValues(data.subheadText);
  ctaText.innerHTML = data.ctaText;
  resizeText(headline);
  resizeText(subhead);

  // SET PRODUCT IMAGE
  productImage.style.backgroundImage = `url(${data.productImage})`

  // SET DISCLAIMER
  console.log(adData.details.length)
  if (adData.details.length > 2) {
    disclaimerText.innerHTML = adData.details;
  } else {
    disclaimerBtn.style.display = "none";
  }


  // SET CLICK EVENTS

  disclaimerBtn.addEventListener('click',function(){
    disclaimer.style.display = "block"
  });
  disclaimer.addEventListener('click',function(){
    disclaimer.style.display = "none"
  });


  //customizer(eligableProducts,size);

  animateAd();


}

