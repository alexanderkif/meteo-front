<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Meteo App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-footer reveal elevated>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label" />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="1023"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Meteo menu</q-item-label>
        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          class="text-primary"
          clickable
          exact>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'MyLayout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      navs: [
        {
          label: 'Last meteo data',
          icon: 'wb_sunny',
          to: '/',
        },
        {
          label: 'Last 3 hours',
          icon: 'looks_3',
          to: '/charts',
        },
        {
          label: 'Last 3 days',
          icon: 'filter_3',
          to: '/charts3d',
        },
        {
          label: 'Range (max 60 days)',
          icon: 'date_range',
          to: '/charts-range',
        },
      ],
    };
  },
  methods: {
    openURL,
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 1024px) {
  .q-footer {
    display: none;
  }
}
.q-drawer {
  .q-router-link--exact-active {
    color: gray !important;
    cursor: default !important;
  }
}
</style>
