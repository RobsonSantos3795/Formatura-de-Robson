function sendWhatsAppMessage(isAttending) {
    const phoneNumber = "5571982569054"; // Substitua pelo número de telefone correto
    const message = isAttending 
        ? "Olá, confirmo minha presença na festa!" 
        : "Olá, infelizmente não poderei comparecer à festa!";
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}