import { Redirect } from 'umi'
export default (props) => {
    const isLogin = Math.floor(Math.random() * 5) > 1.5;
    if (isLogin) {
        return <div>123123{props.children}</div>;
    } else {
        return <Redirect to="/login" />;
    }
}