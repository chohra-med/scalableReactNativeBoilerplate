import {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {List} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import AccordionList from '~/components/molecules/AccordionList';
import SwitchListItem from '~/components/molecules/SwitchListItem';
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
      <SwitchListItem
        title={t('settingScreen.toggleTheme')}
        value={isDarkMode}
        onValueChange={onTogglePress}
      />

      <AccordionList
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
      </AccordionList>
    </SafeAreaView>
  );
};

export default SettingScreen;
