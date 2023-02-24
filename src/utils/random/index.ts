export const randomNumber = (finalRange: number): number => {
  // The initial range will always be 0
  return Math.floor(Math.random() * finalRange);
};

export const randomMessage = (): string => {
  const messages = [
    // Acknowledgment
    'Obrigado por escolher nos escolher. Estamos aqui para ajudá-lo a fazer seu negócio crescer!',
    'Estamos animados para ajudá-lo a gerenciar seu negócio de forma eficiente!',
    // Salutation
    'Como você está? Esperamos que tenha um bom dia de trabalho...',
    // Explanation
    'Este é o seu painel de controle, onde pode estar por dentro de tudo!',
    // Thinking
    'Estou certo de que juntos alcançaremos coisas incríveis!',
    'Desfrute do melhor da tecnologia para o seu negócio!',
    'A tecnologia é fundamental para o sucesso de uma empresa no mundo moderno!',
    'Tecnologia + Seu negócio = SUCESSO',
  ];
  return messages[randomNumber(messages.length)];
};
