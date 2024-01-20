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
            items-center
            justify-around
            mx-16
            my-16
          "
        >
          <img
            src="/boisuke/boisuke.png"
            alt="Description"
            class="object-cover h-auto w-1/2 rounded drop-shadow-2xl"
          />
          <div class="flex flex-col lg:mt-0 mt-16 items-center">
            <h2 class="text-5xl font-bold text-center">Boisuke</h2>
            <h3 class="mb-4 text-2xl soust">Magazine</h3>
            <p class="lg:p-24 py-10">
              Récemment, j'ai eu l'opportunité enrichissante de développer un
              site web pour Boisuke, un magazine de photographie de renom.<br /><br />
              Ce projet m'a permis d'exploiter pleinement les capacités du
              framework Nuxt.js, une technologie de pointe dans le monde du
              développement web.
            </p>
            <a
              class="text-xl hover:underline hover:text-zinc-200 transition-all"
              href="https://boisuke.vercel.app/"
              >Visiter le site</a
            >
          </div>
        </div>

        <!-- Deuxième image et texte -->
        <div class="flex flex-col justify-around w-full my-24">
          <img
            src="/boisuke/gen.png"
            alt="Description"
            class="object-cover object-center h-64 w-full"
          />
          <div class="px-10 lg:mx-32 my-16 text-center">
            <p>
              En tant que développeur, mon objectif était de créer une
              plateforme qui non seulement met en valeur les visuels
              époustouflants de Boisuke, mais aussi d'offrir une expérience
              utilisateur fluide et intuitive. <br /><br />Grâce à Nuxt.js, j'ai
              pu construire un site réactif, optimisé pour le SEO et doté d'un
              temps de chargement rapide, des éléments cruciaux pour maintenir
              l'engagement des visiteurs et promouvoir le contenu de qualité du
              magazine
            </p>
          </div>
        </div>

        <!-- Troisième image et texte -->
        <div
          class="
            flex
            lg:flex-row
            flex-col-reverse
            justify-end
            items-center
            my-20
            w-full
          "
        >
          <div class="p-10 flex items-center">
            <p>
              Ce projet a été un véritable défi, mais aussi une occasion
              formidable de pousser mes compétences en développement web à de
              nouveaux sommets.<br /><br />
              Le site de Boisuke est le résultat d'une combinaison harmonieuse
              entre technologie moderne et esthétique créative, reflétant ainsi
              l'esprit innovant du magazine lui-même
            </p>
          </div>
          <img
            src="/boisuke/manon.png"
            alt="Description"
            class="object-cover rounded-l-lg h-full w-1/2 drop-shadow-2xl"
          />
        </div>

        <!-- Quatrième image -->
        <div class="flex flex-col items-center justify-around w-full">
          <a
            href="https://boisuke.vercel.app/"
            class="
              text-4xl
              hover:text-zinc-200 hover:underline
              mb-8
              transition-all
            "
            >Visiter Boisuke.</a
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
