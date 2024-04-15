import "./Documents.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";




const Documents = () => {
    return(
        <>
            <Navbar/>
            <div className="documents">

                <div className="documents-wrapper">
                    <h1>Documents Needed in Sweden</h1>

                    <h2>Personal Identification Number (Personnummer)</h2>
                    <p>If you are planning to live or work in Sweden for an extended period, you will need a personal identification number (personnummer). This number is essential for accessing various services and activities in Sweden, such as healthcare, banking, and employment.</p>
                    <p>To obtain a personnummer, you usually need to register with the Swedish Tax Agency (Skatteverket). You can do this by visiting one of their offices in person and providing necessary documentation, such as a valid passport, residence permit (if applicable), and proof of address.</p>

                    <h2>Residence Permit</h2>
                    <p>If you are a non-EU/EEA citizen planning to stay in Sweden for more than three months, you typically need a residence permit. The process and requirements for obtaining a residence permit vary depending on factors such as your nationality, the purpose of your stay, and whether you are applying from within or outside Sweden.</p>
                    <p>You can apply for a residence permit through the Swedish Migration Agency (Migrationsverket). The application process often involves submitting an application form, passport photos, documentation of your reason for staying in Sweden, and possibly attending an interview.</p>

                    <h2>Swedish ID Card</h2>
                    <p>While not mandatory, having a Swedish ID card (identitetskort) can be useful for various purposes, such as proving your identity or opening a bank account. You can apply for an ID card at a tax office (Skatteverket) after obtaining your personnummer.</p>

                    <h2>Passport</h2>
                    <p>If you are a Swedish citizen or a citizen of another country and need to travel internationally, you will need a passport. Swedish passports are issued by the Swedish Police (Polisen). You can apply for or renew a passport at a passport office (passerkontor) or online through the Swedish Police website.</p>

                    <h2>Driver's License</h2>
                    <p>If you want to drive in Sweden, you may need a Swedish driver's license. The requirements for obtaining a Swedish driver's license depend on your country of origin and whether you already hold a valid driver's license from another country.</p>
                    <p>If you are from an EU/EEA country, you can typically use your current driver's license in Sweden. If you are from a non-EU/EEA country, you may need to apply for a Swedish driver's license through the Swedish Transport Agency (Transportstyrelsen).</p>

                    <h2>Bank Account</h2>
                    <p>To open a bank account in Sweden, you generally need a valid form of identification, such as a passport or Swedish ID card, and sometimes proof of address. Different banks may have slightly different requirements, so it's advisable to check with the bank you wish to open an account with.</p>
                    <p>Remember that specific requirements and procedures may vary depending on your individual circumstances, so it's essential to consult official sources such as government websites or contact relevant authorities for the most accurate and up-to-date information.</p>



                </div>

            </div>
            <Footer/>
        </>

    )
}

export default Documents;