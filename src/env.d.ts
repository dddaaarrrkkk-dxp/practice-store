/// <reference types="vite/client" />
/// <reference types="vue-router" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vite' {
  export * from 'vite'
}

declare module 'vue-router' {
  import type { RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
  export { createRouter, createWebHistory } from 'vue-router'
  export type { RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext }
} 