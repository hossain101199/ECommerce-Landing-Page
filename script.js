const trendingProducts = [
    {
        "id": 1,
        "productIMG": "./assets/trendingProductsIMG/productIMG1.png",
        "productName": "Womens Denim Jacket",
        "brandName": "Brand Name",
        "rating": "4.4",
        "presentPrice": "700",
        "PreviousPrice": "1000",
        "offerPercentage": "30%"
    },
    {
        "id": 2,
        "productIMG": "./assets/trendingProductsIMG/productIMG2.png",
        "productName": "Womens Denim Jacket",
        "brandName": "Brand Name",
        "rating": "4.4",
        "presentPrice": "600",
        "PreviousPrice": "200",
        "offerPercentage": "50%"
    },
    {
        "id": 3,
        "productIMG": "./assets/trendingProductsIMG/productIMG3.png",
        "productName": "Womens Denim Jacket",
        "brandName": "Brand Name",
        "rating": "4.4",
        "presentPrice": "800",
        "PreviousPrice": "5000",
        "offerPercentage": "90%"
    },
    {
        "id": 4,
        "productIMG": "./assets/trendingProductsIMG/productIMG4.png",
        "productName": "Womens Denim Jacket",
        "brandName": "Brand Name",
        "rating": "4.4",
        "presentPrice": "900",
        "PreviousPrice": "3000",
        "offerPercentage": "70%"
    },
    {
        "id": 5,
        "productIMG": "./assets/trendingProductsIMG/productIMG1.png",
        "productName": "Womens Denim Jacket",
        "brandName": "Brand Name",
        "rating": "4.4",
        "presentPrice": "400",
        "PreviousPrice": "400",
        "offerPercentage": "80%"
    },
    {
        "id": 6,
        "productIMG": "./assets/trendingProductsIMG/productIMG2.png",
        "productName": "Womens Denim Jacket",
        "brandName": "Brand Name",
        "rating": "4.4",
        "presentPrice": "300",
        "PreviousPrice": "500",
        "offerPercentage": "50%"
    },
    {
        "id": 7,
        "productIMG": "./assets/trendingProductsIMG/productIMG3.png",
        "productName": "Womens Denim Jacket",
        "brandName": "Brand Name",
        "rating": "4.4",
        "presentPrice": "200",
        "PreviousPrice": "700",
        "offerPercentage": "60%"
    },
    {
        "id": 8,
        "productIMG": "./assets/trendingProductsIMG/productIMG4.png",
        "productName": "Womens Denim Jacket",
        "brandName": "Brand Name",
        "rating": "4.4",
        "presentPrice": "300",
        "PreviousPrice": "500",
        "offerPercentage": "10%"
    },

]
// _________________________________________________________________________________________
const dealsOfTheDayProducts = [
    {
        "id": 1,
        "productIMG": "./assets/dealsOfTheDayIMG/productIMG1.png",
        "price": "799"
    },
    {
        "id": 2,
        "productIMG": "./assets/dealsOfTheDayIMG/productIMG2.png",
        "price": "789"
    },
    {
        "id": 3,
        "productIMG": "./assets/dealsOfTheDayIMG/productIMG3.png",
        "price": "899"
    },
    {
        "id": 4,
        "productIMG": "./assets/dealsOfTheDayIMG/productIMG1.png",
        "price": "599"
    },
    {
        "id": 5,
        "productIMG": "./assets/dealsOfTheDayIMG/productIMG2.png",
        "price": "70"
    },
    {
        "id": 6,
        "productIMG": "./assets/dealsOfTheDayIMG/productIMG3.png",
        "price": "509"
    }

]
// _________________________________________________________________________________________
const displayHidden =()=>{
    document.getElementById("affiliate").style.display = "none";
}
// _________________________________________________________________________________________
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// _________________________________________________________________________________________
const trendingProductsContainer = document.getElementById("trendingProductsContainer")
for (let index = 0; index < trendingProducts.length; index++) {
    const productCard = document.createElement("div")
    productCard.classList.add("productCard");
    productCard.innerHTML = `
    <div><img src=${trendingProducts[index].productIMG} alt=""></div>
    <div style="padding: 10px 21px 10px 21px;">
    <p style="font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #272727;">${trendingProducts[index].productName}</p>
    <div style="display: flex; align-items: center; gap: 30px; margin-top: 5px;">
    <p style="font-style: normal;font-weight: 400;font-size: 18px;color: #272727;">${trendingProducts[index].brandName}</p>
    <div style="display: flex; align-items: center; gap: 5px;">
    <p style="font-style: normal;  font-weight: 400;  font-size: 18px;  color: #848484;">${trendingProducts[index].rating}</p><svg
            width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1189_42)">
            <path
            d="M9.00016 0L11.8327 5.73833L18.1668 6.66417L13.5835 11.1283L14.6652 17.435L9.00016 14.4558L3.33516 17.435L4.41683 11.1283L-0.166504 6.66417L6.16766 5.73833L9.00016 0Z"
            fill="#848484" />
            </g>
            <defs>
            <clipPath id="clip0_1189_42">
            <rect width="18" height="17" fill="white" />
            </clipPath>
            </defs>
            </svg>
            </div>
            </div>
            
            <div style="display: flex; align-items: center; gap: 15px; margin-top: 12px;">
            <p style="font-style: normal;font-weight: 700;font-size: 24px;color: #272727;">Rs. ${trendingProducts[index].presentPrice}</p>
            <p
            style="font-style: normal;font-weight: 400;font-size: 18px;text-decoration-line: line-through;color: #848484;">
          Rs. ${trendingProducts[index].PreviousPrice}</p>
          <p style="font-style: normal;
          font-weight: 700;
          font-size: 18px;
          color: #0A8200;">(${trendingProducts[index].offerPercentage} off)</p>
          </div>
          </div>
          `
    trendingProductsContainer.appendChild(productCard)
}
// _________________________________________________________________________________________
const dealsOfTheDay = document.getElementById("dealsOfTheDay")
for (let index = 0; index < dealsOfTheDayProducts.length; index++) {
    const productCard = document.createElement("div")
    productCard.classList.add("productCard");
    productCard.innerHTML = `
            <div><img src=${dealsOfTheDayProducts[index].productIMG} alt=""></div>
            <div style="padding: 30px 0px 38px 0px; display: flex; flex-direction: column; align-items: center;">
            <svg width="152" height="62" viewBox="0 0 152 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M133.452 3.78549C133.831 3.7588 134.168 3.6809 134.464 3.55123C134.758 3.42316 134.996 3.22572 135.17 2.95518C135.346 2.6873 135.434 2.31163 135.434 1.83244C135.434 1.42743 135.354 1.10352 135.199 0.861793C135.041 0.622198 134.838 0.437567 134.588 0.30683C134.339 0.179296 134.052 0.0896478 133.729 0.0458911C133.589 0.0245464 133.451 0.011206 133.314 0H130.279V3.82604H132.247C132.672 3.82604 133.073 3.81323 133.452 3.78549ZM126.33 10.8122C127.096 11.6067 128.002 12.2295 129.047 12.683C130.09 13.1361 131.222 13.3613 132.439 13.3613C133.643 13.3613 134.759 13.1355 135.794 12.683C136.829 12.2295 137.73 11.6067 138.497 10.8122C139.263 10.0187 139.865 9.08004 140.299 7.99947C140.733 6.91729 140.951 5.73959 140.951 4.46371C140.951 3.22732 140.733 2.07204 140.299 1C140.157 0.649413 139.99 0.320171 139.813 0H136.863C137.164 0.511206 137.319 1.14728 137.319 1.91462C137.319 3.0048 137.014 3.80523 136.404 4.3111C135.794 4.81964 135.038 5.1206 134.131 5.21345L137.597 10.5624H135.572L132.275 5.35165H130.279V10.5624H128.396V0H125.014C124.837 0.320171 124.67 0.649413 124.529 1.00053C124.095 2.07204 123.877 3.22732 123.877 4.46425C123.877 5.74066 124.095 6.91836 124.529 8C124.962 9.08004 125.563 10.0187 126.33 10.8122ZM53.2952 20.73C50.6682 20.73 49.2766 22.7817 49.2472 24.8821H57.6916C57.6916 22.4061 56.1249 20.73 53.2952 20.73ZM141.81 0C141.873 0.130736 141.943 0.255603 142.003 0.390075C142.556 1.64728 142.835 3.00534 142.835 4.46371C142.835 5.96371 142.557 7.34312 142.003 8.61046C141.449 9.87247 140.702 10.9728 139.758 11.9056C138.815 12.8388 137.715 13.5656 136.46 14.0822C135.204 14.5993 133.864 14.8586 132.439 14.8586C131.017 14.8586 129.672 14.5998 128.408 14.0822C127.143 13.5662 126.034 12.8388 125.081 11.9056C124.13 10.9723 123.378 9.87193 122.824 8.61046C122.27 7.34312 121.991 5.96371 121.991 4.46371C121.991 3.00534 122.269 1.64728 122.824 0.390075C122.883 0.255603 122.954 0.130736 123.018 0H0L14.5446 62C45.0813 42.3613 74.4298 61.2343 75.6101 61.9541H75.6133C75.616 61.952 75.6192 61.9504 75.6224 61.9488H75.6373C75.6395 61.9504 75.6437 61.952 75.6459 61.9541H75.6507C76.8289 61.2343 106.179 42.3613 136.715 62L151.259 0H141.81ZM39.9678 37.6409H20.0871V16.9333H29.0251V32.0064H39.9678V37.6409ZM66.7074 29.0496H49.2627C49.2627 31.7449 51.5444 33.778 54.5854 33.778C56.3938 33.778 58.0411 33.1798 59.2049 31.5614H66.1615C63.8878 36.786 59.4775 38.2716 53.4648 38.2716C45.6454 38.2716 40.1166 34.0374 40.1166 27.3303C40.1166 20.167 45.5626 16.3879 53.4648 16.3879C62.3057 16.3879 66.7383 22.1169 66.7383 27.6313C66.7378 28.0912 66.7736 28.5507 66.7074 29.0496ZM82.8896 37.674H75.3572L64.1109 16.9162H74.2601L80.7135 29.5342L80.8912 29.9146L81.0529 29.5342L87.0885 16.9157H93.1829L82.8896 37.674ZM102.753 37.6334H94.1316V16.8773H102.753V37.6334ZM109.229 19.4787L106.632 22.3036H105.552L106.742 19.2236H104.363V15.1163H109.229V19.4787ZM120.543 38.2247C111.331 38.2247 109.654 32.9023 109.654 31.5838H116.325C116.325 32.3586 117.375 33.2876 118.26 33.6654C118.989 33.9776 119.801 34.039 120.561 34.039C122.44 34.039 123.981 33.5832 123.981 32.4925C123.981 31.1644 122.403 30.8698 120.662 30.6201C115.925 29.937 109.287 29.1414 109.287 23.8426C109.287 18.9002 114.683 16.3847 120.412 16.3847C129.583 16.3847 132.014 21.4653 132.014 22.9365H125.235C125.235 22.4973 124.9 21.6542 123.976 21.1718C123.29 20.8138 122.282 20.524 121.308 20.524C118.775 20.524 117.349 21.0512 117.349 22.2118C117.349 23.1601 118.634 23.6302 120.479 23.9466C125.294 24.7732 132.687 25.0592 132.687 30.9189C132.687 33.8954 130.11 38.2247 120.543 38.2247Z"
            fill="#A8112E" />
            </svg>
            
            <p style="font-style: normal; font-weight: 700; font-size: 24px; color: #272727; margin-top: 34px;">Best of Styles</p>
            <p style="font-style: normal;font-weight: 700;font-size: 24px;color: #272727; margin-top: 34px">Under Rs.${dealsOfTheDayProducts[index].price}</p>
            </div>
            `
    dealsOfTheDay.appendChild(productCard)
}

// _________________________________________________________________________________________