<template>
    <section class="min-h-screen bg-gray-100 flex items-center justify-center px-6">
        <div class="max-w-lg w-full bg-white rounded-3xl shadow-xl p-10 text-center">
            <p class="text-7xl font-extrabold text-gray-900">404</p>

            <h1 class="mt-4 text-3xl font-bold text-gray-800">Página no encontrada</h1>

            <p class="mt-3 text-gray-500 leading-relaxed">
                Lo sentimos, la página que intentas visitar no existe o fue movida.
            </p>

            <div class="mt-8">
                <RouterLink
                    to="/"
                    class="inline-block rounded-xl bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-700 transition"
                >
                    Volver al inicio
                </RouterLink>
            </div>
        </div>
    </section>
</template>
