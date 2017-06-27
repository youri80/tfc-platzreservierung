// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
   firebase: {
    apiKey: 'AIzaSyD7hXP4VEE2Lq62MAFdjwxFHvPws-kZxSs',
    authDomain: 'tfc-platzreservierung.firebaseapp.com',
    databaseURL: 'https://tfc-platzreservierung.firebaseio.com',
    projectId: 'tfc-platzreservierung',
    storageBucket: 'tfc-platzreservierung.appspot.com',
    messagingSenderId: '302761255765'
  }
};

