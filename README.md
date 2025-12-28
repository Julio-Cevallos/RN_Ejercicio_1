# Ejercicio 1 - Navegación base con menú inferior (Tabs)

## Descripción del Proyecto
Aplicación de React Native desarrollada con Expo que implementa un sistema de navegación por pestañas inferiores (Bottom Tabs). El proyecto incluye tres 
pantallas principales: "Home" con un contador interactivo, "Perfil" con información estática, y "Acerca" con descripción de la aplicación.

===

## Cómo ejecutar el proyecto
Para ejecutar el proyecto localmente, siga estos pasos:

1. Abra una terminal en la carpeta donde se encuentra el proyecto.
 
2. Ejecute uno de estos comandos:
   - Para web:
		```
		npx run web
		```
   - Para iniciar el servidor de desarrollo:
		```
		npx expo start
		```

3. Una vez iniciado, puede visualizar la app en:
   - **Navegador web** (se abre automáticamente)
   - **Dispositivo físico** escaneando el código QR con la app Expo Go
   - **Emulador de Android/iOS** si lo tiene configurado

===

## Librerías instaladas
Durante el desarrollo del ejercicio se instalaron las siguientes librerías:
- **@react-navigation/native** - Núcleo del sistema de navegación para React Native
- **@react-navigation/bottom-tabs** - Implementación específica para navegación por pestañas inferiores
- **react-native-screens** - Optimización de rendimiento para las pantallas
- **react-native-safe-area-context** - Manejo de áreas seguras del dispositivo (notch, barras del sistema)

===

## Qué aprendí
Aprendí la estructura fundamental de una aplicación React Native usando Expo Router. Comprendí cómo organizar el código en pantallas separadas y 
cómo el sistema de navegación por tabs permite cambiar entre ellas de manera fluida. Entendí el concepto de estado local con `useState` y cómo 
React re-renderiza componentes cuando el estado cambia. También aprendí a aplicar estilos con `StyleSheet` y la importancia de usar componentes nativos 
como `View` y `Text`. Finalmente, comprendí cómo personalizar la experiencia visual del tab bar con iconos, colores y estilos, creando una interfaz más 
profesional y atractiva.

===

## Conceptos Clave

### ¿Qué es una pantalla?
Una **pantalla (screen)** es un componente React que representa una vista completa de la aplicación. Contiene toda la lógica, estado y estructura visual 
de esa sección específica de la app. Cada pantalla se registra en el sistema de navegación y puede tener su propio contenido, estilos y comportamiento 
independiente. 

### ¿Qué es un Tab?
Un **Tab (pestaña)** es un elemento del menú de navegación inferior que permite al usuario cambiar entre diferentes pantallas de la aplicación con un 
simple toque. Cada tab representa una sección o funcionalidad distinta de la app y puede tener su propio ícono, etiqueta y estilos visuales. El tab 
activo (focused) generalmente se muestra con un color o ícono diferente para indicar al usuario en qué pantalla se encuentra. Es una forma de navegación 
muy común en aplicaciones móviles porque es intuitiva y accesible.

### ¿Qué hace NavigationContainer?
**NavigationContainer** es el componente raíz que envuelve todo el sistema de navegación de la aplicación. Actúa como un contenedor que mantiene y gestiona 
el estado completo de la navegación, incluyendo el historial de pantallas visitadas, la pantalla actual y las transiciones entre ellas. Sin 
NavigationContainer, React Navigation no puede funcionar, ya que es el componente que conecta toda la infraestructura de navegación con la aplicación. 
Debe estar en el nivel más alto de la app, típicamente en `App.js` o `_layout.js`, envolviendo todos los navegadores (`Tab.Navigator`, `Stack.Navigator`, etc.).
