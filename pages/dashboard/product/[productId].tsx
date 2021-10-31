import { NextPage } from "next"
import { useRouter } from "next/dist/client/router";
import Head from 'next/head';


const ProductDetailPage:NextPage = ()=>{
    const route = useRouter();
    console.log("router.query",route.query);
    
    return <div>
        <Head>
            <title>Product detail Page</title>
        </Head>
        <main>
            this is product detail page has productId={}
        </main>
    </div>
}