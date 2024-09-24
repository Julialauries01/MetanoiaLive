
'use client'

import Link from 'next/link';
import React from 'react';

const BlogDetailsArea = () => {
  
  return (
    <>
      <section className="home_bg2 hb_height"
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
                    <span className="progress-text">80%</span>
                  
                  </div>
                </div>

                <div className="home_btns">

                <p>Gostariamos de te conhecer melhor, então o primeiro passo é preencher este formulário caso se sinta confortavel.
                </p>
<form action="https://api.sheetmonkey.io/form/fdihVzjN9sgM9QGKZbP3dT" method="post"className="form" name="enq" >
<h2 className="form-title">Preencha</h2>
 <div className="row">
   <div className="form-group col-md-12">
     <input type="text" name="cidade" className="form-control" placeholder="Qual sua cidade ?" required />
   </div>
   <div className="form-group col-md-12">
     <input type="text" name="renda" className="form-control" placeholder="Qual sua renda média mensal ?." required />
   </div>
   <div className="form-group col-md-12">
   <select name="regime" className="form-control" required defaultValue="selecione">
   <option value="selecione" disabled style={{ color: "#ccc" }}>Selecione seu regime de trabalho</option>
   <option value="CLT">CLT</option>
  <option value="PJ">PJ</option>
  <option value="Freelancer">Freelancer</option>
  <option value="Autônomo">Autônomo</option>
  <option value="Desempregado">Desempregado</option>
</select>
</div>
   <div className="col-md-12 text-center">
     <button type="submit" className="btn_one" title="Enviar">Enviar</button>
   </div>
 </div>
</form>
</div> 
                <p><br></br>O ultimo passo é entrar agora no grupo de WhatsApp pra ficar por dentro de tudo e receber o link do encontro. 
                </p>
                <p>
                  Toque agora no botão abaixo e entre no grupo 👇🏻
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

export default BlogDetailsArea;