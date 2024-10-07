import img01 from './img01.jpg'
import img02 from './img02.jpg'
import img03_1 from './img03_1.jpg'
import img04 from './img04.jpg'
import img05 from './img05.jpg'
import img06 from './img06.jpg'
import img06_1 from './img06_1.jpg'
import img06_2 from './img06_2.jpg'
import img07 from './img07.jpg'
import img08 from './img08.jpg'
import img09 from './img09.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'


import dropdown_menu from './dropdown_menu.png'
import about from './about.jpg'
import logo from './logo.png'
import menu_button from './menu_button.png'
import recycle_bin from './recycle_bin.png'
import currency_exchange from './currency_exchange.png'
import hero from './hero.jpg'
import x_mark from './x_mark.png'
import search_icon from './search_icon.png'
import user from './user.png'
import shopping_cart from './shopping_cart.png'
import contact_icon from './contact_icon.jpg'
import exchange from './exchange.png'
import customer_icon from './customer_icon.png'
import return_policy from './return_policy.png'
import facebook from './facebook.png'
import twitter from './twitter.png'
import social from './social.png'
import whatsapp from './whatsapp.png'
import tiktok from './tik-tok.png'
import instagram from './instagram.png'

export const assets = {
    facebook,
    instagram,
    twitter,
    social,
    tiktok,
    whatsapp,
    return_policy,
    dropdown_menu,
    exchange,
    about,
    logo,
    menu_button,
    recycle_bin,
    hero,
    currency_exchange,
    x_mark,
    search_icon,
    user,
    shopping_cart,
    contact_icon,
    customer_icon,
}

export const products = [

    {
        _id: 1,
        name: "Converse",
        description: "Black converse, white sole, white laces",
        category: "Unisex",
        subcategory: "Sneaker",
        image: [img01],
        sizes: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        date: 1716634,
        price:  10,
        bestseller: false
    },
    {
        _id: 2,
        name: "Disnep",
        description: "Pink disnep shoes",
        category: "Ladies",
        subcategory: "Sneakers",
        image: [img02],
        sizes: [3, 4, 5, 6, 7, 8],
        date: 9302025,
        price: 12,
        bestseller: true
    },
    {
        _id: 3,
        name: "Multi- colored",
        description: "Multicolored sneakers",
        category: "Men",
        subcategory: "sneakers",
        image: [ img04, img03_1],
        sizes: [6, 7, 8, 9,10, 12],
        date: 9302026,
        price:  18, 
        bestseller: true
    },
    {
        _id: 4,
        name: "SPLY",
        description: "Socks sneakers",
        category: "Unisex",
        subcategory: "Grey & black socks sneakers",
        image: [img05],
        sizes: [7, 8, 9, 10, 11],
        date: 9302027,
        price: 10,
        bestseller: true
    },
    {
        _id: 5,
        name: "Jordan boots",
        description: "Blue & black jordan boots",
        category: "Unisex",
        subcategory: "Sneakers",
        image: [img06, img06_1, img06_2],
        sizes: [7, 8, 11],
        date: 9302028,
        price: 32,
        bestseller: true
    },
    {
        _id: 6,
        name: "Adidas sneakers",
        description: "Golden stripes, white adidas",
        category: "Ladies",
        subcategory: "Sneakers",
        image: [img07],
        sizes: [3, 4, 5, 6, 7],
        date: 9302029,
        price: 25,
        bestseller: true
    },
    
    {
        _id: 7,
        name: "Leather converse",
        description: "Grey & Black",
        category: "Men",
        subcategory: "Grey leather with black laces & black leather boots",
        image: [img08],
        sizes: [7, 8, 9, 10, 11, 12],
        date: 9302030,
        price: 12,
        bestseller: true
    },
    {
        _id: 8,
        name: "Green MCQueen",
        description: "Green leather mcqueen",
        category: "Ladies",
        subcategory: "Sneakers",
        image: [img09],
        sizes: [3, 4, 5, 6],
        date: 9302031,
        price: 28,
        bestseller: true
    },
    {
        _id: 9,
        name: "SPLY",
        description: "Grey SPLY",
        category: "Unisex",
        subcategory: "Sneakers",
        image: [img10],
        sizes: [5, 6, 7, 8, 9, 10],
        date: 9302032,
        price: 15,
        bestseller: true
    },
    {
        _id: 10,
        name: "Designer sneakers",
        description: "Premium designer sneakers",
        category: "Men",
        subcategory: "Sneakers",
        image: [img11],
        sizes: [8, 9, 10, 11],
        date: 9302033,
        price: 40,
        bestseller: true
    },
    
]