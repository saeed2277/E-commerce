import { useDispatch } from "react-redux";
import { setAuth } from "../features/auth/store/auth.slice";
import { deleteToken } from "../features/auth/server/auth.action";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


export default function uselogout() {
const dispatch = useDispatch();
const router = useRouter();

const logout = async()=>{
    await deleteToken();

dispatch(setAuth({
  isAuthentication:false,
  userInfo:null
}))
toast.success('Loged Out Successfully')
router.push('/login');
router.refresh();
};
return{logout}
}
