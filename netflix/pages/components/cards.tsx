import { useRouter } from "next/router"

export default function Cards() {
    const router = useRouter();

    return (
        <div>
            <h1 onClick={() => router.push(`/video/kita`)}>Video 1</h1>
        </div>
    )
}