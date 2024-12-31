function changeImage() {
    let image = document.getElementById('picture');

    if (image.getAttribute('src') === 'off.png') {
      image.setAttribute('src', 'on.png');
    } 
    
    else {
      image.setAttribute('src', 'off.png');
    }
}

