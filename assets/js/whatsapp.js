/* ======================================
   WhatsApp – Shiny Maker 
   ====================================== */

/* CONFIGURACIÓN */
const WHATSAPP_NUMBER = "522212706617";
// Ejemplo México: 5215512345678

/* MENSAJES */
const messages = {
  general: `Hola
Me gustaría solicitar información sobre las invitaciones digitales de Shiny Maker Studio.
¿Podrían brindarme detalles sobre los paquetes disponibles?`,

  esencia: `Hola
Me interesa el paquete Esencia para una invitación digital.
¿Podrían brindarme más información?`,

  armonia: `Hola
Me interesa el paquete Armonía con control de invitados y mesas.
¿Podrían brindarme más información?`,

  experiencia: `Hola
Me interesa el paquete Experiencia con QR y pase digital.
¿Podrían brindarme más detalles?`,

  /* EVENTOS */
  boda: `Hola
Me gustaría información sobre invitaciones digitales para boda.
Quisiera conocer los paquetes disponibles y el proceso.`,

  xv: `Hola
Me interesa una invitación digital para XV años.
¿Podrían brindarme opciones y precios?`,

  bautizo: `Hola
Estoy buscando una invitación digital para bautizo.
¿Podrían darme más información, por favor?`,

  cumple: `Hola
Me interesa una invitación digital para cumpleaños.
¿Podrían brindarme detalles de los paquetes?`
};

/* FUNCIÓN BASE */
function openWhatsApp(type = "general") {
  const message = messages[type] || messages.general;
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, "_blank");
}
