import React from "react";
import logo from "./assets/img/LogoCompleta.png";
import "./App.scss";
import "./assets/fonts/style.css";

function App() {
	return (
		<div className="App">
			<header className="App-header" id="home">
				{/*menu para grandes telas*/}
				<nav className="nav">
					{/*menu para pequenas telas*/}
					<nav role="navigation" className="navigation">
						<div id="menuToggle">
							<input type="checkbox" />
							<span></span>
							<span></span>
							<span></span>
							<ul id="menu">
								<a href="#home">
									<li>Início</li>
								</a>
								<a href="#projeto">
									<li>Projeto</li>
								</a>
								<a href="#participe">
									<li>Participe</li>
								</a>
								<a href="#">
									<li>Sobre</li>
								</a>
							</ul>
						</div>
					</nav>
					{/*fim menu*/}

					<img src={logo} className="logo" />
					<ul className="menu">
						<li className="menu-item">
							<a className="active" href="#home">
								Inicio
							</a>
						</li>
						<li className="menu-item">
							<a href="#projeto">Projeto</a>
						</li>
						<li className="menu-item">
							<a href="#participe">Participe</a>
						</li>
						<li className="menu-item">
							<a href="#">Sobre</a>
						</li>
					</ul>
				</nav>

				<div className="info-group">
					<h1 className="title-1">JuntosComVc</h1>
					<p className="paragraph">
						Estar junto por quem precisa é possível mesmo sem estar perto.
						JuntosComVc é uma iniciativa criada por voluntários de diversas
						áreas do conhecimento com um único propósito: criar soluções de
						impacto para conter os danos causados pela pandemia e o
						distanciamento social.
					</p>
					<button className="btn-primary">Saiba mais</button>
				</div>
				<i className="jcvc-mini-logo icon-backgroud"></i>
			</header>
			<section className="our-projetc" id="projeto">
				<h2 className="title-2">Nossos projetos</h2>
				<p className="paragrap-center">
					A rede JuntosComVc está trabalhando em diversos projetos de impacto
					social, entre eles:
				</p>
				<div className="group-actions">
					<div className="action">
						<i className="icon jcvc-happy-hour"></i>
						<span className="round-line">&nbsp;</span>
						<p className="discription">Web Happy Hours</p>
					</div>
					<div className="action">
						<i className="icon jcvc-info"></i>
						<span className="round-line">&nbsp;</span>
						<p className="discription">Informação Confiável</p>
					</div>
					<div className="action">
						<i className="icon jcvc-news"></i>
						<span className="round-line">&nbsp;</span>
						<p className="discription">Boas Notícias</p>
					</div>
					<div className="action">
						<i className="icon jcvc-video"></i>
						<span className="round-line">&nbsp;</span>
						<p className="discription">Web Happy Hours</p>
					</div>
				</div>
			</section>
			<section className="how-help" id="participe">
				<h2 className="title-2">Como posso ajudar?</h2>
				<p className="paragrap-center">
					São diversas as formas de ajudar. A primeira delas é divulgando esta
					plataforma para que mais pessoas possam ter acesso ao conteúdo.
				</p>
				<p className="paragrap-center">
					Possui algum talento? Que tal usar eles neste momento?
				</p>
				<p className="paragrap-center">
					Você também pode nos ajudar patrocinando este projeto que hoje formado
					100% por volutários dispostos a ajudar na luta contra o COVID-19.
				</p>
				<p className="paragrap-center">
					Entre em contato conosco e faça parte dessa corrente do bem
				</p>
				<button className="fale-conosco">Fale Conosco</button>
			</section>
			<footer className="footer"></footer>
			<div className="boot">
				<button className="exam-button">Auto Exame</button>
			</div>
		</div>
	);
}

export default App;
