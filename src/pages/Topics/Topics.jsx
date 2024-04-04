import "./Topics.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";




const Topics = () => {
    return(
        <>

            <Navbar/>
            <div className="topics">


                <div className="topics-wrapper">

                    <div className="item">
                        <img src="https://d1sr9z1pdl3mb7.cloudfront.net/wp-content/uploads/2020/09/16134150/identity-documents.jpg"></img>
                        <h2>Documents, Work visa, Student visa</h2>
                        <button onClick={() => {window.location.href="/topics/documents"}}>Go to topic</button>
                    </div>
                    <div className="item">
                        <img src="https://s3-eu-north-1.amazonaws.com/py3.visitsweden.com/original_images/sedlaromynt_collage_nya2_high-CMSTemplate_FreccaF.jpg"></img>
                        <h2>Taxes, Income taxes, Corporate taxes</h2>
                        <button onClick={() => {window.location.href="/topics/taxes"}}>Go to topic</button>
                    </div>
                    <div className="item">
                        <img src="https://studyinsweden.se/transformations/2020/05/eriksberg.jpg-1920x1440.jpg"></img>
                        <h2>Housing, Finding a home, Housing prices</h2>
                        <button onClick={() => {window.location.href="/topics/housing"}}>Go to topic</button>
                    </div>


                    <div className="item">
                        <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i37an_CB_Zv0/v1/-1x-1.jpg"></img>
                        <h2>Banking, open a bank account</h2>
                        <button onClick={() => {window.location.href="/topics/banking"}}>Go to topic</button>
                    </div>
                    <div className="item">
                        <img src="https://swedesinthestates.com/wp-content/uploads/2018/01/shutterstock_530749759-e1551391238161.jpg"></img>
                        <h2>Jobs, finding a job, where to find a job</h2>
                        <button onClick={() => {window.location.href="/topics/jobs"}}>Go to topic</button>
                    </div>
                    <div className="item">
                        <img src="https://studyinsweden.se/transformations/2019/02/sofia_sabel-students-2638.jpg-1920x.jpg"></img>
                        <h2>Education, studying in Sweden</h2>
                        <button onClick={() => {window.location.href="/topics/education"}}>Go to topic</button>
                    </div>
                    <div className="item">
                        <img src="https://cms.studyinsweden.se//app/uploads/2020/05/teacher.jpg"></img>
                        <h2>Swedish language, SFI, learn Swedish</h2>
                        <button onClick={() => {window.location.href="/topics/language"}}>Go to topic</button>
                    </div>

                </div>


            </div>
            <Footer/>

        </>
    )
}

export default Topics;