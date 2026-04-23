<template>
    <div class="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div class="bg-white shadow-xl rounded-3xl p-8 max-w-md w-full">
            <div class="text-6xl mb-4">❌</div>

            <h1 class="text-2xl font-bold mb-2">Pokémon no encontrado</h1>

            <p class="text-gray-500 mb-6">
                No pudimos encontrar el Pokémon que buscas. Verifica el nombre e inténtalo
                nuevamente.
            </p>

            <RouterLink
                to="/"
                class="inline-block px-6 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-700 transition"
            >
                Volver al inicio
            </RouterLink>
        </div>
    </div>
</template>
