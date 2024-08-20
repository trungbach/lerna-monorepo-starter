1, `yarn global add lerna`
2, `lerna init && yarn`
3, `yarn add --dev typescript @types/node -W`
4, Create tsconfig.json file
5, To create the packages, we’ll use the lerna create command from the root of our project.

- `lerna create calculator`
- Add tsconfig.json for child packages:
  - `{
    "extends": "../../tsconfig.json",
    "compilerOptions": {
    "outDir": "./lib"
    },
    "include": [
    "./src"
    ]
}`

6, Add src/calculator.ts for package
7, Build calculator

8, Linking packages with Lerna
9, Create packages/integration folder to use calculator package:
`cd packages \n
mkdir integration \n
cd integration \n
npm init -y \n
cd ../.. \n`

10, Install: `yarn add calculator -w integration`

`yarn add --dev -W nx`
