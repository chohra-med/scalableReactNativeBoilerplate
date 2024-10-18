import {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import {List, Switch} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {useAppTheme} from '~/container/AppThemeProvider';
import {appConfigActions} from '~/redux/appConfig/appConfig';
import {AppLanguageType} from '~/redux/appConfig/appConfigModel';
import appConfigSelectors from '~/redux/appConfig/appConfigSelectors';
import {containerStyle} from '~/theme/globalStyling/cards';

export const SettingScreen = (): JSX.Element => {
  const [isAccordionVisible, setAccordionVisible] = useState(false);

  // Just adding the right hook to change translation, because we are using it on  LanguageHelper context
  const {t} = useTranslation('common');
  const isDarkMode = useSelector(appConfigSelectors.isDarkMode);

  const dispatch = useDispatch();
  const {colors} = useAppTheme();

  const handleAccordionPress = useCallback(() => {
    setAccordionVisible(prevState => !prevState);
  }, [setAccordionVisible]);

  const onTogglePress = useCallback(() => {
    dispatch(appConfigActions.toggleDarkMode());
  }, [dispatch]);

  const onLanguagePress = useCallback(
    (language: AppLanguageType) => {
      dispatch(appConfigActions.changeLanguage(language));
      handleAccordionPress();
    },
    [dispatch, handleAccordionPress],
  );

  return (
    <SafeAreaView
      testID="screen.settingScreen"
      style={containerStyle.container}>
      <List.Item
        style={[styles.listItem, {backgroundColor: colors.surface}]}
        titleStyle={{color: colors.text}}
        title={t('settingScreen.toggleTheme')}
        right={() => (
          <Switch value={isDarkMode} onValueChange={onTogglePress} />
        )}
      />

      <List.Accordion
        style={[styles.listItem, {backgroundColor: colors.surface}]}
        title={t('settingScreen.changeLanguage')}
        expanded={isAccordionVisible}
        onPress={handleAccordionPress}>
        <List.Item
          onPress={() => onLanguagePress(AppLanguageType.FRENCH)}
          title={t('settingScreen.frLanguage')}
        />
        <List.Item
          onPress={() => onLanguagePress(AppLanguageType.ENGLISH)}
          title={t('settingScreen.enLanguage')}
        />
        <List.Item
          onPress={() => onLanguagePress(AppLanguageType.ARABIC)}
          title={t('settingScreen.arLanguage')}
        />
      </List.Accordion>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
  },
});
export default SettingScreen;
