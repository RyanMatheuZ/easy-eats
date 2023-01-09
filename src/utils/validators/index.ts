export const isCapsLockActivated = (event: any) => {
  return !!event.getModifierState('CapsLock');
};
