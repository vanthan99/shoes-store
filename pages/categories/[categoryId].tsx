import { useRouter } from "next/dist/client/router"
import Link from 'next/link';
export default function CategoryDetailPage() {
    const route = useRouter();
    const abc = () => {
        // route.push("/categories")
        
        route.push({
            pathname:"/products/[productId]",
            query: {
                productId:123,
                thanne: "abc",
                nhungne:"yeuthan",
            },
        })
    }
    return <div>this is category detail page: {JSON.stringify(route.query)}
        <div>
            <Link href="/categories">
                <a href="">Redirect to categories</a>
            </Link>
            <button onClick={abc}>abc</button>
            
        </div>
    </div>
};
