# Lightship Weather

API de clima hecha con Express que lee la información de cada ciudad desde archivos Markdown (carpeta `datos/`). La página en `public/` la consume y la muestra con tarjetas.

## Uso

```bash
npm install
npm start   # http://localhost:3000
```

- `GET /api/clima/:ciudad` devuelve el contenido de `datos/<ciudad>.md` en JSON.
- Si la ciudad no existe responde 404 con la lista de ciudades disponibles.
- Para agregar una ciudad basta con agregar su archivo `.md` en `datos/`.

## Publicar en Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/luisito2806/IA-clima-)

El archivo `render.yaml` crea un servicio web gratuito. El servidor usa el puerto que asigna Render (variable `PORT`). El plan gratuito se duerme tras 15 minutos sin visitas: la primera visita después tarda alrededor de un minuto en cargar.
