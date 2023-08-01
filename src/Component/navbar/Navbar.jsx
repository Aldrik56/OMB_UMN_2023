import "./navbar.css";
import { useState, useEffect, useRef } from "react";

function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

const Navbar = () => {
  const [dropdown, setDropDown] = useState(false);
  const [dropdown1, setDropDown1] = useState(false);
  const [dropdownMobile, setDropDownMobile] = useState(false);
  const [dropdownMobile1, setDropDownMobile1] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const DropDown = useRef(null);
  const DropDown1 = useRef(null);
  const Hamburger = useRef(null);
  const DropDownMobile = useRef(null);
  const DropDownMobile1 = useRef(null);
  // const LiniMasaBarang = useRef(null);

  // HANDLE SCROLL TO A DIV
  // const handleAutoScroll = () => {
  //   ref.current?.scrollIntoView({behavior: 'smooth'});
  // };

  // HANDLE CLOSE DROPDOWN DESKTOP
  useEffect(() => {
    const handleClickOutside = (event) => {
      // console.log(DropDown)
      // console.log(Hamburger)
      // console.log(DropDownMobile)
      if (DropDown.current && !DropDown.current.contains(event.target)) {
        setDropDown(false);
      }
      if (DropDown1.current && !DropDown1.current.contains(event.target)) {
        setDropDown1(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [dropdown, dropdown1]);

  // HANDLE ONLY ONE DROPDOWN IN MOBILE
  useEffect(() => {
    const handleClickOutside = (event) => {
      // console.log(DropDown)
      // console.log(Hamburger)
      // console.log(DropDownMobile)
      if (DropDownMobile.current && !DropDownMobile.current.contains(event.target)) {
        setDropDownMobile(false);
      }
      if (DropDownMobile1.current && !DropDownMobile1.current.contains(event.target)) {
        setDropDownMobile1(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [dropdownMobile, dropdownMobile1]);

  // HANLDE CLOSE HAMBURGER
  useEffect(() => {
    const handleClickOutsideHamburger = (event) => {
      // console.log(DropDown)
      // console.log(Hamburger)
      // console.log(DropDownMobile)
      if (!hamburger == false || !dropdownMobile == false || !dropdownMobile1 == false) {
        if (Hamburger.current && !Hamburger.current.contains(event.target) && !DropDownMobile.current.contains(event.target) && !DropDownMobile1.current.contains(event.target)) {
          setHamburger(false);
          setDropDownMobile(false);
          setDropDownMobile1(false);
        }
      }
    };
    document.addEventListener("click", handleClickOutsideHamburger, true);
    return () => {
      document.removeEventListener("click", handleClickOutsideHamburger, true);
    };
  }, [hamburger]);

  return (
    <>
      <div className="navbar">
        <a href="/">
          <img className="logoNavbar" src="./Assets/Home/Logo Putih Outer Glow 1.png" alt="logo" />
        </a>
        <div ref={DropDownMobile} hidden></div>
        <div className="navbar-kanan">
          <div className="navbar-dropdown">
            <button ref={DropDown} onClick={() => setDropDown(!dropdown)} className="navbar-dropdown-button">
              Tentang▾
            </button>
            {dropdown ? (
              <div className="navbar-dropdown-content" id="tentang">
                <a href="/tentang-omb">Mengenal OMB UMN 2023</a>
                <a href="/pelaksanaan">Pelaksanaan</a>
                <a href="/divisi">Divisi</a>
                <a href="/mars">Mars</a>
              </div>
            ) : null}
            <button ref={DropDown1} onClick={() => setDropDown1(!dropdown1)} className="navbar-dropdown-button">
              Informasi▾
            </button>
            {dropdown1 ? (
              <div className="navbar-dropdown-content" id="informasi">
                <a href="/tata-cara">Tata Cara</a>
                <a href="/lini-masa">Lini Masa</a>
                <a href="/lini-masa#barang">Barang yang Perlu Disiapkan</a>
                <a href="/rute-bus">Rute Bus</a>
                <a href="/informasi-prodi">Informasi Prodi</a>
              </div>
            ) : null}
            <a href="/bingkai">
              <button className="navbar-dropdown-button">Bingkai Resmi</button>
            </a>
            {/* <a href="/duta-hanasta">
              <button className="navbar-dropdown-button">Duta Hanasta</button>
            </a> */}
            <a href="/faq">
              <button className="navbar-dropdown-button">FAQ</button>
            </a>
            
          </div>
          {/* <a href="#" className="navbar-menu">Menu 2</a>
            <a href="#" className="navbar-menu">Menu 3</a> */}
        </div>
        <div className="navbar-mobile">
          <button ref={Hamburger} onClick={() => setHamburger(!hamburger)} className="navbar-hamburger-button">
            ≡
          </button>
          {hamburger ? (
            <div className="navbar-hamburger-content">
              <div className="navbar-mobile-dropdown">
                <button ref={DropDownMobile} onClick={() => setDropDownMobile(!dropdownMobile)} className="navbar-mobile-dropdown-button">
                  Tentang▾
                </button>
                {dropdownMobile ? (
                  <div className="navbar-mobile-dropdown-content">
                    <a href="/tentang-omb">Mengenal OMB UMN 2023</a>
                    <a href="/pelaksanaan">Pelaksanaan</a>
                    <a href="/divisi">Divisi</a>
                    <a href="/mars">Mars</a>
                  </div>
                ) : null}
              </div>
              <div className="navbar-mobile-dropdown">
                <button ref={DropDownMobile1} onClick={() => setDropDownMobile1(!dropdownMobile1)} className="navbar-mobile-dropdown-button">
                  Informasi▾
                </button>
                {dropdownMobile1 ? (
                  <div className="navbar-mobile-dropdown-content">
                    <a href="/tata-cara">Tata Cara</a>
                    <a href="/lini-masa">Lini Masa</a>
                    <a href="/lini-masa#barang">Barang yang Perlu Disiapkan</a>
                    <a href="/rute-bus">Rute Bus</a>
                    <a href="/informasi-prodi">Informasi Prodi</a>
                  </div>
                ) : null}
                <a className="navbar-mobile-content" href="/bingkai">
                  Bingkai Resmi
                </a>
                {/* <a className="navbar-mobile-content" href="/duta-hanasta">
                  Duta Hanasta
                </a> */}
                <a className="navbar-mobile-content" href="/faq">
                  FAQ
                </a>
                
              </div>
              {/* <a href="#" className="navbar-mobile-menu">Menu 2</a>
                <a href="#" className="navbar-mobile-menu">Menu 3</a> */}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export { Navbar };
