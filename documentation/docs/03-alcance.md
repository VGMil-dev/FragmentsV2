# Alcance

El proyecto abarca el desarrollo del LMS central (Dashboard de profesores y alumnos), la integración con la API de GitHub para la gestión automatizada de repositorios (Forks y Pull Requests), y la implementación de un sistema de evaluación de dos vías:

*   **Síncrono:** Ejecución de código en tiempo real vía Judge0 para lenguajes de consola.
*   **Asíncrono:** Escucha de Webhooks desde GitHub Actions para proyectos visuales, móviles (Expo) y motores de videojuegos (Godot).
*   **Gamificación:** Sistema de incentivos mediante insignias (badges) y una economía de "Tokens de Tiempo" ("Slip Days") para flexibilizar fechas de entrega simulando la gestión ágil de plazos.

El alcance inicial no incluye la creación de un motor de simulación de hardware nativo, delegando esa evaluación a tests de lógica en C/C++ o integraciones de simuladores externos.
