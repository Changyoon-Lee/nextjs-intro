import NavBar from "./NavBar";
import Seo from "./Seo";
import { useRouter } from "next/router";
export default function Layout({ children }) {
    const router = useRouter();
    return (
        <>
            <Seo title={router.pathname.slice(1,)} />
            <NavBar pathname={router.pathname} />
            <div>{children}
            </div>
        </>
    )
}