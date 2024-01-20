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
            src="/insamui/ins1.png"
            alt="Description"
            class="object-cover h-auto lg:w-1/2 rounded drop-shadow-2xl"
          />
          <div class="flex flex-col lg:mt-0 mt-16 items-center">
            <h2 class="text-5xl font-bold text-center">Insamui</h2>
            <h3 class="mb-4 text-2xl soust">Gestion locative</h3>
            <p class="lg:p-24 py-10">
              J'ai récemment eu l'opportunité de développer un site web pour
              InSamui, un service de gestion locative de premier plan à Koh
              Samui, Thaïlande.<br /><br />
              Utilisant Webflow, un CMS avancé, j'ai créé un site qui allie
              esthétique attrayante et fonctionnalité, capturant l'essence de la
              tranquillité et la beauté de Koh Samui.
            </p>
            <a
              class="text-xl hover:underline hover:text-zinc-200 transition-all"
              href="https://insamui.webflow.io/"
              >Visiter le site</a
            >
          </div>
        </div>

        <!-- Deuxième image et texte -->
        <div class="flex flex-col justify-around w-full my-24">
          <img
            src="/insamui/ins2.png"
            alt="Description"
            class="object-cover object-top h-64 w-full"
          />
          <div class="p-10 lg:mx-32 my-16 lg:text-center">
            <p>
              Le projet visait à simplifier la gestion locative pour InSamui,
              tout en offrant une expérience utilisateur intuitive et
              agréable.<br /><br />
              J'ai conçu un site réactif, facile à naviguer, et optimisé pour
              les moteurs de recherche, assurant une visibilité maximale et une
              utilisation fluide sur tous les appareils.
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
              Cette expérience a été un défi enrichissant, me permettant de
              démontrer ma capacité à transformer les exigences spécifiques d'un
              client en une solution web efficace et esthétiquement
              plaisante.<br /><br />
              Le site de InSamui est un témoignage de ma passion pour le
              développement web et ma compréhension des besoins uniques de la
              gestion locative à Koh Samui.
            </p>
          </div>
          <img
            src="/insamui/ins3.png"
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
            href="https://insamui.webflow.io/"
            class="
              text-4xl
              hover:text-zinc-200 hover:underline
              mb-8
              transition-all
            "
            >Visiter Insamui.</a
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
