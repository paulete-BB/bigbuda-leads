# bigbuda-leads

Herramienta interna de Bigbuda: informe automático de visibilidad online para
usar en reuniones con leads. Con la URL, el rubro y la ciudad de un negocio,
genera un diagnóstico con dos espejos:

- **Cómo te ve Google**: técnico, PageSpeed, plataforma detectada (WordPress,
  Shopify, Wix, etc.) y análisis visual de conversión (CRO) con IA.
- **Cómo te ve la IA**: si un asistente como ChatGPT recomienda al negocio con
  búsquedas reales, y a qué competidores recomienda en su lugar.

Es un fork con marca propia de la herramienta construida originalmente para
el concurso "¿Te encuentran?" (repo `paulete-BB/informes-seo`, carpeta
`te-encuentran/`). El motor es el mismo; lo que cambia es la marca (colores,
tipografía de acento, logo) para uso interno de la agencia.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Copia `.env.local.example` a `.env.local` y completa:

- `GEMINI_API_KEY`: motor de IA (análisis visual, preguntas, respuestas, plan
  de acción). Con respaldo automático entre modelos si uno agota su cuota.
- `GOOGLE_PAGESPEED_KEY`: notas de rendimiento, SEO y accesibilidad.
- `TAVILY_API_KEY`: búsqueda web real para el espejo de visibilidad en IA
  (plan gratuito, 1000 búsquedas al mes, sin tarjeta).

## Despliegue

Pensado para Vercel: conecta este repo desde el dashboard de Vercel
(Import Project), configura las mismas variables de entorno de arriba, y
cada push a `main` despliega automáticamente.
