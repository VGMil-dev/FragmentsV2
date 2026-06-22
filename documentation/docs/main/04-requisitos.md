# Requisitos del Sistema

## Requisitos Funcionales
*   **Autenticación:** El sistema debe permitir el inicio de sesión exclusivamente mediante GitHub OAuth.
*   **Gestión de Cursos:** Los instructores deben poder vincular un repositorio público de GitHub como base para un curso o asignación.
*   **Orquestación de Forks:** El sistema debe crear automáticamente un Fork del repositorio del curso en la cuenta del alumno al iniciar una lección.
*   **Editor Integrado:** El sistema debe proveer un editor de código en el navegador (basado en Monaco Editor) para archivos de texto plano.
*   **Ejecución Síncrona:** El sistema debe enviar código de lenguajes soportados a Judge0 y retornar el resultado en la interfaz.
*   **Recepción de Webhooks:** El sistema debe exponer un endpoint para recibir webhooks de GitHub Actions y actualizar el estado de una entrega.
*   **Revisión de PRs:** El sistema debe generar un Pull Request al momento de la entrega final y permitir comentarios del profesor.
*   **Economía de Tokens de Tiempo:** El sistema asignará un presupuesto inicial de tokens canjeables por extensiones de plazos (Slip Days) para gestionar retrasos de forma autónoma.
*   **Obtención de Créditos y Logros:** El sistema otorgará tokens adicionales e insignias (badges) de forma automatizada al detectar buenas prácticas (ej. Code Reviews útiles en PRs, rachas de entregas tempranas, resolución de "Bug Bounties").

## Requisitos No Funcionales
*   **Stack Tecnológico:** El frontend se desarrollará en Next.js y el backend en Nest.js, manteniendo las capas separadas pero ambas bajo TypeScript estricto.
*   **Gestor de Paquetes:** Uso exclusivo de `bun` para la gestión de dependencias y ejecución rápida en ambos servicios.
*   **Rendimiento:** El editor de código debe cargar en menos de 2 segundos sin bloquear el hilo principal.
*   **Escalabilidad:** El motor de ejecución (Judge0) debe estar en un contenedor independiente para poder escalar horizontalmente si aumenta la carga de envíos.
*   **Seguridad:** Los tokens de GitHub OAuth deben almacenarse de forma segura y solicitar únicamente los permisos estrictamente necesarios (repositorios creados por la App).
