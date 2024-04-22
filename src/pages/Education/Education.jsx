import "./Education.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";



const Education = () => {
    return(
        <>
            <Navbar/>
            <div className="education">

                <div className="education-wrapper">
                    <h1>Education in Sweden</h1>

                    <h2>Educational System</h2>
                    <p>The Swedish educational system is known for its high quality and emphasis on equality and innovation. It consists of:</p>
                    <ul>
                        <li>Preschool: Optional for children ages 1-5</li>
                        <li>Compulsory Education: 9 years of compulsory schooling, starting from age 6</li>
                        <li>Upper Secondary Education: Optional, typically from ages 16-19, leading to a secondary school diploma (gymnasieexamen)</li>
                        <li>Higher Education: Universities and university colleges offering bachelor's, master's, and doctoral degrees</li>
                    </ul>

                    <h2>Higher Education</h2>
                    <p>Sweden is home to several prestigious universities and university colleges offering a wide range of programs in various fields, including:</p>
                    <ul>
                        <li>Engineering and Technology</li>
                        <li>Natural Sciences</li>
                        <li>Social Sciences</li>
                        <li>Humanities</li>
                        <li>Business and Economics</li>
                        <li>Health Sciences</li>
                    </ul>
                    <p>Many programs are taught in English, making Sweden an attractive destination for international students.</p>

                    <h2>Admissions</h2>
                    <p>Admission requirements for higher education programs in Sweden vary depending on the university and program. Generally, applicants must have completed secondary education equivalent to the Swedish upper secondary level and meet specific program-specific requirements.</p>
                    <p>International students may also need to demonstrate proficiency in English or Swedish, depending on the language of instruction.</p>

                    <h2>Tuition Fees and Scholarships</h2>
                    <p>While Sweden offers tuition-free education for EU/EEA citizens and exchange students, non-EU/EEA students are typically required to pay tuition fees. However, there are various scholarships and financial aid options available to international students to help cover tuition and living expenses.</p>

                    <h2>Student Life</h2>
                    <p>Studying in Sweden offers not only high-quality education but also a vibrant student life. Universities and colleges organize various social and cultural activities, and Sweden's cities offer a wide range of attractions and opportunities for leisure and recreation.</p>
                    <p>Additionally, Sweden's commitment to sustainability and innovation creates a dynamic environment for learning and personal growth.</p>

                </div>

            </div>
            <Footer/>
        </>

    )
}

export default Education;