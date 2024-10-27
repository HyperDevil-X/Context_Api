import { useContext } from "react";
import { Biocontext } from ".";

const Home = () =>
{
    const {myName,myAge} = useContext(Biocontext);
    return (
                <h1>Hi Context API. My name is {myName} And My age is {myAge} </h1>
    )
}
export default Home;