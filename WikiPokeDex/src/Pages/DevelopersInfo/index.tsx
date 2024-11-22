import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { GlobalCss } from '../../Global/GlobalCss';
import { Header } from '../../Components/Header';
import { Button } from '../../Components/ButtonForm';
import { NavigationProps } from '../../Routes/NavegationPage';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { developers, InfoStyles } from './Infos';
import { Linking } from 'react-native';

export function DevelopersInfos() {
  const navigation = useNavigation<NavigationProps>();

  const handleHome= () => {
    navigation.navigate('Mytabs');
  };

  return (
    <View style={GlobalCss.body}>
      <Header
        formUp={
          <Button
            form={<MaterialCommunityIcons name="home-import-outline" size={30} color="black" />}
            title=""
            handleOnChange={() => handleHome()}
          />
        }
      />

      <ScrollView style={InfoStyles.PrincipalContent}>
        {developers.map((developer, index) => (
          <View key={index} style={styles.card}>
            <Image source={developer.photo} style={styles.profileImage} />

            <Text style={styles.name}>{developer.name}</Text>

            <View style={styles.icons}>
              <TouchableOpacity onPress={() => Linking.openURL(developer.github)}>
                <Image
                  source={{
                    uri: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                  }}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(developer.linkedin)}>
                <Image
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg',
                  }}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 25,
    marginRight: 12,
  },
  name: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  icons: {
    flexDirection: 'row',
    gap: 8,
  },
  icon: {
    width: 36,
    height: 36,
  },
});
