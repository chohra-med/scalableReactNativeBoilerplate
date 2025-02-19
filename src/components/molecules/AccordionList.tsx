import React, {useCallback} from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {List} from 'react-native-paper';
import {useAppTheme} from '~/container/AppThemeProvider';

interface AccordionListProps {
  style?: StyleProp<ViewStyle>;
  title: string;
  expanded: boolean;
  onPress: () => void;
  children: React.ReactNode;
}

const AccordionList = ({
  style,
  title,
  expanded,
  onPress,
  children,
}: AccordionListProps): JSX.Element => {
  const {colors} = useAppTheme();

  const handlePress = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <List.Accordion
      style={[styles.listItem, style, {backgroundColor: colors.surface}]}
      title={title}
      expanded={expanded}
      onPress={handlePress}>
      {children}
    </List.Accordion>
  );
};

export default React.memo(AccordionList);

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
  },
});
