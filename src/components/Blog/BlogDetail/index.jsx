import { useParams } from "react-router"

export default function BlogDetail() {
    const urlParams = useParams();
    return (
        <>
            <h1>{urlParams.slug}</h1>
        </>
    )
}
