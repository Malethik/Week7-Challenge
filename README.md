# BackEnd base with node.js

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
