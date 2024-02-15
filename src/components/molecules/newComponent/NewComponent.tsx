import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import CustomTabs from '../../atoms/customTabs/CustomTabs';
import {customtabs, iconStyle} from '../../atoms/customTabs/CustomTabs.style';
import NotificationDetail from '../../atoms/notificationDetail/NotificationDetail';
import {styles} from './NewComponent.style';

const NewComponent = () => {
  return (
    <>
      <CustomTabs
        icons="notifications"
        text="Bildirimler"
        iconsOne="right"
        iconStyle={iconStyle}
      />
      <TouchableOpacity>
        <NotificationDetail
          url={require(`../../../../assets/images/lucy1.jpeg`)}
          text="Yeni içerik"
          content="Lucy"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <NotificationDetail
          url={require(`../../../../assets/images/prestij.jpg`)}
          text="Yeni içerik"
          content="Prestij"
        />
      </TouchableOpacity>
      <View style={styles.tabs}>
        <CustomTabs
          icons="download"
          text="İndirilenler"
          iconsOne="right"
          customtabs={customtabs}
          iconStyle={''}
        />
        <TouchableOpacity>
          <NotificationDetail
            url={require(`../../../../assets/images/ınception.jpg`)}
            text="Yeni içerik"
            content="Inception"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <NotificationDetail
            url={require(`../../../../assets/images/marvel6.jpg`)}
            text="Yeni içerik"
            content="Yenilmezler"
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NewComponent;
