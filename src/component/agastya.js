import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../styles/pageStyle';

const Agastya = () => {
  //State variable for managing title
  const [title, setTitle] = useState('');

  //State variable for managing subTitle
  const [subTitle, setSubTitle] = useState('');

  //State variable for managing body
  const [body, setBody] = useState('');

  //State variable for managing rbSheetOpen
  const [rbSheetOpen, setRBsheetOpen] = useState(false);

  //State variable for managing chooseOption
  const [chooseOption, setChooseOption] = useState(false);

  //State variable for managing search value
  const [search, setSearch] = useState('');

  //State variable for managing filteredData
  const [filteredData, setFilteredData] = useState([]);

  //State variable for displaying list of values
  const selectValues = [
    {id: 1, value: 'Correct Grammar & Spelling'},
    {id: 2, value: 'Improve Writing'},
    {id: 3, value: 'Make it longer'},
    {id: 4, value: 'Make it shorter'},
    {id: 5, value: 'Summarize'},
    {id: 6, value: 'Make a To-Do list'},
  ];

  useEffect(() => {
    let matched = [];
    selectValues.filter(function (item) {
      let lower = item.value.toLowerCase();
      if (lower.includes(search.toLowerCase())) {
        matched.push(item);
      }
    });
    setFilteredData(matched);
  }, [search]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: rbSheetOpen ? 0.8 : 1,
          zIndex: -20,
        }}>
        <View
          onStartShouldSetResponder={() => {
            setRBsheetOpen(false);
          }}
          style={{
            ...(rbSheetOpen && {backgroundColor: '#ddd'}),
            flex: 1,
            zIndex: 3,
          }}>
          <View style={theme.mainView}>
            <MaterialIcons name="arrow-back-ios" color={'black'} size={22} />
            <Text style={{fontSize: 18, color: 'black'}}>Write a story</Text>
          </View>
          <TextInput
            onChange={text => {
              setTitle(text);
            }}
            value={title}
            style={theme.titlestyle}
            placeholder="Title"
            placeholderTextColor={'#86939e'}
            editable={rbSheetOpen ? false : true}
          />

          <TextInput
            onChange={text => {
              setSubTitle(text);
            }}
            value={subTitle}
            style={theme.subTitleStyle}
            placeholder="SubTitle"
            placeholderTextColor={'#808080'}
            editable={rbSheetOpen ? false : true}
          />
          <TextInput
            onChange={text => {
              setBody(text);
            }}
            value={body}
            style={theme.subTitleStyle}
            placeholder="Body"
            placeholderTextColor={'#808080'}
            editable={rbSheetOpen ? false : true}
          />
        </View>

        <View style={theme.iconview}>
          <TouchableOpacity>
            <Image
              source={require('../assets/keyboard.png')}
              style={theme.keyboardStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setRBsheetOpen(!rbSheetOpen);
              Keyboard.dismiss();
            }}>
            <Image
              source={require('../assets/staricon.png')}
              style={theme?.stariconStyle}
            />
          </TouchableOpacity>
        </View>
        {rbSheetOpen ? (
          <View style={{marginHorizontal: 15, zIndex: 30}}>
            {/* <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> */}
            <View style={theme?.innerView}>
              <Text style={theme.agastyaStle}>Ask Agastya AI</Text>
              <MaterialCommunityIcons
                name="arrow-right-thin"
                size={26}
                style={theme.forwardiconStyle}
                onPress={() => {
                  setChooseOption(!chooseOption);
                  setSearch('');
                }}
              />
            </View>

            <TextInput
              onChangeText={text => setSearch(text)}
              value={search}
              style={theme.searchStyle}
              placeholder="Ask me or choose an option"
              placeholderTextColor={'#86939e'}
            />

            {chooseOption ? (
              <View style={theme.searchedTextView}>
                <Text style={theme?.searchedFont}>
                  The child explores various textures by rolling the wheels on
                  different surfaces,such as smooth tiles,rough sandpaper and
                  blurry fabrics.This activity allowed her to observe how the
                  wheels left unique imprints and patterns behind.
                </Text>

                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={{backgroundColor: '#f2f2f2'}}>
                    <Text></Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <FlatList
                data={search ? filteredData : selectValues}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={theme.searchedTextView}
                    onPress={() => {
                      setSearch(item?.value);
                    }}>
                    <Text style={{fontSize: 14, color: '#505050'}}>
                      {item?.value}
                    </Text>
                  </TouchableOpacity>
                )}
                ListEmptyComponent={() => (
                  <View style={theme.noResult}>
                    <Text>No results found</Text>
                  </View>
                )}
              />
            )}
            {/* </KeyboardAvoidingView> */}
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Agastya;
