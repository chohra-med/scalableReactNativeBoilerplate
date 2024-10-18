import * as React from 'react';
import {ActivityIndicator} from 'react-native-paper';

interface Props {
  loading?: boolean;
}

export const LoadingComponent: React.FC<Props> = ({loading = false}) => {
  if (loading) {
    return <ActivityIndicator testID="activity-indicator" />;
  }
  return null;
};

export default React.memo(LoadingComponent);
