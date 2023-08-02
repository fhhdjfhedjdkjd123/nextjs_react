import { useRouter } from "next/router";

function Detail(){
    const router=useRouter();
    router.query.aboutusid
    return <h1>Developer Doesn't Exit!!</h1>
}
export default Detail;