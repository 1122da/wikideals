import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import CategoriesCard from '../../Components/Categories/CategoriesCard';
import images from '../../Assets/images';
import CategoriesItem from '../../Components/Categories/CategoriesItem';
const Home = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const data = [
    {
      name: 'TECH',
      img: images.tech,
    },
    {
      name: 'MODA',
      img: images.moda,
    },
    {
      name: 'CASA',
      img: images.casa,
    },
    {
      name: 'BAMBINI',
      img: images.bambini,
    },
    {
      name: 'SPORT',
      img: images.sports,
    },
    {
      name: 'SPESA',
      img: images.spesa,
    },
    {
      name: 'SPEASA',
      img: images.spesa2,
    },
    {
      name: 'FAI DA TE',
      img: images.fai,
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: '#ffffff'}}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image source={require('../../Assets/images/logo.jpg')} />
        </View>
        <View style={{margin: 10}}>
          <TouchableOpacity onPress={() => setShowModal(!showModal)}>
            <TextInput
              style={{height: 35, borderRadius: 5}}
              placeholder="Che offerta cerchi?"
              mode="outlined"
              outlineColor="rgba(248, 248, 248, 1)"
              activeOutlineColor="rgba(248, 248, 248, 1)"
              right={<TextInput.Icon name="search-web" />}
            />
          </TouchableOpacity>
          {showModal && (
            <View style={{}}>
              <Text
                style={{
                  marginTop: 10,
                  color: '#000000',
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  fontSize: 13,
                  lineHeight: 18,
                  borderColor: 'rgba(0, 0, 0, 0.3)',
                }}>
                Product Keyword Suggestion 1
              </Text>
              <Text
                style={{
                  color: '#000000',
                  marginTop: 10,
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  fontSize: 13,
                  lineHeight: 18,
                  borderColor: 'rgba(0, 0, 0, 0.3)',
                }}>
                Product Keyword Suggestion 2
              </Text>
              <Text
                style={{
                  color: '#000000',
                  borderBottomWidth: 1,
                  marginTop: 10,
                  paddingBottom: 10,
                  fontSize: 13,
                  lineHeight: 18,
                  borderColor: 'rgba(0, 0, 0, 0.3)',
                }}>
                Product Keyword Suggestion 3
              </Text>
              <Text
                style={{
                  color: '#000000',
                  marginTop: 10,
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  fontSize: 13,
                  lineHeight: 18,
                  borderColor: 'rgba(0, 0, 0, 0.3)',
                }}>
                Product Keyword Suggestion 4
              </Text>
            </View>
          )}
        </View>

        <View style={{margin: 20}}>
          <Text
            style={{
              fontSize: 10,
              lineHeight: 14,
              color: '#515151',
              fontWeight: '600',
            }}>
            Esplora per categoria
          </Text>
          <View>
            <FlatList
              data={data}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              keyExtractor={item => item.name}
              renderItem={({item}) => (
                <CategoriesCard title={item.name} image={item.img} />
              )}
            />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginBottom: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text>Filtra Offerte</Text>
          <TouchableOpacity
            style={{
              marginLeft: 10,
              width: 80,
              height: 20,
              backgroundColor: '#575CFF',
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 8, lineHeight: 14, color: '#ffffff'}}>
              TUTTE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 10,
              width: 80,
              height: 20,
              borderWidth: 1,
              borderColor: '#575CFF',
              // backgroundColor: '#575CFF',
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 8, lineHeight: 14, color: '#575CFF'}}>
              Solo Codici
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 10,
              width: 80,
              height: 20,
              borderWidth: 1,
              borderColor: '#575CFF',
              // backgroundColor: '#575CFF',
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('categoryView')}>
            <Text style={{fontSize: 8, lineHeight: 14, color: '#575CFF'}}>
              OFFERTE LAMPO
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
