# Reglas de Desarrollo y Arquitectura: FragmentsV2

Este archivo contiene las directrices de diseño y comportamiento obligatorias para todos los agentes de IA que trabajen en este repositorio.

---

## 1. Estructura de Carpetas Planificada (Monorrepo pnpm + Turborepo)
Cualquier inicialización de código o creación de archivos debe respetar la siguiente jerarquía física de workspaces:

```
/
├── apps/
│   ├── backend-api/       # Nest.js: REST API para el Dashboard
│   ├── backend-webhooks/  # Nest.js: Ingestor de webhooks (GitHub, Inngest)
│   ├── documentation/     # Docusaurus: Sitio de documentación técnica (Existente)
│   └── frontend/          # Next.js: Interfaz web principal
├── packages/
│   ├── db/                # Cliente y migraciones de Supabase compartidos
│   ├── tsconfig/          # Configuraciones de TypeScript compartidas
│   └── types/             # DTOs y tipos TypeScript compartidos
├── turbo.json             # Pipeline de compilación y caché de Turborepo
├── package.json           # Configuración del Monorrepo raíz
├── pnpm-workspace.yaml    # Configuración de workspaces de pnpm
└── pnpm-lock.yaml         # Lockfile global de pnpm
```

---

## 2. Regla Obligatoria: Actualización de la Bitácora
*   **Instrucción:** Cada vez que realices una tarea que modifique la arquitectura, agregue dependencias, cambie contratos de APIs o cree nuevas características clave, **debes actualizar de forma obligatoria el archivo de bitácora** ubicado en `documentation/docs/07-bitacora.md`.
*   **Formato de Registro:** El registro debe ser conciso, ordenado cronológicamente (lo más nuevo arriba) y especificar la fecha actual, el cambio realizado y la justificación arquitectónica breve.
