

// function cho them san pham

const  addProduct = async (req, res) => {
    try {
        const {name, price, description, category, size, material, bestseller } = req.body

        const image1 = req.files.image1[0]
        const image2 = req.files.image2[0]
        const image3 = req.files.image3[0]
        const image4 = req.files.image4[0]

        console.log(name, price, description, category, size, material, bestseller)

        console.log(image1, image2, image3,image4)

        res.json({})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// function cho danh sach san pham
const  listProduct = async (req, res) => {

}

// function cho xoa san pham
const  removeProduct = async (req, res) => {

}

// function cho san pham don le
const  singleProduct = async (req, res) => {

}

export {addProduct, removeProduct, listProduct, singleProduct}