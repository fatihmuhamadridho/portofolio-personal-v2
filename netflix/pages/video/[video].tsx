import { NextPage } from "next";
import { useRouter } from "next/router";

const Video: NextPage = () => {
    const router = useRouter();
    const { video } = router.query;

    return (
        <div>
            <h1>Video {video}</h1>
        </div>
    )
}

export default Video;