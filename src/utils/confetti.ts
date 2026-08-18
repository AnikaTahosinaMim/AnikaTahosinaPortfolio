import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  try {
    // Left burst
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7, x: 0.2 },
      colors: ['#06b6d4', '#3b82f6', '#8b5cf6', '#10b981'],
    });

    // Right burst
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7, x: 0.8 },
      colors: ['#06b6d4', '#3b82f6', '#8b5cf6', '#10b981'],
    });
  } catch (error) {
    console.log('Confetti trigger skipped', error);
  }
};
