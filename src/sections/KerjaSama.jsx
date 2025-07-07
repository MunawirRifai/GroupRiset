import React from 'react';
import '../styles/CollaborationSection.css';
import collaborations from "../data/collaborations.json";
import KerjaSama from './Kegiatan';

const CollaborationSection = () => {
    // fungsi untuk resolve image path dari string JSON
    const getImage = (filename) => {
        try {
            return require(`../assets/collaborations/${filename}`);
        } catch (error) {
            console.error(`Gambar tidak ditemukan: ${filename}`);
            return ''; // fallback atau placeholder jika gambar tidak ditemukan
        }
    };

    return (
        <section id='kerjasama'>

            <div className="collab-section">
                <div className="collab-container">
                    <h2 className="collab-title">Collaborations</h2>

                    <div className="collab-list">
                        {collaborations.map((item, index) => (
                            <div className="collab-item" key={index}>
                                <div className="collab-image">
                                    <img
                                        src={require(`../assets/collaboration/${item.image}`)}
                                        alt={item.title}
                                    />
                                </div>
                                <div className="collab-text">
                                    <p><strong>{index + 1}.</strong> {item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollaborationSection;
