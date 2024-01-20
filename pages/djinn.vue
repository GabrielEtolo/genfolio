<template>
  <div class="bg-zinc-950 text-zinc-100">
    <header class="flex flex-col items-center p-5 pt-8">
      <NuxtLink to="/"
        ><div class="text-2xl bg-white rounded text-black px-2 mb-8">
          Gen.
        </div></NuxtLink
      >
      <nav>
        <ul class="flex space-x-4">
          <li>
            <NuxtLink to="/about" class="hover:underline transition-all"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/contact" class="hover:underline transition-all"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </header>

    <!-- Section principale -->
    <main class="text-xl">
      <!-- Titre de la page -->

      <!-- Conteneur de la galerie d'images -->
      <div class="flex flex-col">
        <!-- Première image -->
        <div
          class="
            flex flex-col
            lg:flex-row
            items-top
            justify-around
            items-center
            mx-16
            my-16
          "
        >
          <img
            src="/djinn/djin1.png"
            alt="Description"
            class="object-cover h-auto w-1/2 rounded drop-shadow-2xl"
          />
          <div class="flex flex-col lg:mt-0 mt-16 items-center">
            <h2 class="text-5xl font-bold text-center">Festival de Djinn</h2>

            <p class="lg:p-24 py-10">
              Bienvenue dans l'univers envoûtant du "Festival des Djinns", une
              célébration unique de l'art du cocktail au gin.<br><br> Ce projet novateur
              allie design raffiné et expérience culinaire, offrant une
              immersion dans un monde où chaque détail a été pensé pour éveiller
              les sens. <br /><br />Notre menu de cocktails, conçu
              spécifiquement pour les amateurs de gin, invite à un voyage
              gustatif exceptionnel, accessible à tous, indépendamment de la
              barrière de la langue ou de la capacité à lire.
            </p>
            <a
              class="text-xl hover:underline hover:text-zinc-200 transition-all"
              href="https://www.figma.com/proto/EQUTrgKe3pIw5ovfHQEJ5W/Festival-des-Djinns(Community)?type=design&t=Cp9WxCH91LnhI6v4-0&scaling=min-zoom&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2"
              >Voir le projet</a
            >
          </div>
        </div>

        <!-- Deuxième image et texte -->
        <div class="flex flex-col justify-center items-center w-full my-24">
          <img
            src="/djinn/djin2.png"
            alt="Description"
            class="object-cover object-top h-72 w-auto"
          />
          <div class="p-4 mx-16 lg:mx-32 lg:my-16 text-center">
            <p>
              Le cœur de notre projet réside dans son design innovant :<br />
              un menu de cocktails où les ingrédients prennent vie à travers des
              illustrations captivantes et une représentation intuitive.
              <br /><br />Chaque cocktail est présenté avec des symboles et des
              couleurs spécifiques, permettant une compréhension immédiate de sa
              composition.<br /><br />
              Que vous soyez un connaisseur de gin ou un néophyte curieux, nos
              visuels parlent d'eux-mêmes, offrant une expérience inclusive et
              engageante.<br /><br />
              Notre objectif est d'éliminer les obstacles linguistiques et de
              rendre la découverte de cocktails au gin accessible à tous.
            </p>
          </div>
        </div>

        <!-- Troisième image et texte -->
        <div
          class="
            flex flex-col-reverse
            lg:flex-row
            justify-end
            items-center
            my-20
            w-full
          "
        >
          <div class="p-10 flex items-center">
            <p>
              Au "Festival des Djinns", nous croyons que la dégustation commence
              par les yeux. <br><br>Chaque élément de notre menu a été méticuleusement
              conçu pour enchanter visuellement et préparer le palais à une
              aventure gustative inoubliable.<br /><br />
              Ce projet reflète ma passion pour le design et mon engagement à
              créer des expériences utilisateurs mémorables.<br /><br />
              En tant que webdesigner, je suis fier de présenter un projet qui
              allie esthétique, fonctionnalité et innovation, dans le but de
              rendre l'art du cocktail accessible et apprécié de tous.
            </p>
          </div>
          <img
            src="/djinn/djin3.png"
            alt="Description"
            class="
              object-cover
              rounded
              lg:rounded-l-lg
              h-full
              w-1/2
              drop-shadow-2xl
            "
          />
        </div>

        <!-- Quatrième image -->
        <div class="flex flex-col items-center justify-around w-full">
          <a
            href="https://www.figma.com/proto/EQUTrgKe3pIw5ovfHQEJ5W/Festival-des-Djinns(Community)?type=design&t=Cp9WxCH91LnhI6v4-0&scaling=min-zoom&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2"
            class="
              text-4xl
              hover:text-zinc-200 hover:underline
              mb-8
              transition-all
            "
            >Voir le projet.</a
          >
        </div>
      </div>

      <!-- Lien vers le site -->
    </main>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap');
* {
  font-family: 'Montserrat', sans-serif;
}
.soust {
  font-family: 'Kalam', cursive;
}
</style>
