
import {Banner} from "../Components/Layout/Home/Banner/Banner";
import {About} from "../Components/Layout/Home/About/About";
import {Plans} from "../Components/Layout/Home/Plans/Plans";
import {Testimony} from "../Components/Layout/Home/Testimony/Testimony";
import {Question} from "../Components/Layout/Home/Question/Question";
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
