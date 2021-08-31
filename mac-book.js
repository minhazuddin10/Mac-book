// memory
function sixteenGBMemory(memoryPrice) {
    const extraMemoryPrice = document.getElementById("extra-memory-price");
    const newExtraMemoryPrice = parseFloat(extraMemoryPrice.innerText);
    if (memoryPrice == 180) {
      extraMemoryPrice.innerText = memoryPrice;
    } else {
      extraMemoryPrice.innerText = 0;
    }
    return extraMemoryPrice;
  }
  // storage
  function ssdStorage512GB(ssdprice) {
    const extraStoragePrice = document.getElementById("extra-storage-price");
    const newExtraStoragePrice = parseFloat(extraStoragePrice.innerText);
    if (ssdprice == 100) {
      extraStoragePrice.innerText = ssdprice;
    } else if (ssdprice == 180) {
      extraStoragePrice.innerText = ssdprice;
    } else {
      extraStoragePrice.innerText = 0;
    }
    return extraStoragePrice;
  }
  // delivery
  function deliveryCharge(deliveriprice) {
    const deliveryChargePrice = document.getElementById("delivery-charge-price");
    const newDeliveryChargePrice = parseInt(deliveryChargePrice.innerText);
    if (deliveriprice == 20) {
      deliveryChargePrice.innerText = deliveriprice;
    } else {
      deliveryChargePrice.innerText = 0;
    }
    return deliveryChargePrice;
  }
  
  document
    .getElementById("eight-GB-Memory")
    .addEventListener("click", function () {
      sixteenGBMemory();
      totalCalculation();
    });
  
  document
    .getElementById("sixteen-GB-Memory")
    .addEventListener("click", function () {
      sixteenGBMemory(180);
      totalCalculation();
    });
  
  document
    .getElementById("ssd-storage512GB")
    .addEventListener("click", function () {
      ssdStorage512GB(100);
      totalCalculation();
    });
  
  document
    .getElementById("ssd-storage256GB")
    .addEventListener("click", function () {
      ssdStorage512GB();
      totalCalculation();
    });
  document
    .getElementById("ssd-storage1TB")
    .addEventListener("click", function () {
      ssdStorage512GB(180);
      totalCalculation();
    });
  
  document
    .getElementById("prime-delivery")
    .addEventListener("click", function () {
      deliveryCharge();
      totalCalculation();
    });
  
  document
    .getElementById("prime-delivery-with$20")
    .addEventListener("click", function () {
      deliveryCharge(20);
      totalCalculation();
    });
  
  // final total price
  function totalCalculation() {
    const bestPrice = document.getElementById("best-price");
    const newBestPrice = parseInt(bestPrice.innerText);
  
    const extraMemoryPrice = document.getElementById("extra-memory-price");
    const newExtraMemoryPrice = parseFloat(extraMemoryPrice.innerText);
  
    const extraStoragePrice = document.getElementById("extra-storage-price");
    const newExtraStoragePrice = parseFloat(extraStoragePrice.innerText);
  
    const deliveryChargePrice = document.getElementById("delivery-charge-price");
    const newDeliveryChargePrice = parseFloat(deliveryChargePrice.innerText);
  
    // adding total price
    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText =
      newBestPrice +
      newExtraMemoryPrice +
      newExtraStoragePrice +
      newDeliveryChargePrice;
  
    // adding total price in discount //
    const finalTotalPrice = document.getElementById("final-total-price");
    finalTotalPrice.innerText =
      newBestPrice +
      newExtraMemoryPrice +
      newExtraStoragePrice +
      newDeliveryChargePrice;
  }
  
  // total price with discount
  document.getElementById("apply-btn").addEventListener("click", function () {
    const promoCode = document.getElementById("promo-code");
    const newPromo = promoCode.value;
    if (newPromo == "stevekaku") {
      const finalTotalPrice = document.getElementById("final-total-price");
      let newFinalTotalPrice = parseFloat(finalTotalPrice.innerText);
      const afterDiscount = newFinalTotalPrice * (1 - 0.2);
      finalTotalPrice.innerText = afterDiscount;
    }
    // clrear input velue
    promoCode.value = "";
  });