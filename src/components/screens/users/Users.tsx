// Users.tsx
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Users.style';
import AccoundButtons from '../../atoms/accountsButtons/AccountsButtons';
import {useUser} from '../../../../UserContext';

interface UsersProps {
  callback: () => void;
}

interface LoginData {
  imageUrl: string;
  user: string;
}

export const Users: React.FunctionComponent<UsersProps> = ({callback}) => {
  const {setSelectedUser} = useUser();

  const loginData: LoginData[] = [
    {
      imageUrl: require('../../../../assets/images/user1.jpg'),
      user: 'yiğit',
    },
    {
      imageUrl: require('../../../../assets/images/user2.jpg'),
      user: 'serkan',
    },
    {
      imageUrl: require('../../../../assets/images/user3.jpg'),
      user: 'murat',
    },
    {
      imageUrl: require('../../../../assets/images/user4.jpg'),
      user: 'abüzer',
    },
  ];

  const handleUserClick = (userName: string) => {
    setSelectedUser(userName);
    callback();
  };

  return (
    <View style={styles.container}>
      <View style={{marginTop: 60}}>
        <Text style={styles.textStyle}>Kim izliyor?</Text>
        <TouchableOpacity>
          <Text style={styles.stylesa}>Düzenle</Text>
        </TouchableOpacity>
        <View style={styles.horizontalContainer}>
          {loginData.map((data, index) => (
            <AccoundButtons
              key={index}
              url={data.imageUrl}
              title={data.user}
              clicks={() => handleUserClick(data.user)}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Users;
