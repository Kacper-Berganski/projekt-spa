<template>

  <div id="contact">
    <h1 class="title-si">Skontaktuj się</h1>
    <h1 class="sprostamy">Sprostamy każdemu wyzwaniu!</h1>
  </div>

  <div class="contact-info">
    <div class="tel">
      <i class="fa-solid fa-phone"></i><a href="tel:123 456 789"><p>+48 123 456 789</p></a>
    </div>
    <div class="mail">
     <i class="fa-solid fa-envelope"></i> <a href="mailto:kacperberganski@gmail.com"><p>kacperberganski@gmail.com</p></a>
    </div>
  </div>

  <div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d81038.60398401858!2d18.493648395587027!3d54.47908298614971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1674996822525!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

</template>

<script>
export default {
  name: "ContactView"
}
</script>

<style scoped>
#contact {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.map{
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
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

#contact h2 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.fa-solid{
  position: relative;
  top: 10px;
  right: 10px;
}

.mail, .tel{
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 1.8rem;
  color: black;
}

.tel {
  margin-bottom: 10px;
}

p {
  color: black;
}

p:hover {
  color: red;
}

.contact-info {
  margin-bottom: 3rem;
}

#contact form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#contact label,
#contact input[type="submit"] {
  width: 50%;
  margin-bottom: 0.5em;
}

#contact textarea {
  width: 50%;
  height: 8em;
  margin-bottom: 0.5em;
}

@media (max-width: 420px) {
  .map {
    position: relative;
    margin: 5rem auto;
    width: 350px;
    height: 400px;
  }

  .sprostamy {
    font-size: 1.1rem;
  }

  .tel, .mail{
    font-size: 1.1rem;
  }

  .fa-solid {
    position: relative;
    top:7px
  }
}

</style>