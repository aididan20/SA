import Image from 'next/image'
import scss from '../styles/Product.module.scss';

export interface ProductInterface {
    name: string
    id: string
    url: string
    price: number
    image: StaticImageData
    description: string
}

interface ProductInterfaceProps {
    info: true
    product: ProductInterface
}

const Product = (props: ProductInterfaceProps) => {
    const name = props.product.name;
    const preis = props.product.price;
    const bild = props.product.image;
    const beschreibung = props.product.description;
    const id = props.product.id;
    const imagesrc = props.product.image.src;
    const url = props.product.url;

    const styleArtikel = scss.artikel;
    const stylebechA = scss.beschA;
    const styleimageA = scss.imageA;
    const styletitelA = scss.titleA;
    const stylebuttonA = scss.buttonA;

    return (
        <div className={styleArtikel}>
            <h1 className={styletitelA}>
                {name}</h1>
            <p className={stylebechA}>
                {beschreibung}</p>
            <div className={styleimageA}>
            <Image src={bild} alt="" />
            </div>
            <div className="preisButton">
                <div className={scss.preisA}>USD {preis.toFixed(1)}</div>
                <button
                    className={`snipcart-add-item ${stylebuttonA}`}
                    data-item-id={id}
                    data-item-image={imagesrc}
                    data-item-url={url}
                    data-item-name={name}
                    data-item-price={preis}>
                    In den Warenkorb
                </button>
            </div>
        </div>
    )
}

export default Product