import React from "react";
import { Folder, File } from "@phosphor-icons/react/dist/ssr";
import styles from "./FileStructure.module.scss";

export default function FileStructure() {
  return (
    <div className={styles.container}>
      <h2>Estructura de Archivos - Clean Architecture</h2>
      <div className={styles.fileTree}>
        <pre className={styles.structure}>
          {`/src
  `}
          <Folder size={16} className={styles.folderIcon} />
          {`app                  # Next.js App Directory (layout global, páginas, errores, loading)
    `}
          <File size={14} className={styles.fileIcon} />
          {`layout.tsx          # Layout global de la aplicación
    `}
          <File size={14} className={styles.fileIcon} />
          {`page.tsx            # Página principal (landing page o entrypoint)
    `}
          <File size={14} className={styles.fileIcon} />
          {`error.tsx           # Página de error global
    `}
          <File size={14} className={styles.fileIcon} />
          {`loading.tsx         # Loading global para Server Components

  `}
          <Folder size={16} className={styles.folderIcon} />
          {`modules              # Features de negocio (organizado por dominio)
    `}
          <Folder size={16} className={styles.folderIcon} />
          {`user               # Módulo "User" (usuarios)
      `}
          <Folder size={16} className={styles.folderIcon} />
          {`domain           # Reglas de negocio (entidades, value objects, contratos)
        `}
          <Folder size={16} className={styles.folderIcon} />
          {`entities
          `}
          <File size={14} className={styles.fileIcon} />
          {`User.ts       # Entidad de dominio (modelo de negocio, sin dependencias externas)
        `}
          <Folder size={16} className={styles.folderIcon} />
          {`value-objects
          `}
          <File size={14} className={styles.fileIcon} />
          {`Email.ts      # Value Object para validar/normalizar emails
        `}
          <Folder size={16} className={styles.folderIcon} />
          {`repositories
          `}
          <File size={14} className={styles.fileIcon} />
          {`UserRepository.ts  # Interface del repositorio (contrato abstracto)
      `}
          <Folder size={16} className={styles.folderIcon} />
          {`application      # Casos de uso (orquestación de lógica de negocio)
        `}
          <Folder size={16} className={styles.folderIcon} />
          {`usecases
          `}
          <File size={14} className={styles.fileIcon} />
          {`CreateUser.ts        # Caso de uso: Crear un usuario
          `}
          <File size={14} className={styles.fileIcon} />
          {`GetUserProfile.ts    # Caso de uso: Obtener perfil de usuario
      `}
          <Folder size={16} className={styles.folderIcon} />
          {`infrastructure    # Implementaciones concretas (APIs, DBs, adaptadores)
        `}
          <Folder size={16} className={styles.folderIcon} />
          {`api
          `}
          <File size={14} className={styles.fileIcon} />
          {`userApi.ts          # Llamados HTTP al backend o servicios externos
        `}
          <Folder size={16} className={styles.folderIcon} />
          {`mappers
          `}
          <File size={14} className={styles.fileIcon} />
          {`userMapper.ts       # Conversión DTO ↔️ Entidad de dominio
        `}
          <Folder size={16} className={styles.folderIcon} />
          {`persistence
          `}
          <File size={14} className={styles.fileIcon} />
          {`userRepositoryImpl.ts  # Implementación concreta de UserRepository
      `}
          <Folder size={16} className={styles.folderIcon} />
          {`ui                 # Páginas y componentes específicos del módulo
        `}
          <Folder size={16} className={styles.folderIcon} />
          {`profile
          `}
          <File size={14} className={styles.fileIcon} />
          {`page.tsx            # Página del perfil de usuario (Next.js page)
          `}
          <File size={14} className={styles.fileIcon} />
          {`layout.tsx          # Layout para la sección de perfil
          `}
          <Folder size={16} className={styles.folderIcon} />
          {`context
            `}
          <File size={14} className={styles.fileIcon} />
          {`ProfileContext.tsx     # Provider local para estado compartido (React Context)
          `}
          <Folder size={16} className={styles.folderIcon} />
          {`components
            `}
          <Folder size={16} className={styles.folderIcon} />
          {`UserCard
              `}
          <File size={14} className={styles.fileIcon} />
          {`UserCard.tsx            # Componente UI específico de UserCard
              `}
          <File size={14} className={styles.fileIcon} />
          {`UserCard.module.css     # Estilos del UserCard
              `}
          <File size={14} className={styles.fileIcon} />
          {`UserCard.stories.tsx    # Storybook del UserCard
              `}
          <File size={14} className={styles.fileIcon} />
          {`UserCard.test.tsx       # Test unitario del UserCard
              `}
          <File size={14} className={styles.fileIcon} />
          {`types.ts                # Tipos específicos del UserCard
              `}
          <File size={14} className={styles.fileIcon} />
          {`constants.ts            # Constantes específicas del UserCard
              `}
          <File size={14} className={styles.fileIcon} />
          {`UserCard.helpers.ts     # Lógica auxiliar
        `}
          <Folder size={16} className={styles.folderIcon} />
          {`settings
          `}
          <File size={14} className={styles.fileIcon} />
          {`page.tsx            # Página de settings (configuración de usuario)
          `}
          <Folder size={16} className={styles.folderIcon} />
          {`components
            `}
          <Folder size={16} className={styles.folderIcon} />
          {`SettingsForm
              `}
          <File size={14} className={styles.fileIcon} />
          {`SettingsForm.tsx         # Formulario de configuración
              `}
          <File size={14} className={styles.fileIcon} />
          {`SettingsForm.module.css  # Estilos locales
              `}
          <File size={14} className={styles.fileIcon} />
          {`SettingsForm.test.tsx    # Test unitario del formulario
              `}
          <File size={14} className={styles.fileIcon} />
          {`SettingsForm.helpers.ts  # Lógica auxiliar (opcional)
              `}
          <File size={14} className={styles.fileIcon} />
          {`types.ts                 # Tipos específicos del formulario
              `}
          <File size={14} className={styles.fileIcon} />
          {`constants.ts             # Constantes

  `}
          <Folder size={16} className={styles.folderIcon} />
          {`shared                      # Recursos globales (UI, hooks, providers, contextos, stores)
    `}
          <Folder size={16} className={styles.folderIcon} />
          {`ui
      `}
          <Folder size={16} className={styles.folderIcon} />
          {`Button
        `}
          <File size={14} className={styles.fileIcon} />
          {`Button.tsx             # Componente Button global
        `}
          <File size={14} className={styles.fileIcon} />
          {`Button.module.css
        `}
          <File size={14} className={styles.fileIcon} />
          {`Button.stories.tsx
        `}
          <File size={14} className={styles.fileIcon} />
          {`Button.test.tsx
        `}
          <File size={14} className={styles.fileIcon} />
          {`types.ts
        `}
          <File size={14} className={styles.fileIcon} />
          {`constants.ts
        `}
          <File size={14} className={styles.fileIcon} />
          {`Button.helpers.ts (opcional)
    `}
          <Folder size={16} className={styles.folderIcon} />
          {`hooks
      `}
          <File size={14} className={styles.fileIcon} />
          {`useTheme.ts              # Hook para contexto de theme
      `}
          <File size={14} className={styles.fileIcon} />
          {`useModal.ts              # Hook para modals globales (zustand)
      `}
          <File size={14} className={styles.fileIcon} />
          {`useToast.ts              # Hook para toasts globales (zustand)
    `}
          <Folder size={16} className={styles.folderIcon} />
          {`providers
      `}
          <File size={14} className={styles.fileIcon} />
          {`TanStackProvider.tsx     # Provider global de TanStack Query
    `}
          <Folder size={16} className={styles.folderIcon} />
          {`stores
      `}
          <File size={14} className={styles.fileIcon} />
          {`modalStore.ts            # Estado global para modals (Zustand)
      `}
          <File size={14} className={styles.fileIcon} />
          {`toastStore.ts            # Estado global para toasts (Zustand)
      `}
          <File size={14} className={styles.fileIcon} />
          {`cartStore.ts (opcional)  # Estado global para carrito (Zustand)

  `}
          <Folder size={16} className={styles.folderIcon} />
          {`core
    `}
          <Folder size={16} className={styles.folderIcon} />
          {`types
      `}
          <File size={14} className={styles.fileIcon} />
          {`global.d.ts              # Tipos globales de la app
      `}
          <File size={14} className={styles.fileIcon} />
          {`user.d.ts                # Tipos específicos de usuario
    `}
          <Folder size={16} className={styles.folderIcon} />
          {`utils
      `}
          <File size={14} className={styles.fileIcon} />
          {`dateFormat.ts            # Formateo de fechas
      `}
          <File size={14} className={styles.fileIcon} />
          {`stringHelpers.ts         # Funciones auxiliares de strings
    `}
          <Folder size={16} className={styles.folderIcon} />
          {`error
      `}
          <File size={14} className={styles.fileIcon} />
          {`AppError.ts              # Clase de errores globales
      `}
          <File size={14} className={styles.fileIcon} />
          {`errorHandler.ts          # Manejador global de errores
    `}
          <File size={14} className={styles.fileIcon} />
          {`ioc.ts                     # Inyección de dependencias para casos de uso

  `}
          <Folder size={16} className={styles.folderIcon} />
          {`lib
    `}
          <File size={14} className={styles.fileIcon} />
          {`http-client.ts             # Fetcher (Axios o Fetch configurado)
    `}
          <File size={14} className={styles.fileIcon} />
          {`zod-schemas.ts             # Schemas validados con Zod

  `}
          <Folder size={16} className={styles.folderIcon} />
          {`config
    `}
          <File size={14} className={styles.fileIcon} />
          {`env.ts                     # Variables de entorno
    `}
          <File size={14} className={styles.fileIcon} />
          {`next.config.mjs            # Configuración de Next.js

  `}
          <Folder size={16} className={styles.folderIcon} />
          {`styles
    `}
          <File size={14} className={styles.fileIcon} />
          {`globals.css                # Estilos globales
    `}
          <File size={14} className={styles.fileIcon} />
          {`theme.css                  # Estilos de theme (opcional)

  `}
          <Folder size={16} className={styles.folderIcon} />
          {`public                      # Archivos estáticos (imágenes, fuentes, etc.)

  `}
          <Folder size={16} className={styles.folderIcon} />
          {`tests                       # Pruebas unitarias e integrales
    `}
          <Folder size={16} className={styles.folderIcon} />
          {`unit
      `}
          <File size={14} className={styles.fileIcon} />
          {`createUserUseCase.test.ts     # Test unitario del caso de uso CreateUser
      `}
          <File size={14} className={styles.fileIcon} />
          {`getUserProfileUseCase.test.ts # Test unitario del caso de uso GetUserProfile
    `}
          <Folder size={16} className={styles.folderIcon} />
          {`integration
      `}
          <File size={14} className={styles.fileIcon} />
          {`userApi.test.ts               # Test de integración de API de usuario

  `}
          <Folder size={16} className={styles.folderIcon} />
          {`.storybook                      # Configuración de Storybook
    `}
          <File size={14} className={styles.fileIcon} />
          {`main.ts
    `}
          <File size={14} className={styles.fileIcon} />
          {`preview.ts`}
        </pre>
      </div>
    </div>
  );
}
