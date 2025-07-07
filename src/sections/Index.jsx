import react from 'react';
import '../styles/section.css'
import '../styles/contact.css'
import Member from './Member.jsx'
import Kegiatan from './Kegiatan.jsx';
import CollaborationSection from './KerjaSama.jsx';
import Navbar from '../components/Navbar.jsx';
import Home from './Home.jsx';
import antenaDanPropagasi from '../data/CommunicationAndSignalProcessing.json'



function Index() {


    return (
        
        <div>
            <Member />
            <Kegiatan />
            <CollaborationSection />
            <section id="contact" className="contact-section">
                <div className="contact-container">
                    <div className="text">
                        <h2>{antenaDanPropagasi.contact.title}</h2>
                        <p>Alamat : {antenaDanPropagasi.contact.address}</p>
                        <p>Telepon : {antenaDanPropagasi.contact.phone}</p>
                        <p>Kode Pos : {antenaDanPropagasi.contact.posCode}</p>
                        <p>Kategori : {antenaDanPropagasi.contact.category}</p>
                        <p>Area : {antenaDanPropagasi.contact.area}</p>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default Index;