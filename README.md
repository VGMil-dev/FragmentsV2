# FragmentsV2

Plataforma educativa moderna construida con Next.js (Frontend) y Nest.js (Backend), diseñada para enseñar programación utilizando flujos de trabajo reales de la industria (GitHub Forks y Pull Requests).

## Arquitectura y Componentes
* **Orquestador de Monorrepo:** Turborepo
* **Gestor de Paquetes:** pnpm (Workspaces)
* **Frontend:** Next.js
* **Backend (Servicios Desacoplados):** Nest.js
  * `backend-api`: Servicio para el Dashboard de profesores/alumnos y lógica de negocio.
  * `backend-webhooks`: Ingestor ligero para recepción rápida de webhooks y ejecución de colas.
* **Flujos y Colas:** Inngest (Serverless queue management)
* **Base de Datos:** Supabase
* **Ejecución de Código:** GitHub Actions (PR-based autograding) + WebAssembly (Pyodide client-side)

## Documentación
La documentación técnica detallada está construida con Docusaurus y se encuentra en la carpeta [documentation](file:///d:/Dev/Proyectos/FragmentsV2/documentation). 

Para levantar el servidor de documentación localmente:
```bash
cd documentation
pnpm install
pnpm run start
```