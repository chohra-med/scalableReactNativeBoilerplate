import { by, element, expect } from 'detox';

export const isHomeScreen = async () => {
  const homeScreen = element(by.id('screen.homeScreen'));
  await expect(homeScreen).toBeVisible();
};
