import "./Home.scss"
import Banner from "../../components/Banner/Banner";
import Forum from "../../components/Forum/Forum";
import Facts from "../../components/Facts/Facts";
import Life from "../../components/Life/Life";
import Nature from "../../components/Nature/Nature";
import Study from "../../components/Study/Study";
import Cost from "../../components/Cost/Cost";
import Step1 from "../../components/Step1/Step1";
import Step2 from "../../components/Step2/Step2";
import Step3 from "../../components/Step3/Step3";
import Step4 from "../../components/Step4/Step4";
import Step5 from "../../components/Step5/Step5";
import Step6 from "../../components/Step6/Step6";

const Home = () => {
    return(
        <div className="home">
            <Banner />
            <Step1 />
            <Step2 />
            <Step3 />
            <Step4 />
            <Step5 />
            <Step6 />
            <Forum />
            <Facts />
            <Life />
            <Nature />
            <Study/>
            <Cost/>
        </div>
    )
}

export default Home