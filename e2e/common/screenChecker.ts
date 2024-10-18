import { by, element, expect } from 'detox';
import { Block } from '~/api/types';

export const isBlockScreen = async () => {
  const blockScreen = element(by.id('screen.blockScreen'));
  await expect(blockScreen).toBeVisible();
};
export const isTransactionScreen = async () => {
  const transactionScreen = element(by.id('screen.transactionScreen'));
  await expect(transactionScreen).toBeVisible();
};

export const isBlockItemScreen = async (blockID: Block['id']) => {
  const blockItemScreen = element(by.id(`screen.BlockItemScreen.${blockID}`));
  await expect(blockItemScreen).toBeVisible();
};
