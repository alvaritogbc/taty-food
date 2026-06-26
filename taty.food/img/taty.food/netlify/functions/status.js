// netlify/functions/status.js
//
// Función SIN dependencias externas (no usa npm packages), compatible
// 100% con deploy por drag & drop en Netlify, porque no necesita
// "npm install" en el servidor.
//
// Usa JSONBin.io (https://jsonbin.io) como almacenamiento del estado
// abierto/cerrado, accedido por fetch() nativo de Node.js.
//
// GET  -> devuelve { open: true/false, updatedAt: "..." }
// POST -> body: { open: true/false, password: "..." } -> actualiza el estado
//
// CONFIGURACIÓN NECESARIA (Netlify -> Site settings -> Environment variables):
//   ADMIN_PASSWORD   -> la contraseña del panel /admin
//   JSONBIN_API_KEY  -> tu X-Master-Key de jsonbin.io
//   JSONBIN_BIN_ID   -> el ID del bin que creaste en jsonbin.io

const JSONBIN_API_KEY = process.env.JSONBIN_API_KEY;
const JSONBIN_BIN_ID  = process.env.JSONBIN_BIN_ID;
const ADMIN_PASSWORD  = process.env.ADMIN_PASSWORD || "taty1234";

const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`;

exports.handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "no-store",
  };

  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (!JSONBIN_API_KEY || !JSONBIN_BIN_ID) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Faltan configurar JSONBIN_API_KEY y/o JSONBIN_BIN_ID en Netlify.",
      }),
    };
  }

  // ───────────── GET: leer estado ─────────────
  if (event.httpMethod === "GET") {
    try {
      const res = await fetch(`${JSONBIN_URL}/latest`, {
        headers: { "X-Master-Key": JSONBIN_API_KEY },
      });

      if (!res.ok) {
        const text = await res.text();
        return {
          statusCode: 502,
          headers,
          body: JSON.stringify({ error: "Error al leer JSONBin", detail: text }),
        };
      }

      const json = await res.json();
      const record = json.record || { open: false, updatedAt: new Date().toISOString() };

      return { statusCode: 200, headers, body: JSON.stringify(record) };
    } catch (err) {
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ error: "No se pudo conectar con JSONBin", detail: String(err) }),
      };
    }
  }

  // ───────────── POST: cambiar estado ─────────────
  if (event.httpMethod === "POST") {
    let body;
    try {
      body = JSON.parse(event.body || "{}");
    } catch {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Body inválido" }) };
    }

    if (body.password !== ADMIN_PASSWORD) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: "Contraseña incorrecta" }) };
    }

    if (typeof body.open !== "boolean") {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Falta el campo 'open' (true/false)" }),
      };
    }

    const record = { open: body.open, updatedAt: new Date().toISOString() };

    try {
      const res = await fetch(JSONBIN_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": JSONBIN_API_KEY,
        },
        body: JSON.stringify(record),
      });

      if (!res.ok) {
        const text = await res.text();
        return {
          statusCode: 502,
          headers,
          body: JSON.stringify({ error: "Error al escribir en JSONBin", detail: text }),
        };
      }

      return { statusCode: 200, headers, body: JSON.stringify(record) };
    } catch (err) {
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ error: "No se pudo conectar con JSONBin", detail: String(err) }),
      };
    }
  }

  return { statusCode: 405, headers, body: JSON.stringify({ error: "Método no permitido" }) };
};