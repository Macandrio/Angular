mi-proyecto-angular/
│── src/                  # Código fuente del proyecto
│   ├── app/              # Componentes principales de la app
│   │   ├── app.component.ts     # Componente raíz
│   │   ├── app.component.html   # Vista del componente raíz
│   │   ├── app.module.ts        # Módulo principal de la app
│   │   └── app-routing.module.ts # Configuración de rutas (si activaste routing)
│   ├── assets/           # Recursos estáticos como imágenes
│   ├── environments/     # Configuraciones de entorno (dev y prod)
│   ├── index.html        # Página principal
│   ├── main.ts           # Punto de entrada de la aplicación
│   ├── styles.css        # Estilos globales
│── angular.json          # Configuración de Angular
│── package.json          # Lista de dependencias y scripts npm
│── tsconfig.json         # Configuración de TypeScript

# Arrancar el seridor
    ng serve

# Crear un nuevo componente
    ng generate component nombre-del-componente

        * Esto generará una nueva carpeta dentro de src/app/ con cuatro archivos:
            nombre-del-componente.component.ts → Lógica del componente
            nombre-del-componente.component.html → Plantilla HTML
            nombre-del-componente.component.css → Estilos CSS
            nombre-del-componente.component.spec.ts → Pruebas unitarias

# Para el correo instalar 
npm install emailjs-com --save
npm install @emailjs/browser
npm i --save-dev @types/animejs


# Para el icono
npm install animejs
npm audit fix


Standalone

service_cpr167k
template_oz9xc8k
3P4d9q7htp8Pf57Pt


console.warn("⚠️ La lista de animes está vacía, no se pueden obtener tipos.");