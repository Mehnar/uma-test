import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: { name: 'Hobbies' },
  },
  {
    path: '/hobbies',
    name: 'Hobbies',
    component: () => import(/* webpackChunkName: "Hobbies" */ '@/views/Hobbies.vue'),
    children: [
      {
        path: 'report/:id',
        name: 'Report',
        component: () => import(/* webpackChunkName: "ReportModal" */ '@/views/ReportModal.vue'),
        props(route) {
          const id = parseInt(route.params.id, 10);
          // eslint-disable-next-line no-restricted-globals
          return ({ id: isNaN(id) ? null : id });
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
