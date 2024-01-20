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
            <NuxtLink to="/about" class="underline transition-all"
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
    <main>
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
          <div
            class="
              lg:text-8xl
              text-4xl
              bg-white
              rounded
              text-black
              px-2
              mb-8
              hover:bg-zinc-950 hover:text-white
            "
          >
            About.
          </div>
          <div class="flex flex-col justify-center items-center">
            <h2 class="text-5xl font-bold text-center">Bonjour</h2>
            <p class="lg:px-64 mt-24 text-xl">
              Je suis
              <i class="bg-white rounded text-black px-2">
                Gabriel Etolo Nguini
              </i>
              , webdesigner passionné et développeur
              <i class="bg-white rounded text-black px-2">NuxtJS</i>. Depuis
              trois ans, je plonge dans le monde fascinant du
              <i class="bg-white rounded text-black px-2">webdesign</i> et du
              développement web, un domaine où je peux fusionner ma passion pour
              la création artistique avec les nouvelles technologies.
            </p>
          </div>
        </div>

        <!-- Deuxième image et texte -->
        <div class="flex flex-col justify-center items-center w-full my-44">
          <div
            class="
              lg:text-6xl
              text-4xl
              bg-white
              rounded
              text-black
              px-2
              mb-8
              hover:bg-zinc-950 hover:text-white
            "
          >
            Parcours
          </div>
          <div class="p-4 px-16 lg:px-64 text-xl lg:text-center">
            <p>
              Au cours de mes études, j'ai acquis une maîtrise approfondie
              d'outils de design tels que
              <i class="bg-white rounded text-black px-2"
                >Figma, Adobe XD, Illustrator et Photoshop</i
              >
              , avec une préférence marquée pour Figma. <br /><br />J'ai
              également développé une expertise dans l'utilisation de CMS comme
              <br /><i class="bg-white rounded text-black px-2"
                >Webflow et WordPress</i
              >
              . <br />
              <br />Ma compréhension des principes de design, comme
              l'utilisation d'espaces blancs, la signification des couleurs, des
              formes, ainsi que la narration dans le design et le motion design,
              me permet de créer des expériences utilisateur captivantes et
              significatives.
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
            px-4
            lg:px-16 lg:my-44
            w-full
          "
        >
          <div class="p-10 text-xl text-left flex items-center">
            <p>
              Dans le domaine du développement web, je suis compétent en HTML,
              CSS, JavaScript, et j'utilise principalement le framework
              <i class="bg-white rounded text-black px-2">NuxtJS</i> en
              combinaison avec
              <i class="bg-white rounded text-black px-2">TailwindCSS</i> pour
              la création de sites web.<br />
              <br />
              Mon utilisation de<i class="bg-white rounded text-black px-2"
                >GitHub et d'IA</i
              >
              pour améliorer la qualité du code montre mon engagement envers
              l'excellence technique et l'innovation.
            </p>
          </div>
          <div
            class="
              text-3xl
              lg:text-6xl
              bg-white
              rounded
              text-black
              px-2
              mb-8
              hover:bg-zinc-950 hover:text-white
            "
          >
            Développement et<br />
            Technologie
          </div>
        </div>

        <!-- Quatrième image -->
        <div
          class="
            flex flex-col
            lg:flex-row
            items-center
            justify-around
            w-full
            px-4
            lg:px-16
            my-44
          "
        >
          <div
            class="
              text-4xl
              lg:text-6xl
              bg-white
              rounded
              text-black
              px-2
              mb-8
              hover:bg-zinc-950 hover:text-white
            "
          >
            Passion et<br />
            Philosophie
          </div>
          <div class="p-10 text-xl lg:text-right flex items-center">
            <p>
              La création, qu'elle soit artistique ou non, a toujours été ma
              passion, de même que les nouvelles technologies. <br /><br />
              Avant de découvrir le webdesign, je pensais devoir dissocier ces
              deux intérêts. <br />
              <br />Heureusement, le webdesign les unit harmonieusement. Pour
              moi, le webdesign est le moyen idéal de créer des œuvres à la fois
              belles, artistiques, utiles, modernes et modifiables.
              <br /><br />Il permet aux artistes de non seulement comprendre et
              se familiariser avec les nouvelles technologies, mais aussi de les
              transformer en œuvres d'art modernes.
            </p>
          </div>
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
