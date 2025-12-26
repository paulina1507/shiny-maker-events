/* ======================================
   WhatsApp – Shiny Maker Events
   ====================================== */

/* CONFIGURACIÓN */
const WHATSAPP_NUMBER = "2212706617"; 
// Ejemplo México: 5215512345678

/* MENSAJES */
const messages = {
  general: `Hola ✨
Me gustaría solicitar información sobre las invitaciones digitales de Shiny Maker Events.
¿Podrían brindarme detalles sobre los paquetes disponibles?`,

  esencia: `Hola ✨
Me interesa el paquete Esencia para una invitación digital.
¿Podrían brindarme más información?`,

  armonia: `Hola ✨
Me interesa el paquete Armonía con control de invitados y mesas.
¿Podrían brindarme más información?`,

  experiencia: `Hola ✨
Me interesa el paquete Experiencia con QR y pase digital.
¿Podrían brindarme más detalles?`
};

/* FUNCIÓN BASE */
function openWhatsApp(type = "general") {
  const message = messages[type] || messages.general;
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, "_blank");
}
