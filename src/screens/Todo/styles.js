import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
`;

export const Input = styled.TextInput`
  border: 1px solid black;
  padding: 10px;
  width: 100%;
  height: 40px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: teal;
  border-radius: 5px;
  position: absolute;
  bottom: 10;
  left: 0;
  right: 0;
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
