# Casos de Uso Principales

*   **CU01 - Iniciar Ejercicio de POO:** El alumno entra a la lección de Java. El LMS hace un fork del repositorio del profesor a la cuenta del alumno. El alumno abre el editor web, escribe la clase, pulsa "Verificar", el código se envía a Judge0, corre los tests unitarios y muestra el feedback instantáneo.
*   **CU02 - Entregar Proyecto Godot:** El alumno descarga su fork localmente, desarrolla el nivel en Godot, hace un `git push`. GitHub Actions corre los tests GUT en la nube y envía un webhook al LMS. El LMS marca la tarea como "Aprobada" y genera el PR.
*   **CU03 - Feedback del Profesor:** El profesor abre su dashboard, ve que el alumno entregó el proyecto. Hace clic en el PR, visualiza los diffs del código y deja un comentario de revisión técnica directamente desde el LMS.
