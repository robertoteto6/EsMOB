# EsMOB - Plataforma de Resultados de Esports

Una aplicación web moderna para ver resultados de esports en tiempo real, similar a las plataformas de resultados deportivos tradicionales.

## 🎮 Características

- **Resultados en Tiempo Real**: Visualiza partidas en vivo, próximas y resultados pasados
- **Múltiples Juegos**: Soporte para diversos títulos de esports a través de PandaScore API
- **Diseño Moderno**: Interfaz limpia y responsiva optimizada para la experiencia del usuario
- **Filtros Inteligentes**: Filtra por juego y estado de la partida
- **Información Detallada**: Ver equipos, puntuaciones, ligas y más

## 🚀 Tecnologías

- React 19
- Vite
- PandaScore API
- CSS3 con diseño responsive

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Configurar la API key
# Copia .env.example a .env y añade tu API key de PandaScore
cp .env.example .env
# Edita .env y añade tu API key: VITE_PANDASCORE_API_KEY=tu_api_key_aqui

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación
npm run preview
```

## 🎯 Uso

La aplicación se ejecuta por defecto en `http://localhost:3000`

### Funcionalidades principales:

1. **Selector de Juegos**: Filtra resultados por juego específico
2. **Pestañas de Filtrado**:
   - Todas las partidas
   - En vivo
   - Próximas
   - Resultados
3. **Tarjetas de Partidas**: Información detallada de cada enfrentamiento

## 🔑 API

La aplicación utiliza la API de PandaScore para obtener datos de esports en tiempo real.

### Configuración
1. Obtén una API key gratuita de [PandaScore](https://pandascore.co)
2. Crea un archivo `.env` en la raíz del proyecto
3. Añade tu API key: `VITE_PANDASCORE_API_KEY=tu_api_key_aqui`

### Modo Fallback
Si la API no está disponible o hay errores de conexión, la aplicación automáticamente utiliza datos de ejemplo (mock data) para demostración.

## 📱 Responsive Design

La aplicación está totalmente optimizada para:
- Desktop
- Tablet
- Mobile

## 🎨 Diseño

- Gradientes modernos
- Animaciones suaves
- Iconos y badges intuitivos
- Esquema de colores profesional

## 📄 Licencia

ISC