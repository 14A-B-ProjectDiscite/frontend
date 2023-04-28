# Frontend
# Localhost használatához
Environment mappában a ezeket átváltoztatni

environment.prod.ts

export const environment={
    production : true,
    apiUrl: 'api/'
};


environment.ts

export const environment = {
    production: false,
    apiUrl: 'http://localhost:5241/api/'
  };
# Elérhetőség

# Lépjen be az angular program főkönyvtárába!
cd /út/a/te/angular/applikációdhoz

# Telepítse a függőségeket! 
npm install

# Építse meg az Angular alkalmazást!
ng build

# Indítsa el az Angular alkalmazás kiszolgálóját!
ng serve
