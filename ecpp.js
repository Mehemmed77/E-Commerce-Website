let basket = document.getElementsByClassName('basket')[0]
let basket_av = document.getElementsByClassName('basket-av')[0]
let number = document.getElementById('number')
let thumbnail_images = document.getElementsByClassName('thumbnail-img')
let i;

let main_image = document.getElementById('main-image');

let current_img_url;
let items = document.getElementsByClassName('basket__item')
let basket_container = document.getElementsByClassName('basket-container')[0]

let basket_items = document.getElementsByClassName('basket-items')[0]
let checkout_btn = document.getElementsByClassName('basket-btn')[0]
let count = 0

let product_count = document.getElementById('number');
let price = document.getElementById('newprice')
let product_name = document.getElementsByClassName('title')[0];
let total_price;
let little_image;
let index = 0

let modal_main_image = document.getElementById('modal-main-image')

let main_images_url = [
    './ecommerce-product-page-main/images/image-product-1.jpg',
    './ecommerce-product-page-main/images/image-product-2.jpg',
    './ecommerce-product-page-main/images/image-product-3.jpg',
    './ecommerce-product-page-main/images/image-product-4.jpg',
]

let thumbnail_images_url = [
    './ecommerce-product-page-main/images/image-product-1-thumbnail.jpg',
    './ecommerce-product-page-main/images/image-product-2-thumbnail.jpg',
    './ecommerce-product-page-main/images/image-product-3-thumbnail.jpg',
    './ecommerce-product-page-main/images/image-product-4-thumbnail.jpg',
]


if (items.length==0){
    basket_items.innerHTML = '<p class="text basket__text">Your cart is empty.</p>'
    checkout_btn.style.display = 'none'
}

const selectMainImage = (param) => {
    selected_image.setAttribute('selected','false')
    param.setAttribute('selected','true')

    if(selected_image!=param){
        selected_image = param
        current_img_url = selected_image.children[0].getAttribute('src')

        for(i in thumbnail_images_url){
            if(thumbnail_images_url[i]==current_img_url){
                main_image.src = main_images_url[i]
                index = Number(i)
            }
        }
    }
}


for(i of thumbnail_images){
    if(i.attributes.selected.nodeValue=='true'){
        selected_image = i
    }
    i.setAttribute('onclick','selectMainImage(this)')
}


const showCart = () => {
    if(basket.style.display=='block'){
        basket.style.display = 'none'
    }
    else{
        basket.style.display = 'block'
    }
}

basket.addEventListener('mouseleave',function(){
    basket.style.display = 'none'    
})

const increaseCount = () => {
    number.innerHTML = Number(number.innerHTML)+1
}

const decreaseCount = () => {
    if (number.innerHTML>0){
        number.innerHTML = Number(number.innerHTML)-1
    }
}

const addToCart = () => {
    for(i in main_images_url){
        if(main_images_url[i]==main_image.getAttribute('src')){
            little_image = main_image.getAttribute('src')
        }
    }


    if(number.innerHTML>0){

        if(items.length==0){
            basket_items.innerHTML = ''
        }

        total_price = Number(price.innerHTML) * number.innerHTML
        count+=1

        basket_items.style = 'padding-right:30px'

        basket_items.insertAdjacentHTML('beforeend',`
            <div class="basket__item">
                <div><img class="product_image" width="60px" height="60px"  src="${little_image}" 
                    alt=""></div>
                <div class="about">
                    <p class="product_name">${product_name.innerHTML}</p>
                    <span class="price">$${price.innerHTML}</span>
                    <span class="count">x ${number.innerHTML}</span>
                    <span class="bold-text">$${total_price}.00</span>
                </div>
                <div class="delete" onclick="deleteItem(count)">
                    <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
                </div>
            </div>
        `)

        checkout_btn.setAttribute('style','display:block;')
    }
}

const deleteItem = (param) => {
    basket_items.removeChild(items[param-1])
    if(items.length==0){
        basket_items.innerHTML = '<p class="text basket__text">Your cart is empty.</p>'
        checkout_btn.style.display = 'none'
    }
}

const previousImage = () => {
    thumbnail_images[index].setAttribute('selected','false')

    if(index==0){
        index = main_images_url.length - 1
    }

    else{
        index-=1
    }

    selected_image = thumbnail_images[index]
    selected_image.setAttribute('selected','true')

    main_image.src = main_images_url[index]
}

const nextImage = () => {
    thumbnail_images[index].setAttribute('selected','false')


    if(index+1==main_images_url.length){
        index = 0
    }

    else{
        index+=1
    }

    selected_image = thumbnail_images[index]
    selected_image.setAttribute('selected','true')

    main_image.src = main_images_url[index]
}


let close_btn = document.getElementById('close-btn');
let hamburger = document.getElementsByClassName('hamburger')[0];
let main_slide = document.getElementsByClassName('main-slide')[0];
let slide = document.getElementsByClassName('slide')[0];

let close_modal_btn = document.getElementsByClassName('modal-close')[0];
let modal_img = document.getElementsByClassName('image-modal')[0];
let arrows = document.getElementsByClassName('arrows')[1];

hamburger.addEventListener('click',function(){
    main_slide.style.display = 'block'
    setTimeout(function(){
        slide.style = 'opacity:1;'
    },'200')
})

close_btn.addEventListener('click',function(){
    main_slide.style.display = 'none'
    slide.style.opacity = '0'
})

window.onclick = function(event){
    if(event.target==main_slide){
        main_slide.style.display = 'none'
        slide.style.opacity = '0'
    }
    if(event.target==modal_img){
        closeModalImage()
    }
}

let url;

const closeModalImage = () => {
    url = main_image.getAttribute('src');

    main_image = document.getElementById('main-image')
    main_image.setAttribute('src',url)

    thumbnail_images = document.getElementsByClassName('thumbnail-img')

    for(i in thumbnail_images){
        if(i<4){
            if(i==index){
                thumbnail_images[i].setAttribute('selected','true')
            }
            else{
                thumbnail_images[i].setAttribute('selected','false')
            }
        }
    }
    selected_image = thumbnail_images[index]

    modal_img.style.display = 'none';
}


const openModalImage = () => {
    if(window.screen.width>822){
        thumbnail_images = document.getElementsByClassName('modal-thumbnail-img')

        console.log(index)
        thumbnail_images[index].setAttribute('selected','true')
        selected_image = thumbnail_images[index]

        main_image = modal_main_image
        modal_img.style.display = 'block';
    }
}