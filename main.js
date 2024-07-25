list = document.getElementById('navVertical')
imageArea = document.getElementById('showImages')

function toggleMenu(){
    if(list.style.display == 'none'){
        list.style.display = 'block'
    }
    else{
        list.style.display = 'none'
    }
}

function firstImage(){
    const img = document.createElement('img');
    img.src = 'images/primeira.jpg';
    img.alt = '';
    imageArea.innerHTML = ''; // Remove existing images
    imageArea.appendChild(img);
}
function secondImage(){
    const img = document.createElement('img');
    img.src = 'images/segunda.jpg';
    img.alt = '';
    imageArea.innerHTML = ''; // Remove existing images
    imageArea.appendChild(img);
}
function thirdImage(){
    const img = document.createElement('img');
    img.src = 'images/terceira.jpg';
    img.alt = '';
    imageArea.innerHTML = ''; // Remove existing images
    imageArea.appendChild(img);
}