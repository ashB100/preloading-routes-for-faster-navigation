import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';

import { PreloadSelectedModules } from './preload-selected.service';
import { FastNetworkPreloadStrategy } from './fast-network-preload-strategy.service';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { PreloadHoveredModules } from './preload-hovered.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'docs', data: { preload: true }, loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule) },
  {
    path: 'resources',
    data: { preload: true },
    loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule),
  },
  { path: 'community', loadChildren: () => import('./community/community.module').then(m => m.CommunityModule) },
  { path: 'featureA', loadChildren: () => import('./feature-a/feature-a.module').then(m => m.FeatureAModule), },
  { path: 'featureB', loadChildren: () => import('./feature-b/feature-b.module').then(m => m.FeatureBModule) },
  { path: 'featureC', loadChildren: () => import('./feature-c/feature-c.module').then(m => m.FeatureCModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
