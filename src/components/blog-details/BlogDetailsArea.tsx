
'use client'

import Link from 'next/link';
import React from 'react';

const BlogDetailsArea = () => {
  
  return (
    <>
      <section className="home_bg hb_height"
        style={{ backgroundImage: `url(/assets/img/bg/home-bg.jpg)`, backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12 col-xs-12">
              <div className="hero-text ht_top">
                <h1>QUASE LÁ</h1>
                
                <p> Faltam apenas 2 passos pra você finalizar a sua inscrição.
                </p>

                <div className="progress-bar-container">
                  <div className="progress-bar">
                    <span className="progress-text">90%</span>
                  
                  </div>
                </div>
                <p>O primeiro passo é entrar agora no grupo de WhatsApp pra ficar por dentro de tudo e receber o link do encontro.
                </p>

                <p>Toque agora no botão abaixo e entre no grupo 👇🏻

                </p>

                <div className="insc_btns">
  <Link href="wa.link/wf9jci" className="btn_whatsapp">Entrar agora no WhatsApp</Link> 
</div>

              </div>


            </div>
          </div>
        </div>

        
      </section>
    </>
  );
};

export default BlogDetailsArea;