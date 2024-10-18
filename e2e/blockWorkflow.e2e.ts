import { by, device, element } from 'detox';
import { isBlockItemScreen, isBlockScreen, isTransactionScreen } from './common/screenChecker';

describe('Show the User Workflow', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show Block Screen successfully', async () => {
    await isBlockScreen();
  });

  it('should navigate to Transaction Screen Screen', async () => {
    const transactionBottomNavigationIcon = await element(by.id(`navigateToTransactionScreen`));
    await transactionBottomNavigationIcon.tap();

    await isTransactionScreen();

  });
  it('should navigate to Block Item Screen Screen', async () => {

    const blockID = 'ba42b90a390b4f3332b779b98a43288f17ce26ab6395f178c998a54aa6b136a2';
    const blockListItemClickable = await element(by.id(`block.${blockID}`));
    await blockListItemClickable.tap();
    await isBlockItemScreen(blockID);
  });
});
