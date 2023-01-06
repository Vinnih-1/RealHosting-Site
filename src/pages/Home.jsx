
import {Banner} from "../components/Layout/Banner/Banner";
import {About} from "../components/Layout/About/About";
import {Plans} from "../components/Layout/Plans/Plans";
import {Testimony} from "../components/Layout/Testimony/Testimony";
import {Question} from "../components/Layout/Question/Question";
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
