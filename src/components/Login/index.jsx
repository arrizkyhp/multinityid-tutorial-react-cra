import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const loginHandler = (event) => {
        event.preventDefault();

        let checkLogin = true;

        if (checkLogin) {
            navigate('/todo');
        }
    }

    return (
        <form onClick={loginHandler}>
            <input type="text" placeholder="blablabla" name="username" />
            <button>Sign In</button>
        </form>
    )
}
