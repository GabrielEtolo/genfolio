<template>
  <div
    class="
      min-h-screen
      flex flex-col
      items-center
      justify-center
      bg-zinc-950
      text-white
    "
  >
    <header
      class="absolute top-0 left-0 right-0 flex flex-col items-center p-5 mt-8"
    >
      <div class="text-2xl bg-white rounded text-black px-2 mb-8">Gen.</div>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <NuxtLink to="/about" class="hover:underline">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="flex flex-col mt-32 items-center">
      <h1 class="text-xl md:text-5xl font-bold">GABRIEL ETOLO NGUINI</h1>
      <p class="soust text-center text-l mt-2">
        Web Designer, NuxtJS Developer, Creator
      </p>
      <div
        class="
          flex
          mt-16
          md:flex-row
          flex-col
          items-center
          md:space-x-8
          lg:mt-8
          gap-y-5
        "
      >
        <NuxtLink
          to="/boisuke"
          class="
            bg-white
            rounded
            text-black
            px-4
            py-2
            w-32
            text-center
            hover:bg-zinc-200
            transition-colors
          "
          >Boisuke.</NuxtLink
        >
        <NuxtLink
          to="/djinn"
          class="
            bg-white
            rounded
            text-black
            px-4
            py-2
            w-32
            text-center
            hover:bg-zinc-200
            transition-colors
          "
          >Djinn.</NuxtLink
        >
        <NuxtLink
          to="/insamui"
          class="
            bg-white
            rounded
            text-black
            px-4
            py-2
            w-32
            text-center
            hover:bg-zinc-200
            transition-colors
          "
          >Insamui.</NuxtLink
        >
      </div>
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
