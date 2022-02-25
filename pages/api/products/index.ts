import {NextApiRequest, NextApiResponse} from "next";
import {products} from "../../index";
import {ProductInterface} from "../../../components/Product";

//dieser Handler ist kopiert / nicht selbst geschrieben
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(products)
    res.status(200).json(products);

}