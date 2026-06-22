---
id: bitacora
title: Bitácora
---

Este documento registra los cambios arquitectónicos, de diseño y técnicos significativos realizados en el proyecto FragmentsV2.

---

## [2026-06-22] Congelamiento de Versiones Estáticas en Dependencias

### Cambios realizados:
*   Eliminación de prefijos dinámicos (`^` y `~`) en todas las dependencias del `package.json` de documentación, fijándolas a versiones exactas compatibles de junio de 2026.
*   Actualización y verificación del lockfile de pnpm local.

### Justificación:
*   Prevenir derivas de compatibilidad en futuras instalaciones locales o de CI/CD para el equipo, asegurando la consistencia e inmutabilidad del entorno de desarrollo.

---

## [2026-06-22] Inicialización del Diseño de Arquitectura

### Cambios realizados:
*   Creación del plan de arquitectura técnica para la V1.0.0 en [06-v1.0.0.md](file:///d:/Dev/Proyectos/FragmentsV2/documentation/docs/06-v1.0.0.md).
*   Establecimiento de las reglas de desarrollo locales y estructura del monorrepo en [.agents/AGENTS.md](file:///d:/Dev/Proyectos/FragmentsV2/.agents/AGENTS.md).
*   Creación de esta bitácora oficial en `documentation/docs/07-bitacora.md`.

### Justificación:
*   Adoptar **Turborepo** + **pnpm** para estructurar un monorrepo multi-app seguro y escalable, dividiendo físicamente el ingestor de webhooks (`backend-webhooks`) del servidor principal (`backend-api`) para garantizar la gestión de recursos independiente.
*   Enfocar la evaluación del estudiante en un flujo de **Pull Requests** seguro contra trampas.
