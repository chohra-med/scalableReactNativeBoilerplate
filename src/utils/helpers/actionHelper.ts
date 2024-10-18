const checkActionSuffix = (suffix: string) => (actionType: string) =>
  actionType.endsWith(`/${suffix}`);

export const isPendingAction = checkActionSuffix('pending');
export const isFulfilledAction = checkActionSuffix('fulfilled');
export const isRejectedAction = checkActionSuffix('rejected');
