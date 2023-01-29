<template>
  <div id="contact">
    <h1 class="title-si">Jak pracujemy</h1>
    <h1 class="sprostamy">Satysfakcja Klientów jest naszym celem!</h1>
  </div>

  <div class="parent">

    <div class="div1">
      <h1 class="numerek">1</h1>
      <p class="info-co-zrobic">Skontaktuj się z nami</p>
      <p class="info-dalej">Opowiedz, co możemy dla Ciebie zrobić.</p>
    </div>

    <div class="div2">
      <h1 class="numerek">2</h1>
      <p class="info-co-zrobic">Oferta cenowa</p>
      <p class="info-dalej">Przeanalizujemy i wycenimy zakres zleconych prac.</p>
    </div>

    <div class="div3"> 
      <h1 class="numerek">3</h1>
      <p class="info-co-zrobic">Warunki współpracy</p>
      <p class="info-dalej">Zaproponujemy harmonogram prac. Po wszystkich uzgodnieniach podpiszemy umowę.</p>
    </div>

    <div class="div4"> 
      <h1 class="numerek">4</h1>
      <p class="info-co-zrobic">Przygotowanie do realizacji</p>
      <p class="info-dalej">Analizujemy projekty. Weryfikujemy proces prac.</p>
    </div>

    <div class="div5"> 
      <h1 class="numerek">5</h1>
      <p class="info-co-zrobic">Działanie</p>
      <p class="info-dalej">Stale kontrolujemy jakość i terminowość realizacji.</p>
    </div>

    <div class="div6"> 
      <h1 class="numerek">6</h1>
      <p class="info-co-zrobic">Odbiór</p>
      <p class="info-dalej">Odbiór.</p>
    </div>
    </div>

</template>

<style>


.parent {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 700px;
  }
  
  .div1 { 
    grid-area: 1 / 2 / 2 / 3;
  }
  .div2 { 
    grid-area: 1 / 3 / 2 / 4; 
  }
  .div3 { 
    grid-area: 1 / 4 / 2 / 5; 
  }
  .div4 { 
    grid-area: 2 / 2 / 3 / 3; 
  }
  .div5 { 
    grid-area: 2 / 3 / 3 / 4; 
  }
  .div6 {
    grid-area: 2 / 4 / 3 / 5; 
  }

  .div1, .div2, .div3, .div4, .div5, .div6 {
    margin:25px;
  }

#contact {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.numerek {
  display: flex;
  justify-content: center;
  font-size: 4rem;
  font-weight: bold;
  color: red;
}

.info-co-zrobic{
  font-size: 2rem;
  display: flex;
  justify-content: center;
  text-align: center;
}

.info-dalej {
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  text-align: center;
}

.title-si{
  font-size: 1.7rem;
  font-weight: bold;
  margin-top: 2rem;
}


.sprostamy {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

@media (max-width: 720px) {
  .parent {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 1800px;
    margin-bottom: 40px;
  }

  .div1 { grid-area: 1 / 2 / 2 / 5; }
  .div2 { grid-area: 2 / 2 / 3 / 5; }
  .div3 { grid-area: 3 / 2 / 4 / 5; }
  .div4 { grid-area: 4 / 2 / 5 / 5; }
  .div5 { grid-area: 5 / 2 / 6 / 5; }
  .div6 { grid-area: 6 / 2 / 6 / 5; }

  .sprostamy {
    font-size: .9rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
}

</style>
