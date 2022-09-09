import Link from "next/link";

export default function NavBar({ pathname }) {

    return (
        <nav>
            <Link href="/">
                <a className={pathname === '/' ? "active" : ""}>Home</a>
            </Link>
            <Link href="/about">
                <a className={pathname === '/about' ? "active" : ""}>About</a>
            </Link>
            <style jsx>{`
            a {
                text-align: center;
                text-decoration: none;
                text-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                transition: all 0.3s cubic-bezier(.25,.8,.25,1);
                
            }
            a:hover {
                text-shadow: 0 6px 6px rgba(0,0,0,0.25), 0 3px 3px rgba(0,0,0,0.22);
            }
            .active {
                text-shadow: 0 6px 6px rgba(0,0,0,0.25), 0 3px 3px rgba(0,0,0,0.22);
                color: tomato;
            }
            
            `}</style>
        </nav>
    )
}