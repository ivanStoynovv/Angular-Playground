import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//   console.log("123");

//   let originalConsole =  console.log;

//   console.log = (...args) => {
//     originalConsole(...args);

//     console.warn("This method has been monkey patched");
//   }

//   console.log('345');
  
  
