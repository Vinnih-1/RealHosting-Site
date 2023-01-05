
import Banner from "./../Components/Layout/Banner/Banner";
import About from "./../Components/Layout/About/About";
import Plans from "./../Components/Layout/Plans/Plans";
import Testimony from "../Components/Layout/Testimony/Testimony";
import Question from "../Components/Layout/Question/Question";
export const Home = () => {
    return (
        <div>      
            <Banner />
            <About />
            <Plans />
            <Testimony />
            <Question />
        </div>
    )
}
export default Home