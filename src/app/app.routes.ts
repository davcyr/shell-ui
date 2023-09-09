import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';


export const APP_ROUTES: Routes = [
  {
    path: '',
    component: NotFoundComponent, 
    pathMatch: 'full',
  },
{
 path: 'launch',
  component: WebComponentWrapper,
  data: {
    type: 'module',
    remoteEntry:
      'http://localhost:4202/remoteEntry.js',
    remoteName: 'launch',
    exposedModule: './launch',
    elementName: 'launch-element',
  } as WebComponentWrapperOptions,
},
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry:
        'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element',
    } as WebComponentWrapperOptions,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
