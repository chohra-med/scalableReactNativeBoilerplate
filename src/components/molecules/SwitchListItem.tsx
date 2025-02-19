import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {List, Switch} from 'react-native-paper';
import {useAppTheme} from '~/container/AppThemeProvider';

interface SwitchListItemProps {
  title: string;
  value: boolean;
  onValueChange: () => void;
}

const SwitchListItem = ({
  title,
  value,
  onValueChange,
}: SwitchListItemProps): JSX.Element => {
  const {colors} = useAppTheme();

  const renderRightItem = useMemo((): React.ReactNode => {
    return <Switch value={value} onValueChange={onValueChange} />;
  }, [value, onValueChange]);

  return (
    <List.Item
      style={[styles.listItem, {backgroundColor: colors.surface}]}
      titleStyle={{color: colors.text}}
      title={title}
      right={() => renderRightItem}
    />
  );
};

export default React.memo(SwitchListItem);

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
  },
});
