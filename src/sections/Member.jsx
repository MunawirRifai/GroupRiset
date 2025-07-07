import '../styles/Member.css';
import React, { useState, useEffect } from 'react';
import antenaDanPropagasi from '../data/member.json';

function Member() {
  const { member } = antenaDanPropagasi || {};
  const peneliti = member?.peneliti || [];
  const visittingResearch = member?.visitingResearch || [];
  const magang = member?.magang || [];
  const firstYearStudent = member?.firstYearStudent || [];
  const researchAsisten = member?.researchAsisten || [];
  const mahasiswa = member?.mahasiswa || [];

  const [showAllManual, setShowAllManual] = useState(false);

  const [kategori, setKategori] = useState('peneliti');

  useEffect(() => {
    const handleKategoriChange = () => {
      const storedKategori = localStorage.getItem('kategori');
      if (storedKategori === 'all') {
        setKategori('all');
      }
    };

    // Dengarkan event custom dari Navbar
    window.addEventListener('kategoriChange', handleKategoriChange);

    return () => {
      window.removeEventListener('kategoriChange', handleKategoriChange);
    };
  }, []);




  const isAllFromNavbar = kategori === 'all';
  const isManualShowAll = kategori === 'peneliti' && showAllManual;

  const showAll = isAllFromNavbar || isManualShowAll;
  const showPeneliti = kategori === 'peneliti' || showAll;
  const showMagang = showAll;
  const showMahasiswa = showAll;
  const showVisittingResearch = showAll;
  const showfirstYearStudent = showAll;
  const showResearchAsisten = showAll;

  return (
    <div>

      <section id="research" className="member-section">
        <h1 className="member-title">Member</h1>
        {showPeneliti && (
          <>
            <h2 id="peneliti" className="member-subtitle">Researcher</h2>
            <div className="member-grid">
              {peneliti.map((m, i) => (
                <div className="member-card" key={i}>
                  <img
                    src={require(`../assets/memberImage/${m.foto}`)}
                    alt={m.nama}
                    className="member-photo"
                  />
                  <p className="member-name">{m.nama}</p>

                  {/* Tampilkan link Google Scholar jika ada */}
                  {m.scholar && (
                    <a
                      href={m.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="member-scholar"
                    >
                      Google Scholar
                    </a>
                  )}

                  <p className="member-major">{m.bidang}</p>
                </div>
              ))}
            </div>

          </>
        )}


        {showVisittingResearch && (
          <>
            <h2 id="visittingResearch" className="member-subtitle">Visiting Researchers</h2>
            <div className="member-grid">
              {visittingResearch.map((m, i) => (
                <div className="member-card" key={i}>
                  <img
                    src={require(`../assets/visittingResearch/${m.foto}`)}
                    alt={m.nama}
                    className="member-photo"
                  />
                  <p className="member-name">{m.nama}</p>

                  {/* Tampilkan link Google Scholar jika ada */}
                  {m.scholar && (
                    <a
                      href={m.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="member-scholar"
                    >
                      Google Scholar
                    </a>
                  )}

                  <p className="member-major">{m.asal_institusi}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {showMagang && (
          <>
            <h2 id="internship" className="member-subtitle">Intern</h2>
            <div className="member-grid">
              {magang.map((m, i) => (
                <div className="member-card" key={i}>
                  <img
                    src={require(`../assets/intern/${m.foto}`)}
                    alt={m.nama}
                    className="member-photo"
                  />
                  <p className="member-name">{m.nama}</p>

                  {/* Tampilkan link Google Scholar jika ada */}
                  {m.scholar && (
                    <a
                      href={m.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="member-scholar"
                    >
                      Google Scholar
                    </a>
                  )}

                  <p className="member-major">institution : {m.asal_institusi}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {showMahasiswa && (
          <>
            <h2 id="student" className="member-subtitle">Mahasiswa</h2>
            <div className="member-grid">
              {mahasiswa.map((m, i) => (
                <div className="member-card" key={i}>
                  <img src={m.foto} alt={m.nama} className="member-photo" />
                  <p className="member-name">{m.nama}</p>
                  <p className="member-major">{m.jurusan}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {showfirstYearStudent && (
          <>
            <h2 id="firstYearStudent" className="member-subtitle">First Year Student</h2>
            <div className="member-grid">
              {firstYearStudent.map((m, i) => (
                <div className="member-card" key={i}>
                  <img src={m.foto} alt={m.nama} className="member-photo" />
                  <p className="member-name">{m.nama}</p>
                  <p className="member-major">{m.jurusan}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {showResearchAsisten && (
          <>
            <h2 id="researchAsisten" className="member-subtitle">Research Asisten</h2>
            <div className="member-grid">
              {researchAsisten.map((m, i) => (
                <div className="member-card" key={i}>
                  <img src={m.foto} alt={m.nama} className="member-photo" />
                  <p className="member-name">{m.nama}</p>
                  <p className="member-major">{m.jurusan}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default Member;
