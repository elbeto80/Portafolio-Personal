# Hoja de vida

- PDF publicado: `public/CV_AlbertoAlvarez.pdf` (ruta que ya usa el botón «Descargar CV»).
- Fuente editable: `docs/cv/CV_AlbertoAlvarez.html`, sin dependencias ni recursos externos.
- Contenido revisado el 18 de septiembre de 2026.

Los cargos, períodos y proyectos se resumen de `data/Experience.js` y
`data/Projects.js`; las tecnologías de esos archivos y `data/Skills.js`.
El perfil, ubicación y contactos proceden de `components/i18n-provider.tsx`,
`components/sections/Contact.tsx`, `data/social-links.js` y `app/layout.tsx`.
El nombre completo y la formación académica se conservaron del PDF anterior.
El HTML es una versión editorial estática: no se sincroniza automáticamente.

Para actualizar el PDF, editar el HTML y abrirlo en Chrome/Chromium. Imprimir
como PDF en A4, escala 100 %, sin márgenes adicionales y sin encabezados ni
pies de página del navegador. El documento ya define sus márgenes y numeración.
Guardar en `public/CV_AlbertoAlvarez.pdf` y revisar las dos páginas, los enlaces
y la selección de texto antes de publicar.

También puede generarse con un ejecutable de Chrome/Chromium:

```sh
"$CHROME_BIN" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$PWD/public/CV_AlbertoAlvarez.pdf" \
  "file://$PWD/docs/cv/CV_AlbertoAlvarez.html"
```

`CHROME_BIN` debe apuntar al ejecutable local del navegador.
