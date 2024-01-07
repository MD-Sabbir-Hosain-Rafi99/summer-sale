let sum = 0;
function buyNow(target){
  const selectItems = document.getElementById('selected-item')
  const productItems = target.parentNode.childNodes[3].innerText;
  const li = document.createElement('li');
  li.innerHTML = productItems;
  selectItems.appendChild(li);

  // Price calculation
  // const productPrice = target.parentNode.childNodes[4].innerText;
  // console.log(productPrice);
  const productPrice = target.parentNode.childNodes[5].innerText.split(" ")[2];
  sum = parseInt(sum) + parseInt(productPrice);
  document.getElementById('total-price').innerText = sum;

}

function apply(){
  // Apply
 const applyField = document.getElementById('coupon-code-field');
 const applyFieldValue = applyField.value;
 if (applyFieldValue === 'sell200') {
  const discountPrice = (20/100) * sum;
  const finalDiscountPrice = sum - discountPrice;
  document.getElementById('discount-price').innerText = discountPrice;
  document.getElementById('final-price').innerText = finalDiscountPrice;
 }
 
}




