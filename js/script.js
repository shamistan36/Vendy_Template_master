var tumbnail_buttons = document.querySelectorAll("#intro>.tumbnail>span")
var slider_items = document.querySelectorAll(".slider")
tumbnail_buttons[0].addEventListener("click", function() {
    document.querySelector(".slider.active").classList.remove("active")
    slider_items[0].classList.add("active")
    for (let i = 0; i < tumbnail_buttons.length; i++) {
        if (tumbnail_buttons[i].classList.contains("active")) {
            tumbnail_buttons[i].classList.remove("active")
        }
    }
    tumbnail_buttons[0].classList.add("active")
})
tumbnail_buttons[1].addEventListener("click", function() {
    document.querySelector(".slider.active").classList.remove("active")
    slider_items[1].classList.add("active")
    for (let i = 0; i < tumbnail_buttons.length; i++) {
        if (tumbnail_buttons[i].classList.contains("active")) {
            tumbnail_buttons[i].classList.remove("active")
        }
    }
    tumbnail_buttons[1].classList.add("active")
})
tumbnail_buttons[2].addEventListener("click", function() {
    document.querySelector(".slider.active").classList.remove("active")
    slider_items[2].classList.add("active")
    for (let i = 0; i < tumbnail_buttons.length; i++) {
        if (tumbnail_buttons[i].classList.contains("active")) {
            tumbnail_buttons[i].classList.remove("active")
        }
    }
    tumbnail_buttons[2].classList.add("active")
})

setInterval(() => {
    var next_slider = document.querySelector(".slider.active").nextElementSibling
    document.querySelector(".slider.active").classList.remove("active")
    if (next_slider != null && next_slider.classList.contains("slider")) {
        next_slider.classList.add("active")
    } else {
        slider_items[0].classList.add("active")
    }
    var next_tumbnail = document.querySelector(".tumbnail>span.active").nextElementSibling
    document.querySelector(".tumbnail>span.active").classList.remove("active")
    if (next_tumbnail != null) {
        next_tumbnail.classList.add("active")
    } else {
        tumbnail_buttons[0].classList.add("active")
    }
}, 5000);

var product_slider = document.querySelectorAll(".products .tumbnail>span")

var products = document.querySelector(".products-wrapper")

product_slider[0].addEventListener("click", function() {

    if (products.classList.contains("second_slide")) {
        products.classList.remove("second_slide")
    }
    if (products.classList.contains("third_slide")) {
        products.classList.remove("third_slide")
    }
    if (products.classList.contains("forth_slide")) {
        products.classList.remove("forth_slide")
    }
    if (products.classList.contains("fifth_slide")) {
        products.classList.remove("fifth_slide")
    }

    products.classList.add("first_slide")

    for (let i = 0; i < product_slider.length; i++) {
        if (product_slider[i].classList.contains("active")) {
            product_slider[i].classList.remove("active")
        }
    }
    product_slider[0].classList.add("active")

})
product_slider[1].addEventListener("click", function() {

    if (products.classList.contains("first_slide")) {
        products.classList.remove("first_slide")
    }
    if (products.classList.contains("third_slide")) {
        products.classList.remove("third_slide")
    }
    if (products.classList.contains("forth_slide")) {
        products.classList.remove("forth_slide")
    }
    if (products.classList.contains("fifth_slide")) {
        products.classList.remove("fifth_slide")
    }

    products.classList.add("second_slide")

    for (let i = 0; i < product_slider.length; i++) {
        if (product_slider[i].classList.contains("active")) {
            product_slider[i].classList.remove("active")
        }
    }
    product_slider[1].classList.add("active")

})
product_slider[2].addEventListener("click", function() {

    if (products.classList.contains("first_slide")) {
        products.classList.remove("first_slide")
    }
    if (products.classList.contains("second_slide")) {
        products.classList.remove("second_slide")
    }
    if (products.classList.contains("forth_slide")) {
        products.classList.remove("forth_slide")
    }
    if (products.classList.contains("fifth_slide")) {
        products.classList.remove("fifth_slide")
    }

    products.classList.add("third_slide")

    for (let i = 0; i < product_slider.length; i++) {
        if (product_slider[i].classList.contains("active")) {
            product_slider[i].classList.remove("active")
        }
    }
    product_slider[2].classList.add("active")

})
product_slider[3].addEventListener("click", function() {

    if (products.classList.contains("first_slide")) {
        products.classList.remove("first_slide")
    }
    if (products.classList.contains("second_slide")) {
        products.classList.remove("second_slide")
    }
    if (products.classList.contains("third_slide")) {
        products.classList.remove("third_slide")
    }
    if (products.classList.contains("fifth_slide")) {
        products.classList.remove("fifth_slide")
    }

    products.classList.add("forth_slide")

    for (let i = 0; i < product_slider.length; i++) {
        if (product_slider[i].classList.contains("active")) {
            product_slider[i].classList.remove("active")
        }
    }
    product_slider[3].classList.add("active")

})
product_slider[4].addEventListener("click", function() {

    if (products.classList.contains("first_slide")) {
        products.classList.remove("first_slide")
    }
    if (products.classList.contains("second_slide")) {
        products.classList.remove("second_slide")
    }
    if (products.classList.contains("third_slide")) {
        products.classList.remove("third_slide")
    }
    if (products.classList.contains("forth_slide")) {
        products.classList.remove("forth_slide")
    }

    products.classList.add("fifth_slide")

    for (let i = 0; i < product_slider.length; i++) {
        if (product_slider[i].classList.contains("active")) {
            product_slider[i].classList.remove("active")
        }
    }
    product_slider[4].classList.add("active")

})