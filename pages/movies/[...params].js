
import { useRouter } from "next/router";

export default function Detail() {
    const router = useRouter();
    console.log(router);
    const [title, id] = router.query.params || [];
    // console.log(router);
    return (
        <div>
            < h4 > {title || "loading"}</h4 >
        </div>
    )
}