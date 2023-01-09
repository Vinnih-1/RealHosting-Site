
import {Banner} from "../components/Layout/Home/Banner/Banner";
import {About} from "../components/Layout/Home/About/About";
import {Plans} from "../components/Layout/Home/Plans/Plans";
import {Testimony} from "../components/Layout/Home/Testimony/Testimony";
import {Question} from "../components/Layout/Home/Question/Question";
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
