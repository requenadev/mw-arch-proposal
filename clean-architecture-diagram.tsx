"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LayerInfo {
  name: string;
  description: string;
  color: string;
  folders: string[];
  examples: string[];
}

const layers: Record<string, LayerInfo> = {
  entities: {
    name: "Domain",
    description:
      "Enterprise Business Rules - Reglas de negocio puras y entidades del dominio",
    color: "#FEF3C7",
    folders: [
      "/modules/user/domain/entities/",
      "/modules/user/domain/value-objects/",
      "/modules/cart/domain/entities/",
      "/core/types/",
    ],
    examples: [
      "User.ts - Entidad de dominio",
      "Email.ts - Value Object (ej: para validar emails)",
      "Cart.ts - Entidad de carrito",
      "global.d.ts - Tipos globales de la app",
    ],
  },
  usecases: {
    name: "Use Cases",
    description:
      "Application Business Rules - Casos de uso que orquestan la lógica de negocio",
    color: "#FCA5A5",
    folders: [
      "/modules/user/application/usecases/",
      "/modules/cart/application/usecases/",
      "/modules/user/domain/repositories/",
      "/core/utils/",
      "/core/error/",
    ],
    examples: [
      "CreateUser.ts - Caso de uso para crear usuario",
      "AddItemToCart.ts - Caso de uso para agregar al carrito",
      "UserRepository.ts - Interface del repositorio",
      "AppError.ts - Manejador de errores",
    ],
  },
  controllers: {
    name: "Adapters",
    description:
      "Interface Adapters - Controladores, adaptadores, UI, hooks y stores globales",
    color: "#86EFAC",
    folders: [
      "/modules/user/infrastructure/",
      "/modules/cart/infrastructure/",
      "/modules/user/ui/components/",
      "/modules/user/ui/context/",
      "/shared/hooks/",
      "/shared/stores/",
    ],
    examples: [
      "userApi.ts - API calls",
      "userMapper.ts - Conversión DTO ↔️ Entidad",
      "UserCard.tsx - Componente UI de perfil",
      "ProfileContext.tsx - Provider de estado local",
      "useModal.ts - Hook global Zustand",
      "modalStore.ts - Store global Zustand para modals",
    ],
  },
  frameworks: {
    name: "Frameworks & Drivers",
    description:
      "Frameworks externos e infraestructura técnica: Next.js, UI global, HTTP, Config",
    color: "#93C5FD",
    folders: ["/app/", "/shared/ui/", "/lib/", "/config/", "/public/"],
    examples: [
      "layout.tsx - Layout de Next.js App Router",
      "Button.tsx - Componente UI global reusable",
      "http-client.ts - Cliente HTTP configurado",
      "env.ts - Configuración global de entorno",
    ],
  },
};

export default function CleanArchitectureDiagram() {
  const [selectedLayer, setSelectedLayer] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Merchant Web Architecture proposal
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Diagram */}
          <div className="relative">
            <div className="relative w-96 h-96 mx-auto">
              {/* Frameworks & Drivers - Outer ring (Blue) */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-slate-800 cursor-pointer flex items-center justify-center"
                style={{ backgroundColor: layers.frameworks.color }}
                onClick={() =>
                  setSelectedLayer(
                    selectedLayer === "frameworks" ? null : "frameworks"
                  )
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {/* Controllers - Third ring (Green) */}
                <motion.div
                  className="absolute w-72 h-72 rounded-full border-4 border-slate-700 cursor-pointer flex items-center justify-center"
                  style={{ backgroundColor: layers.controllers.color }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLayer(
                      selectedLayer === "controllers" ? null : "controllers"
                    );
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Use Cases - Second ring (Red) */}
                  <motion.div
                    className="absolute w-48 h-48 rounded-full border-4 border-slate-700 cursor-pointer flex items-center justify-center"
                    style={{ backgroundColor: layers.usecases.color }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLayer(
                        selectedLayer === "usecases" ? null : "usecases"
                      );
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Entities - Inner circle (Yellow) */}
                    <motion.div
                      className="absolute w-24 h-24 rounded-full border-4 border-slate-700 cursor-pointer flex items-center justify-center"
                      style={{ backgroundColor: layers.entities.color }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedLayer(
                          selectedLayer === "entities" ? null : "entities"
                        );
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-xs font-semibold text-slate-800">
                        Domain
                      </span>
                    </motion.div>

                    {/* Use Cases label in red ring */}
                    <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-slate-800 pointer-events-none">
                      Use Cases
                    </span>
                  </motion.div>

                  {/* Controllers label in green ring */}
                  <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-slate-800 pointer-events-none">
                    Adapters
                  </span>
                </motion.div>

                {/* Labels around the outer blue ring */}
                <span className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-slate-800 pointer-events-none">
                  Web
                </span>
                <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-slate-800 pointer-events-none">
                  DB
                </span>
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-xs font-semibold text-slate-800 pointer-events-none">
                  Devices
                </span>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-semibold text-slate-800 pointer-events-none">
                  UI
                </span>
                <span className="absolute top-6 right-6 text-xs font-semibold text-slate-800 pointer-events-none"></span>
              </motion.div>

              {/* Dependency arrows */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 384 384">
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="7"
                      refX="9"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
                    </marker>
                  </defs>
                  <line
                    x1="80"
                    y1="192"
                    x2="120"
                    y2="192"
                    stroke="#374151"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                  />
                  <line
                    x1="304"
                    y1="192"
                    x2="264"
                    y2="192"
                    stroke="#374151"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                  />
                </svg>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: layers.entities.color }}
                ></div>
                <span>Enterprise Business Rules</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: layers.usecases.color }}
                ></div>
                <span>Application Business Rules</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: layers.controllers.color }}
                ></div>
                <span>Interface Adapters</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: layers.frameworks.color }}
                ></div>
                <span>Frameworks & Drivers</span>
              </div>
            </div>
          </div>

          {/* Information Panel */}
          <div className="lg:sticky lg:top-8">
            <AnimatePresence mode="wait">
              {selectedLayer ? (
                <motion.div
                  key={selectedLayer}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4"
                  style={{ borderLeftColor: layers[selectedLayer].color }}
                >
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {layers[selectedLayer].name}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {layers[selectedLayer].description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">
                        📁 Estructura de Carpetas
                      </h4>
                      <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm">
                        {layers[selectedLayer].folders.map((folder, index) => (
                          <motion.div
                            key={folder}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-slate-700 py-1"
                          >
                            {folder}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">
                        💡 Ejemplos
                      </h4>
                      <div className="space-y-2">
                        {layers[selectedLayer].examples.map(
                          (example, index) => (
                            <motion.div
                              key={example}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <span className="text-green-500 mt-1">•</span>
                              <span className="text-slate-700">{example}</span>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <div className="text-6xl mb-4">🏗️</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Explora la Arquitectura
                  </h3>
                  <p className="text-slate-600">
                    Haz click sobre cualquier capa del diagrama para ver cómo se
                    organiza en nuestro proyecto de Next.js
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            🎯 Principios de Clean Architecture
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Dependency Rule
              </h3>
              <p className="text-sm text-slate-600">
                Las dependencias solo pueden apuntar hacia adentro
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🧩</div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Separation of Concerns
              </h3>
              <p className="text-sm text-slate-600">
                Cada capa tiene una responsabilidad específica
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="font-semibold text-slate-800 mb-2">Testability</h3>
              <p className="text-sm text-slate-600">
                Fácil testing independiente de frameworks
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Maintainability
              </h3>
              <p className="text-sm text-slate-600">
                Código más mantenible y escalable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
