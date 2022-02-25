import Script from 'next/script';
import ProductList from "../components/ProductList";
import Head from "next/head";
import { ProductInterface } from "../components/Product";

import sofa1 from "../public/sofa1.jpg";
import tisch1 from "../public/tisch1.jpg";

import { GetStaticProps } from "next";
import Hero from "../components/Hero";
import Header from "../components/Header";

interface ListProps {
    products: ProductInterface[]
}

export default function Home({ products }: ListProps) {
    return (
        <>
            <Head>
                <title>Aidanus Möbl</title>
                <link rel="preconnect" href="https://app.snipcart.com" />
                <link rel="preconnect" href="https://cdn.snipcart.com" />
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
            </Head>
            <main className="main">
                <Header />
                <Hero />
                <ProductList products={products} />
            </main>
            <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
            <div hidden id="snipcart" data-api-key="OWNlZTNlYmItZTU5OS00MmI4LThjOTAtMjY0NzAyYmI2ODAxNjM3NjIyMjY3MDMxMTIzMzUx
"></div>
        </>
    )
}

export const products: ProductInterface[] = [
    {
        id: "sofa1",
        name: "Ledersofa DX3250",
        price: 1200.00,
        image: sofa1,
        description: "Sofa mit Toledo-Leder bezogen.",
        url: '/api/products/sofa1'
    },
    {
        id: "tisch1",
        name: "Couchtisch DCT20",
        price: 449.00,
        image: tisch1,
        description: "Ein eleganter Couchtisch",
        url: '/api/products/tisch1'
    }
]

export const getStaticProps: GetStaticProps = async (context) => { return { props: { products } } }
