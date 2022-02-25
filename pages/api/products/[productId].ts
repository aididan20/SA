import {NextApiRequest, NextApiResponse} from "next";
import {ProductInterface} from "../../../components/Product";
import {products} from "../../index";

export interface ISnipcartProduct {
    name: string
    id: string
    url: string
    price: number
    image: StaticImageData
    description: string
}

//diese Funktion habe ich Kopiert / nicht selbst geschrieben
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {productId} = req.query;
    const product: ProductInterface | undefined = products.find(p => p.id === productId);
    if (!product) {
        res.status(404).json({});
        return ;
    }
    const snipcartProduct: ISnipcartProduct = {...product, image: product?.image.src ?? ""}

    res.status(200).json(snipcartProduct);
}