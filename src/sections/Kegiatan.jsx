import React from 'react';
import '../styles/kegiatan.css';
import data from '../data/kegiatan.json';

function Kegiatan() {
    const { hero, activities, gallery, applications } = data;

    return (
        <div id="kegiatan">
            <div className="hero-wrapper">
                <header className="hero">
                    <h1>{hero.title}</h1>
                    <h3>{hero.subtitle}</h3>
                    {hero.paragraphs.map((txt, i) => (
                        <p key={i}>{txt}</p>
                    ))}
                </header>
            </div>

            <div className="section-wrapper activities">
                <h2>Activities</h2>
                <div className="cards">
                    {activities.map(({ title, desc }) => (
                        <div className="card" key={title}>
                            <h3>{title}</h3>
                            <p>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section-wrapper gallery-section">
                <h2 className="gallery-title">Inside the Lab</h2>
                <div className="gallery-list">
                    {gallery.map((item, index) => (
                        <div className="gallery-item" key={index}>
                            <div className="gallery-image">
                                <img
                                    src={require(`../assets/kegiatan/${item.src}`)}
                                    alt={item.caption}
                                />
                            </div>
                            <div className="gallery-caption">
                                <p><strong>{index + 1}.</strong> {item.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section-wrapper applications">
                <h2>Applications</h2>
                <p className="app-intro">Our research outcomes are applied in various fields:</p>
                <ul className="app-list">
                    {applications.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default Kegiatan;
