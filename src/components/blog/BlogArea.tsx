

import React from 'react';
import Link from 'next/link';

const BlogArea = () => {
 
  return (
    <>
      <section className="home_bg hb_height"
        style={{ backgroundImage: `url(/assets/img/bg/home-bg.jpg)`, backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12 col-xs-12">
              <div className="hero-text ht_top">
                <h1>FALTA APENAS UM PASSO!</h1>
                
                <p>O ultimo passo é entrar agora no grupo de WhatsApp pra ficar por dentro de tudo e receber o link do encontro.
                </p>

                <div className="progress-bar-container">
                  <div className="progress-bar">
                    <span className="progress-text">90%</span>
                  
                  </div>
                </div>

                <p>Toque agora no botão abaixo e entre no grupo 👇🏻

                </p>

                <div className="insc_btns">
  <a href="https://wa.link/wf9jci" target="_blank" rel="noopener noreferrer" className="btn_whatsapp">
    Entrar agora no WhatsApp
  </a>
</div>

              </div>


            </div>
          </div>
        </div>

        
      </section>
    </>
  );
};


export default BlogArea;