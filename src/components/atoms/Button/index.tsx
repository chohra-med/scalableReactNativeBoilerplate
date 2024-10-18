import {ButtonProps, Pressable, Text} from 'react-native';

type StyledButtonProps = ButtonProps & {
  style?: object;
};

const StyledButton = ({onPress, title, style, ...props}: StyledButtonProps) => {
  return (
    <Pressable onPress={onPress} style={style} {...props}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default StyledButton;
