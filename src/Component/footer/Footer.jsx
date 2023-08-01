import "./footer.scss";

const Footer = () => {
    return (
      <>
	  <div id="footer">
		<footer id="footer-isi">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 footer-one">
							{/* ALAMAT */}
							<div className="kiri">
								<h4>Alamat</h4>
								<p className="alamatOMB p">Universitas Multimedia Nusantara
													Jl. Scientia Boulevard, Gading Serpong,
													Tangerang Banten 15811, Indonesia.</p>
							</div>

						</div>
						<div className="col-lg-4 footer-two">
							<div className="tengah">
								<img className="logoFooter" src="./Assets/Home/Logo Putih Outer Glow 1.png" alt="logo" />
							</div>
						</div>

						<div className="col-lg-4 footer-three">
							<div className="kanan">
								{/* KONTAK */}
								<div className="kontak">
									<h4 className="h4">Kontak</h4>
									<a className="kontakOMB p" href="mailto:publicrelation.omb@gmail.com" target="_blank">Email : omb@umn.ac.id</a>
									<br/>
									<a className="kontakOMB p" href="https://timeline.line.me/user/_dQto-n6wJSbyUlsQVlEfNHoStsNJwzSLtfVj2Xo" target="_blank">LINE : @yqq6359s</a>
									<br/>
									<a className="kontakOMB p" href="https://instagram.com/ombumn" target="_blank">Instagram : @ombumn</a>
									<br/>
									<a className="kontakOMB p" href="https://web.facebook.com/ombumn/?_rdc=1&_rdr" target="_blank">Facebook : OMB UMN 2023</a>
								</div>
								{/* Pranala */}
								<div className="pranala">
									<h4 className="h4">Pranala</h4>
									<a className="pranalaOMB p" href="https://omb.umn.ac.id" target="_blank">Website : omb.umn.ac.id</a>
									<br/>
									<a className="pranalaOMB p" href="https://www.youtube.com/@OMBUMN" target="_blank">Youtube : docUMNtation</a>
								</div>
							</div>
						</div>
					
					</div>
				</div>

			</footer>
			<section id="palingBawah">
				<div className="copyrightWiskira">
					<h6>
						&copy; OMB UMN 2023 
						<br />
						Dikelola Oleh Wiskira OMB UMN 2023
					</h6>
				</div>

			</section>
	  </div>
        
      </>
    );
  };
  
  export { Footer };