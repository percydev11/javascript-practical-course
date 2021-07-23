function calculatePriceWithDiscount(originalPrice, percentDiscount) {
  const percentPriceWithDiscount = 100 - percentDiscount;

  const priceWithDiscount = (originalPrice * percentPriceWithDiscount) / 100;

  return priceWithDiscount;
}

//Array of objects with name and discount value of the coupons
const coupons = [
  { name: "Fonta_Gurt", discount: 15 },
  { name: "Alpine", discount: 30 },
  { name: "Parmalat", discount: 25 },
];

function priceWithDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  //Validate the user's coupon against the array
  const isCouponValid = function (coupon) {
    return coupon.name === couponValue;
  };

  //Variable with name and discount value
  const userCoupon = coupons.find(isCouponValid);

  if (!userCoupon) {
    alert("The coupon " + couponValue + " is invalid");
  } else {
    const discount = userCoupon.discount;
    const priceMinusDiscount = calculatePriceWithDiscount(priceValue, discount);
    const resultPrice = document.getElementById("ResultPrice");
    //Write in HTML with innerText
    resultPrice.innerText = "The price with discount is = $" + priceMinusDiscount;
  }
}


