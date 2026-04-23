import { createRouter, createWebHistory } from 'vue-router';
import NotFound404 from '@/modules/common/pages/NotFound404.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active-link',
    routes: [
        {
            path: '/',
            name: 'menu',
            component: () => import('@/modules/common/pages/MenuPage.vue'),
        },
        {
            path: '/pokemons',
            name: 'app',
            component: () => import('@/modules/pokemons/layout/PokemonLayout.vue'),
            children: [
                {
                    path: 'list',
                    name: 'pokemons',
                    component: () => import('@/modules/pokemons/pages/PokemonsPage.vue'),
                },
                {
                    path: '/pokemon/:name',
                    name: 'pokemon',
                    props: (route) => {
                        const name = String(route.params.name);
                        return !name ? '' : name.toLowerCase();
                    },
                    component: () => import('@/modules/pokemons/pages/PokemonItemPage.vue'),
                },
                {
                    path: 'favorites',
                    name: 'pokemon-favorites',
                    component: () => import('@/modules/pokemons/pages/FavoritePokemonsPage.vue'),
                },
            ],
        },
        {
            path: '/game',
            name: 'pokemon-game',
            component: () => import('@/modules/pokemon-game/layout/GameLayout.vue'),
            children: [
                {
                    path: 'play',
                    name: 'pokemon-game-play',
                    component: () => import('@/modules/pokemon-game/pages/PokemonGamePage.vue'),
                },
                {
                    path: 'stats',
                    name: 'pokemon-game-stats',
                    component: () =>
                        import('@/modules/pokemon-game/pages/PokemonGameStatsPage.vue'),
                },
            ],
        },
        {
            path: '/:patchMatch(.*)*',
            name: 'not-found',
            component: NotFound404,
        },
    ],
});

export default router;
