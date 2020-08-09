import React from 'react';

export default function About({ refere }) {

  const buttons = about.buttons.map((item) => (
    <a key={item.name} target='blank' href={item.link}>{item.name}</a>
  ))

  return (
    <div ref={refere} className="home-about-wrapper">
      <div className="home-about">

        <div className="home-about-img-wrapper">
          <div className="home-about-img">
            <img src={about.profileImgLink} alt="" />
          </div>
        </div>

        <div className="home-about-texts">
          <div className="home-about-title">
            <h1>{about.title}</h1>
          </div>
          <div className="home-about-desc">
            <p>{about.desc}</p>
          </div>
          <div className="home-about-buttons">
            {buttons}
          </div>
        </div>

      </div>
    </div>
  );
}

const about = {
  profileImgLink: "https://media-exp1.licdn.com/dms/image/C4D03AQFa6NMnUQD4FA/profile-displayphoto-shrink_800_800/0?e=1602115200&v=beta&t=mgUiwzDCVYCnqv02SVG_cNrcPkjKXFxa6Pv_PkFNXXU",
  title: "Sobre",
  desc: "Graduado em Ciências Contábeis pela UNIFIO e especialista em Contabilidade e Auditoria pela UENP (campus de Cornélio Procópio), é Gerente Administrativo e Controller da empresa Projex Engenharia, possuindo mais de 28 anos de experiência na gestão de empresas do segmento de construção civil. Possui também mais de 18 anos de experiência na docência do ensino superior, atuando na graduação e pós-graduação pelo grupo Estácio, nos cursos de Administração, RH e Engenharia de Produção, nas disciplinas do núcleo de Administração, Finanças, Contabilidade e Gestão da Qualidade. Desenvolve pesquisas e produção científica com vários trabalhos publicados com temas relativos a responsabilidade social corporativa, balanço social, estratégia e balanced scorecard.",
  buttons: [
    {
      name: "Resume",
      link: "https://google.com"
    },
    {
      name: "Lattes",
      link: "http://lattes.cnpq.br/7479196093844203"
    },
  ]
}
