# Fisio a Domicilio — Astro + Cal.com


Sitio estático con Astro y Tailwind.


## Requisitos
- Node.js 18+


## Puesta en marcha
```bash
npm install
npm run dev
```


## Calendario (Cal.com)
- Crea usuario y evento en Cal.com
- Pon el slug en `.env` como `CAL_LINK="usuario/mi-evento"`
- O pásalo como prop: `<CalendarEmbed link="usuario/mi-evento" />`


## Despliegue
- Vercel, Netlify o GitHub Pages.
- Para Vercel: importa el repositorio, añade la variable `CAL_LINK` en Project Settings → Environment Variables y despliega.


## Personalización
- Colores en `tailwind.config.cjs`
- Precios en `src/pages/precios.astro`
- Texto y servicios en `src/pages/tratamientos.astro`


## Licencia
MIT