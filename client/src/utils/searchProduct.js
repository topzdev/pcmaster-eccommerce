import axios from "axios";

const config = {
    headers: {
        "Content-type": "application/json"
    }
};

const searchProduct = async search => {
    try {
        const res = await axios.post(
            "/api/product/list/",
            {
                category: search,
                subcategory: search,
                variety: search,
                brand: search,
                name: search
            },
            config
        );
        console.log(res.data);
        return res.data;
    } catch (error) {
        return null;
    }
};

export default searchProduct;
