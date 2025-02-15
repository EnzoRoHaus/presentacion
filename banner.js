const images = [
    'imagenes/banner/img_1.jpg',
    'imagenes/banner/img_2.jpg',
    'imagenes/banner/img_3.jpg',
    'imagenes/banner/img_4.jpg'
  ];
  let currentIndex = 0;
  const bannerImage = document.getElementById('banner-image');
  

  function changeImage() {
    bannerImage.classList.remove('active');
  
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
      bannerImage.src = images[currentIndex];
      bannerImage.classList.add('active');
    }, 1000);
  }


bannerImage.classList.add('active');
setInterval(changeImage, 5000);