
'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import VideoPopup from '@/modals/VideoPopup';

const HeroAreaHomeOne = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <section className="home_bg hb_height"
        style={{ backgroundImage: `url(/assets/img/bg/home-bg.jpg)`, backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12 col-xs-12">
              <div className="hero-text ht_top">
                <h1>LIVE DE IMERSÃO</h1>
                
                <p> Você está a um passo de desbloquear todo o seu potencial!
                Participe da Imersão Metanoia, uma experiência transformadora que vai eliminar os bloqueios que te impedem de avançar. Nesta Live, você irá expandir sua consciência e finalmente se libertar do que está te travando. </p>
                <p> <strong> Live Gratuita     |     100% Online     |     01/01/2024, às 20h </strong>  
</p>
              </div>
 <div className="home_btns">

 <form action="https://api.sheetmonkey.io/form/fdihVzjN9sgM9QGKZbP3dT" method="post"className="form" name="enq" >
 <h2 className="form-title">Inscreva-se</h2>


  <div className="row">
    <div className="form-group col-md-12">
      <input type="text" name="name" className="form-control" placeholder="Digite seu nome e sobrenome" required />
    </div>
    <div className="form-group col-md-12">
      <input type="email" name="email" className="form-control" placeholder="Digite seu melhor e-mail" required />
    </div>
    <div className="form-group col-md-12">
      <input type="text" name="phone" className="form-control" placeholder="Digite seu telefone" required />
    </div>
<div className="form-group col-md-12">
      <input type="text" name="salario" className="form-control" placeholder="Sua renda salarial" required />
    </div> 
    <div className="col-md-12 text-center">
      <button type="submit" className="btn_one" title="Enviar">Enviar</button>
    </div>
  </div>
</form>
</div>

            </div>
          </div>
        </div>

        
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={'i810CxN5Q6Q'}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroAreaHomeOne;