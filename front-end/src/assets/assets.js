import logo from './logo.png'
import banner1 from './banner1.jpg'
import banner2 from './banner2.jpg'
import banner3 from './banner3.jpg'
import banner4 from './banner4.jpg'
import banner5 from './banner5.jpg'
import banner6 from './banner6.jpg'
import banner7 from './banner7.jpg'
import cabinet1 from './cabinet1.png'
import cabinet2 from './cabinet2.png'
import chair1 from './chair1.png'
import chair2 from './chair2.png'
import sofa1 from './sofa1.png'
import sofa2 from './sofa2.png'
import table1 from './table1.png'
import table2 from './table2.png'
import table3 from './table3.png'
import profile from './profile.png'
import wishlist from './wishlist.png'
import cart from './cart.png'
import col_banner from './col_banner.jpg'
import col_sago from './col_sagoconcept.jpg'
import col_2 from './col_2.jpg'
import col_3 from './col_3.jpg'
import col_banan from './col_banan.jpg'
import col_bancafe from './col_bancafe.jpg'
import col_bancafelabu from './col_bancafelabu.webp.jpg'
import col_banannho from './col_banannho.jpg'

import col_bst1 from './col_bst1.jpg'
import col_bst2 from './col_bst2.jpg'
import col_bst3 from './col_bst3.jpg'
import col_bst4 from './col_bst4.jpg'

import col_banda from './col_banda.jpg'


import col_sofa1 from './col_sofa1.jpg'
import col_sofa2 from './col_sofa2.jpg'
import col_sofa3 from './col_sofa3.jpg'
import col_sofa4 from './col_sofa4.jpg'
import col_sofa5 from './col_sofa5.jpg'

import tip1 from './tip1.jpg'
import tip2 from './tip2.jpg'
import tip3 from './tip3.jpg'
import tip4 from './tip4.jpg'
import bfsale from './bfsale.png'
import gardensale from './gardensale.png'
import table4 from './table4.png'
import table5 from './table5.png'
import table6 from './table6.png'
import sofa3 from './sofa3.png'
import cabinet3 from './cabinet3.png'
import contact from './contact.jpg'


import p_img1 from './p_img1.jpg'
import p_img1_2 from './p_img1_2.jpg'
import p_img1_3 from './p_img1_3.jpg'
import p_img1_4 from './p_img1_4.jpg'
import p_img2 from './p_img2.jpg'
import p_img2_2 from './p_img2_1.jpg'
import p_img2_3 from './p_img2_3.jpg'
import p_img2_4 from './p_img2_4.jpg'
import p_img3 from './p_img3.jpg'
import p_img3_2 from './p_img3_2.jpg'
import p_img3_3 from './p_img3_3.jpg'
import p_img3_4 from './p_img3_4.jpg'
import p_img4 from './p_img4.jpg'
import p_img4_2 from './p_img4_2.jpg'
import p_img4_3 from './p_img4_3.jpg'
import p_img4_4 from './p_img4_4.jpg'
import p_img5 from './p_img5.jpg'
import p_img5_2 from './p_img5_2.jpg'
import p_img5_3 from './p_img5_3.jpg'
import p_img5_4 from './p_img5_4.jpg'
import dropdown_icon from './dropdown_icon.png'

export const assets = {
    logo, banner1, banner2, banner3, cabinet1, cabinet2, chair1, chair2, sofa1, sofa2, table1, table2, table3, cart, wishlist, profile, banner4, banner5, banner6, banner7, col_banner, col_sago, col_2,col_3,
    col_banan, col_banannho, col_bancafe, col_bancafelabu,col_bst1,col_bst2,col_bst3,col_bst4, col_banda,
    col_sofa1, col_sofa2, col_sofa3,  col_sofa4, col_sofa5,  tip1, tip2, tip3, tip4, bfsale, gardensale,
    table4,table5, table6, sofa3, cabinet3, contact
}



export const products = [
    {
        _id: "aaaaa",
        name: "bàn ăn, bàn làm việc lớn HONEY PLUS",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment. ",
        price: 2950000,
        image: [p_img1, p_img1_2, p_img1_3, p_img1_4],
        category: "ban",
        subCategory: "kimloai",
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "bàn ăn CHAMOMILE",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment. ",
        price: 1950000,
        image: [p_img2,p_img2_2,p_img2_3, p_img2_4],
        category: "ban",
        subCategory: "kimloai",
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "bàn sofa, bàn góc PUER",
        description: "Điểm đặc biệt của dòng sản phẩm bàn đá chính là bạn có thể tuỳ chọn chân và mặt bàn trong bộ sưu tập chất liệu của LumiLiving",
        price: 3620000,
        image: [p_img3,p_img3_2, p_img3_3, p_img3_4],
        category: "ban",
        subCategory: "kimloai",
        bestseller: true
    },
   
    {
        _id: "aaaad",
        name: "Bàn sofa, bàn góc CEYLON",
        description: "Điểm đặc biệt của dòng sản phẩm bàn đá chính là bạn có thể tuỳ chọn chân và mặt bàn trong bộ sưu tập chất liệu của LumiLiving",
        price: 362000,
        image: [p_img4, p_img4_2, p_img4_3, p_img4_4],
        category: "ban",
        subCategory: "kimloai",
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Ghế đôn JOY",
        description: "Điểm đặc biệt của dòng sản phẩm bàn đá chính là bạn có thể tuỳ chọn chân và mặt bàn trong bộ sưu tập chất liệu của LumiLiving",
        price: 990000,
        image: [p_img5,p_img5_2,p_img5_3,p_img5_4],
        category: "ghe",
        subCategory: "kimloai",
        bestseller: true
    },
   
    {
        _id: "aaaaf",
        name: "Bàn sofa, bàn góc CEYLON",
        description: "Điểm đặc biệt của dòng sản phẩm bàn đá chính là bạn có thể tuỳ chọn chân và mặt bàn trong bộ sưu tập chất liệu của LumiLiving",
        price: 362000,
        image: [p_img4, p_img4_2, p_img4_3, p_img4_4],
        category: "ban",
        subCategory: "kimloai",
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Ghế đôn JOY",
        description: "Điểm đặc biệt của dòng sản phẩm bàn đá chính là bạn có thể tuỳ chọn chân và mặt bàn trong bộ sưu tập chất liệu của LumiLiving",
        price: 990000,
        image: [p_img5,p_img5_2,p_img5_3,p_img5_4],
        category: "ghe",
        subCategory: "kimloai",
        bestseller: true
    },
   
    {
        _id: "aaaah",
        name: "Bàn sofa, bàn góc CEYLON",
        description: "Điểm đặc biệt của dòng sản phẩm bàn đá chính là bạn có thể tuỳ chọn chân và mặt bàn trong bộ sưu tập chất liệu của LumiLiving",
        price: 362000,
        image: [p_img4, p_img4_2, p_img4_3, p_img4_4],
        category: "ban",
        subCategory: "kimloai",
        bestseller: true
    },
    {
        _id: "aaaai",
        name: "Ghế đôn JOY",
        description: "Điểm đặc biệt của dòng sản phẩm bàn đá chính là bạn có thể tuỳ chọn chân và mặt bàn trong bộ sưu tập chất liệu của LumiLiving",
        price: 990000,
        image: [p_img5,p_img5_2,p_img5_3,p_img5_4],
        category: "ghe",
        subCategory: "kimloai",
        bestseller: true
    },
   
    {
        _id: "aaaak",
        name: "Bàn sofa, bàn góc CEYLON",
        description: "Điểm đặc biệt của dòng sản phẩm bàn đá chính là bạn có thể tuỳ chọn chân và mặt bàn trong bộ sưu tập chất liệu của LumiLiving",
        price: 362000,
        image: [p_img4, p_img4_2, p_img4_3, p_img4_4],
        category: "ban",
        subCategory: "kimloai",
        bestseller: true
    },
    {
        _id: "aaaal",
        name: "Ghế đôn JOY",
        description: "Điểm đặc biệt của dòng sản phẩm bàn đá chính là bạn có thể tuỳ chọn chân và mặt bàn trong bộ sưu tập chất liệu của LumiLiving",
        price: 990000,
        image: [p_img5,p_img5_2,p_img5_3,p_img5_4],
        category: "ghe",
        subCategory: "kimloai",
        bestseller: true
    }
]
    