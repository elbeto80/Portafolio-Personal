# Portafolio-Personal

## Desarrollo local

El proyecto usa Node.js 24. Si utilizas nvm:

```sh
nvm install
nvm use
npm ci
npm run dev
```

Para comprobar la compilación de producción, ejecuta `npm run build`.

## Despliegue en Vercel

La versión de Node.js se fija en `package.json` mediante `engines.node: "24.x"`.
Vercel aplica esa versión en el siguiente despliegue. También puedes seleccionar
24.x en Settings → Build and Deployment → Node.js Version para mantener el panel
alineado con el repositorio.

Usa el preset Next.js y el comando de compilación `npm run build`.
