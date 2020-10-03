import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
`;

export const Input = styled.TextInput`
  border: 1px solid darkgrey;
  font-size: 18px;
  margin: 10px;
  height: 60px;
  padding: 0px 20px;
`;

export const Button = styled.TouchableOpacity`
  /* width: 100%; */
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: teal;
  border-radius: 5px;
  position: absolute;
  bottom: 40px;
  left: 10px;
  right: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
`;

export const TodoItem = styled.Text`
  padding: 20px;
  margin: 10px;
  border: 1px solid ${(props) => (props.active ? 'green' : 'red')};
  color: ${(props) => (props.active ? 'green' : 'red')};
  font-size: 16px;
`;
