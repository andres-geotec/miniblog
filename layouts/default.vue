<template>
  <div>
    <header class="navegacion navegacion-pegada navegacion-extendida">
      <menu class="nav-menu-contenedor">
        <div class="nav-menu-complementario">
          <NuxtLink to="/">Miniblog</NuxtLink>
        </div>

        <div class="nav-menu-principal">
          <ul class="nav-menu">
            <li>
              <NuxtLink to="/about">Sobre mi</NuxtLink>
            </li>
          </ul>
        </div>
      </menu>
    </header>

    <NuxtPage />
  </div>
</template>