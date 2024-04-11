# Week 6 - Challenge 4

Calculadora WebService
Crea una calculadora en Node en forma de web.

El programa debe recibir dos números por query params (p.e. http://localhost:8000/calculator?a=6&b=3), y devolver el siguiente resultado:

Resultados:

6 + 3 = 9

6 - 3 = 3

6 \* 3 = 18

6 / 3 = 2

El usuario debe poder elegir el formato de salida de datos al arrancar el servidor, pudiendo elegir entre JSON y HTML. Si no se especifica, el formato por defecto será JSON.

Si el usuario no ha proporcionado alguno de los números o éstos no son de tipo número, la aplicación debe devolver un HTML con un mensaje de error e interrumpir la ejecución del programa con un código de error.

La app debe abrirse en un puerto por defecto que esté configurado como variable de entorno, pero también se tiene que poder decir expresamente por línea de comandos en qué puerto queremos que se abra (p.e., node . --port 4000). Usar el paquete commander.

Si la request no va a /calculator, la app debe responder con un 404.

Opción extra
Recoger los números en un formulario y calcular los valores, utilizando SOLO vanila TS

---

## npm init -y

--añadir "type": "module",

## npm i -D typescript

## npx tsc --init

---

-crear carpeta dist y src
-ts config todo ESnext
-output dir => "outDir": "./dist"
-input dir => "rootDir": "./src"
-abilitar => "moduleResolution": "node10"
.editorcofig
.gitignore

---

## npm i -D eslint

## npx eslint --init

---

√ How would you like to use ESLint? · style  
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser, node
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · xo-typescript
√ What format do you want your config file to be in? · JSON

---

## npm i -D eslint-config-prettier

---

--borrar en el eslint.json los override (y su propriedad)
--añadir "extends": ["xo", "prettier"],
--"jest": true
--"parser": "@typescript-eslint/parser",

---

## npm i -D @types/node

## npm i -D jest ts-jest @types/jest jest-ts-webcompat-resolver

## npm init jest@latest

√ Would you like to use Jest when running "test" script in "package.json"? ... yes
√ Would you like to use Typescript for the configuration file? ... yes
√ Choose the test environment that will be used for testing » node
√ Do you want Jest to add coverage reports? ... yes
√ Which provider should be used to instrument code for coverage? » v8
√ Automatically clear mock calls, instances, contexts and results before every test? ... yes

---

cambiar jest.config.ts a .js
en jest.config.js añadir
preset: "ts-jest",
testPathIgnorePatterns: ["dist"],
borrar: import type { Config } from "jest"; (toda la linea 5)
borrar: : Config (no tiparlo)

---

## npm i nodemon

## npm i cross-env

## npm i dotenv

## npm install --save inquirer

## npm install commander

## npm install express
