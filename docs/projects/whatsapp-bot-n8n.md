# 🤖 Bot de WhatsApp con IA – Automatización con n8n

## Descripción general

Este proyecto demuestra la creación de un bot conversacional para WhatsApp utilizando **n8n** como motor de automatización e **IA** para la generación de respuestas automáticas. Está pensado para empresas que necesitan responder consultas frecuentes de forma inmediata, escalable y sin intervención humana constante.

El foco del proyecto está en la **arquitectura, la lógica del flujo y la integración con APIs**, más que en una simple demo superficial.

---

## 🎯 Objetivo

Automatizar la atención inicial por WhatsApp mediante:

* Recepción de mensajes
* Procesamiento del contenido
* Generación de respuestas inteligentes
* Preparación para entorno productivo con WhatsApp Cloud API

---

## 🧩 Flujo de funcionamiento

1. **Trigger de WhatsApp (Webhook)**
2. Normalización del mensaje entrante
3. Procesamiento con IA
4. Generación de respuesta automática
5. Envío de respuesta al usuario

> En entorno local se utilizan **datos simulados (mock data)** para pruebas, debido a restricciones de verificación y webhooks externos.

---

## 🛠️ Tecnologías utilizadas

* **n8n** (Workflow Automation)
* **WhatsApp Cloud API**
* **OpenAI API**
* Webhooks
* JSON / REST APIs
* Docker

---

## 🧪 Pruebas y validación

El flujo fue probado localmente mediante:

* Ejecución manual del trigger
* Uso de **mock data** simulando mensajes reales de WhatsApp
* Validación del procesamiento y generación de respuestas por IA

Esto permite verificar toda la lógica del bot sin necesidad de exponer el webhook en producción.

---

## 🔐 Seguridad y buenas prácticas

* Uso de variables de entorno para tokens y credenciales
* Separación entre entorno de prueba y producción
* No exposición de claves sensibles

---

## 📚 Aprendizajes clave

* Automatización de flujos complejos con n8n
* Integración de IA en procesos reales de negocio
* Manejo de webhooks y APIs externas
* Diseño de bots conversacionales escalables

---

## 📸 Evidencia visual

El proyecto incluye capturas del flujo completo y ejecuciones con datos simulados para demostrar el funcionamiento de la lógica.
---

## 📸 Capturas del proyecto
> Las capturas muestran ejecuciones con datos simulados y flujos reales del workflow.

<div class="carousel">
  <img src="/images/n8n/mock-data.png" alt="Ejecución con mock data en n8n" />
  <img src="/images/n8n/flow-completo.png" alt="Flujo completo del bot de WhatsApp" />
  <img src="/images/n8n/webhook-meta.png" alt="Configuración del webhook en Meta" />
</div>

---

## 🚀 Estado del proyecto

✔️ Funcional a nivel lógica y arquitectura
✔️ Listo para despliegue en entorno productivo
✔️ Adaptable a distintos casos de uso (atención al cliente, soporte, ventas)

---

Si querés escalar este bot a producción, solo es necesario completar la verificación del webhook y asociar un número de WhatsApp Business en Meta.
