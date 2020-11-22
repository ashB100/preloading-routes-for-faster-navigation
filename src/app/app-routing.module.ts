import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { PreloadSelectedModules } from './preload-selected.service';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { PreloadHoveredModules } from './preload-hovered.service';
import { HoverService } from './hover.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'docs', data: { preload: true }, loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule) },
  { path: 'resources', data: { preload: true }, loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) },
  { path: 'community', data: { preload: true }, loadChildren: () => import('./community/community.module').then(m => m.CommunityModule) },
  { path: 'featureA', loadChildren: () => import('./feature-a/feature-a.module').then(m => m.FeatureAModule), },
  { path: 'featureB', loadChildren: () => import('./feature-b/feature-b.module').then(m => m.FeatureBModule) },
  { path: 'featureC', data: { preload: false }, loadChildren: () => import('./feature-c/feature-c.module').then(m => m.FeatureCModule) },
];

// NoPreloading
// PreloadAllModules
// PreloadSelectedModules
// QuicklinkStrategy
// PreloadHoveredModules

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
