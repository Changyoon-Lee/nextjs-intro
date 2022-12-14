import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Home({ results }) {
    const router = useRouter();
    const onClick = (id, title) => {
        router.push(`/movies/${title}/${id}`
        )
    }
    return (

        <div className="contents">

            {
                results?.map((movie) => (
                    <div key={movie.id} className="movie">
                        <img onClick={() => onClick(movie.id, movie.original_title)} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        <Link href={
                            {
                                pathname: `/movies/${movie.id}`,
                                query: { title: movie.original_title }
                            }
                        }
                            as={`/movies/${movie.id}`}
                        >
                            <a>
                                <h4>{movie.original_title}</h4>
                            </a>
                        </Link>
                    </div>
                ))
            }
            <style jsx>{`

        .movie {
            display: flex;
            flex-direction: column;
            max-width:200px;
            align-items:center;
            
        }
        h4 {
            margin-bottom: 50px;
        }
        .movie img {
            transition: transform 0.2s ease-in-out;
            max-width:100%;
            border-radius:10px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
            transform: scale(1.05) ;
          }
        
        `}</style>
        </div>
    );
}

export async function getServerSideProps() {
    const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();

    return {
        props: {
            results,
        }
    }
}