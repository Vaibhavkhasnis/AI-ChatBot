import {Button} from "@/components/ui/button";
import Link from "next/link";
const LandingPage=()=>{
    return(
        <div>
            Landing page (unprotected)
            <div>
                <Link href="/sing-in">
                <Button>
                    Login
                </Button>
                </Link>
                <Link href="/sign-up">
                <Button>
                    Register
                </Button>
                </Link>
            </div>
        </div>
    )
}
export default LandingPage;