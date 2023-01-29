  <template>
    <div id="contact">
      <h1 class="title-nasz">Nasz sprzęt</h1>
      <h1 class="title-filtr">*Aby filtry działały proszę odświeżyć strone. Nie udało mi sie znaleźć przyczyny błedu.</h1>
    </div>
  
   <div class="menu-case">
    <section class="container">
      
      <div class="filter-case">
        <input type="search" class="light-table-filter" data-table="order-table" placeholder="Szukaj..." />
        <div class="filter-type">
          <label class="nazwa-filtra" for="type">Typ:</label>
          <select name="type" type="search" class="select-table-filter" data-table="order-table">
            <option value="">Wszystkie</option>  
            <option value="Maszyny budowlane">Maszyny budowlane</option>  
            <option value="Samochody ciężarowe">Samochody ciężarowe</option>  
          </select>
        </div>

      </div>
      
      <table class="order-table">
        <thead>
          <tr>
            <th>Kategoria</th>
            <th>Nazwa</th>
            <th>Parametry</th>
            <th>Zdjęcie</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maszyny budowlane</td>
            <td>Yanmar Vio 25-4</td>
            <td>Gąsienice gumowe, masa: 2,8 tony Osprzęt:łyżka 30cm, 40cm, łyżka skarpowa hydrauliczna 120cm</td>
            <td><img src="https://www.truck1-pl.com/img/Maszyna_budowlana_Minikoparka_Yanmar_Vio_25_4-xxl-7941/7941_6844258991341.jpg" alt="koparka" class="pic"></td>
          </tr>
          <tr>
            <td>Maszyny budowlane</td>
            <td>Koparko-ładowarka CAT 434F</td>
            <td>Na równych kołach, masa 10,5t Osprzęt: łyżka 4w1 o pojemności 1,2m³, Łyżka skarpowa hydrauliczna 150cm</td>
            <td> <img src="https://image.ceneostatic.pl/data/products/80181651/i-cat-444f-434f-koparko-ladowarka-rodzynek-jcb.jpg" alt="wywrotka" class="pic"></td>
          </tr>
          <tr>
            <td>Samochody ciężarowe</td>
            <td>Samochód do 4 ton/do 2,5m3</td>
            <td>Samochód do 4 ton/do 2,5m3</td>
            <td><img src="https://thumbs.img-sprzedajemy.pl/1000x901c/6b/4b/ce/uslugi-trasportowe-mala-wywrotka-rzeszow-pozostale-rzeszow-350391452.jpg" alt="samochod ciezarowy" class="pic"></td>
          </tr>
          <tr>
            <td>Samochody ciężarowe</td>
            <td>Samochód od 4 do 12 ton/ do 7m3</td>
            <td>Samochód od 12 do 18 ton/ do 10m3 - samochód 3 osiowy</td>
            <td><img src="https://img.classistatic.de/api/v1/mo-prod/images/b4/b49cd81e-7e56-4641-bb9a-6d54effb7e9e?rule=mo-640.jpg" alt="samochod ciezarowy" class="pic"></td>
          </tr>
          <tr>
            <td>Maszyny budowlane</td>
            <td>Koparka gąsienicowa Liebherr R916LC</td>
            <td>
              Masa: 25 ton
              Osprzęt:
              łyżka z zębami 1,5 m³, szerokość 140cm
              łyżka z lemieszem 1,5 m³, szerokość 140cm</td>
            <td><img src="https://st-lento.pl/adpics/large/11_2021/24/cde602_koparka-gasienicowa-liebherr-r-944-lc-zdjecia.jpg" alt="koparka" class="pic"></td>
          </tr>
          <tr>
            <td>Samochody ciężarowe</td>
            <td>Samochód od 18 do 25 ton/ do 16m3</td>
            <td>Samochód od 18 do 25 ton/ do 16m3 - samochód 4 osiowy</td>
            <td><img src="https://a.allegroimg.com/s1024/0c0edf/61dbf05b446a851f0d80d4de1046" alt="samochod ciezarowy" class="pic"></td>
          </tr>
          <tr>
            <td>Maszyny budowlane</td>
            <td>Walec Hamm HD 12VV</td>
            <td>Masa: 3,2 tony, szerokość 120cm, stal (2 x bęben gładki)</td>
            <td><img src="https://a.allegroimg.com/s512/118e4e/ddb68402425eb2b3db91c809b5d3/HAMM-HD-12-VV-fabrycznie-nowy-walec-drogowy-Marka-Hamm" alt="koparka" class="pic"></td>
          </tr>
        </tbody>
      </table>
    
    </section>
  </div>
  </template>
  
  <script>
  
  (function(document) {
    
    'use strict';
  
    const LightTableFilter = (function(Arr) {
  
      let _input;
      let _select;
  
      function _onInputEvent(e) {
        _input = e.target;
        const tables = document.getElementsByClassName(_input.getAttribute('data-table'));
        Arr.forEach.call(tables, function(table) {
          Arr.forEach.call(table.tBodies, function(tbody) {
            Arr.forEach.call(tbody.rows, _filter);
          });
        });
      }
      
      function _onSelectEvent(e) {
        _select = e.target;
        const tables = document.getElementsByClassName(_select.getAttribute('data-table'));
        Arr.forEach.call(tables, function(table) {
          Arr.forEach.call(table.tBodies, function(tbody) {
            Arr.forEach.call(tbody.rows, _filterSelect);
          });
        });
      }
  
      function _filter(row) {
        
        const text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
        row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
  
      }
      
      function _filterSelect(row) {
       
        const text_select = row.textContent.toLowerCase(), val_select = _select.options[_select.selectedIndex].value.toLowerCase();
        row.style.display = text_select.indexOf(val_select) === -1 ? 'none' : 'table-row';
  
      }
  
      return {
        init: function() {
          const inputs = document.getElementsByClassName('light-table-filter');
          const selects = document.getElementsByClassName('select-table-filter');
          Arr.forEach.call(inputs, function(input) {
            input.oninput = _onInputEvent;
          });
          Arr.forEach.call(selects, function(select) {
           select.onchange  = _onSelectEvent;
          });
        }
      };
    })(Array.prototype);
  
    document.addEventListener('readystatechange', function() {
      if (document.readyState === 'complete') {
        LightTableFilter.init();
      }
    });
  
  })(document);
  </script>
  
  <style>

  .pic {
    cursor: pointer;
    transition: transform .2s;
    margin: 0 auto;
  }

  .pic:hover {
    transform: scale(4);
  }

  .nazwa-filtra {
    position: relative;
    right: 4px;
  }

  .filter-case {
    display: flex;
    justify-items: center;
  }

  .filter-type {
    margin-left: 50px;
  }
  
  .menu-case {
    margin-bottom: 350px;
    margin-top: 70px;
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
  }
  
  .info-dalej {
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
  }
  
  .title-filtr{
    font-size: 1rem;
    font-weight: bold;
    margin-top: 2rem;
  }
  
  
  .title-nasz {
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0;
  }
  
  h2 {
    margin-bottom: 50px;
  }
  
  .container {
    text-align: center;
    overflow: hidden;
    width: 800px;
    margin: 0 auto;
  }
  
  .container table {
    width: 100%;
  }
  
  .container td, .container th {
    padding: 10px;
  }
  
  .container td:first-child, .container th:first-child {
    padding-left: 20px;
  }
  
  .container td:last-child, .container th:last-child {
    padding-right: 20px;
  }
  
  .container th {
    border-bottom: 1px solid #ddd;
    position: relative;
  }

  @media (max-width: 720px) {
    .filter-type {
      position: relative;
      margin: auto;
    }
    .filter-case {
      display: flex;
      flex-flow: column-reverse;
      margin-bottom: 1.4rem;
    }

    .title-filtr{
      font-size: 0.7rem;
      font-weight: bold;
      margin-top: 2rem;
    }

    .light-table-filter {
      width: 100vw;
    }

    .order-table {
      font-size: 0.7rem;
    }
  }
  
  </style>
  