import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../assets/logo.png';


function Navbar() {
  // Tutup navbar saat item diklik
  const handleNavItemClick = () => {
    const navbarCollapse = document.querySelector('.navbar-collapse.show');
    if (navbarCollapse) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: true });
    }
  };

  // Tambahkan event untuk semua link dropdown saat komponen mount
  useEffect(() => {
    const links = document.querySelectorAll('.dropdown-item');

    links.forEach(link => {
      link.addEventListener('click', handleNavItemClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleNavItemClick);
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg shadow fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center position-relative" href="#">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className="brand-text"></span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Member</a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#peneliti"
                    onClick={() => {
                      localStorage.setItem('kategori', 'all');
                      window.dispatchEvent(new Event('kategoriChange'));
                    }}
                  >
                    All member
                  </a>
                </li>
                <li><a className="dropdown-item" href="#peneliti">Researchers</a></li>
                <li><a className="dropdown-item" href="#visittingResearch">Visiting Researchers</a></li>
                <li><a className="dropdown-item" href="#internship">Interns</a></li>
                <li><a className="dropdown-item" href="#firstYearStudent">First-Year Students</a></li>
                <li><a className="dropdown-item" href="#researchAsisten">Research Assistants</a></li>
                <li><a className="dropdown-item" href="#student">Students</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Activity</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#kegiatan">Activities</a></li>
                <li><a className="dropdown-item" href="#kerjasama">Collaborations</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
