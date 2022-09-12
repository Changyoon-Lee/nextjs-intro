
import { useRouter } from "next/router";

export default function Detail({ params }) {
    const router = useRouter();

    const [title, id] = params || [];
    // console.log(router);
    return (
        <div>
            < h4 > {title || "loading"}</h4 >
        </div>
    )
}

export function getServerSideProps({ params: { params } }) {
    // console.log(test);
    return {
        props: { params }
    }
}
