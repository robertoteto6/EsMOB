# Guía de Despliegue - EsMOB

## Requisitos Previos

- Node.js 16+ y npm
- Cuenta en PandaScore (para obtener API key gratuita)
- Navegador web moderno

## Instalación Local

### 1. Clonar el Repositorio

```bash
git clone https://github.com/robertoteto6/EsMOB.git
cd EsMOB
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar .env y añadir tu API key de PandaScore
# VITE_PANDASCORE_API_KEY=tu_api_key_aqui
```

Para obtener una API key gratuita:
1. Visita https://pandascore.co
2. Regístrate para obtener una cuenta gratuita
3. Copia tu API key desde el dashboard
4. Pégala en el archivo `.env`

### 4. Ejecutar en Modo Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en http://localhost:3000

### 5. Compilar para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

## Despliegue en Producción

### Vercel (Recomendado)

1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Configura las variables de entorno en el dashboard de Vercel:
   - `VITE_PANDASCORE_API_KEY`: Tu API key de PandaScore

### Netlify

1. Conecta tu repositorio en Netlify
2. Configura el build:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Añade la variable de entorno en Settings > Build & deploy > Environment:
   - `VITE_PANDASCORE_API_KEY`: Tu API key de PandaScore

### GitHub Pages

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Añadir al package.json:
# "homepage": "https://tuusuario.github.io/EsMOB",
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Desplegar
npm run deploy
```

## Modo Fallback (Sin API)

Si no tienes una API key o la API no está disponible, la aplicación automáticamente utilizará datos de ejemplo (mock data) para demostración. Esto es útil para:

- Desarrollo sin conexión
- Demos y presentaciones
- Testing de la interfaz

## Solución de Problemas

### La API no responde

- Verifica que tu API key sea válida
- Comprueba tu conexión a internet
- La aplicación usará automáticamente datos de ejemplo

### Error de build

- Asegúrate de tener Node.js 16 o superior
- Elimina `node_modules` y ejecuta `npm install` de nuevo
- Verifica que todas las dependencias estén instaladas correctamente

### Variables de entorno no funcionan

- Las variables de entorno deben comenzar con `VITE_`
- Reinicia el servidor de desarrollo después de cambiar `.env`
- En producción, configura las variables en tu plataforma de hosting

## Personalización

### Cambiar colores del tema

Edita los archivos CSS en `src/components/` para personalizar:
- Colores del gradiente en `Header.css`
- Colores de badges en `MatchCard.css`
- Esquema de colores general en `App.css`

### Añadir más juegos

Los juegos se obtienen automáticamente de la API de PandaScore. Para agregar datos de ejemplo, edita `src/services/mockData.js`

## Soporte

Para problemas o preguntas:
- Abre un issue en GitHub
- Consulta la documentación de PandaScore: https://developers.pandascore.co
- Revisa el README.md del proyecto
