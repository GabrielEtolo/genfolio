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
      <NuxtLink to="/"
        ><div class="text-2xl bg-white rounded text-black px-2 mb-8">
          Gen.
        </div></NuxtLink
      >
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
    <main class="flex flex-col items-center mt-10">
      <h2 class="text-6xl font-bold">Contact.</h2>
      <ul
        class="text-2xl mt-8 flex flex-col items-center md:flex-row md:gap-x-5"
      >
        <li class="mt-4">
          <a href="mailto:gabrieletolo0@gmail.com" class="hover:underline"
            >Mail.</a
          >
        </li>
        <li class="mt-4">
          <a href="tel:+32494464638" class="hover:underline">Phone.</a>
        </li>
        <li class="mt-4">
          <a
            href="https://www.instagram.com/boisuke.gen/"
            target="_blank"
            class="hover:underline"
            >Instagram.</a
          >
        </li>
      </ul>
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
