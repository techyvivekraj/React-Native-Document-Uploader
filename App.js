import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React, { useState } from 'react'
import DocumentPicker, { types } from 'react-native-document-picker';

const App = () => {
  const [fileData, setFileData] = useState([]);
  const handleFilePicker = async () => {
    try {
      const file = await DocumentPicker.pickMultiple({
        presentationStyle: 'fullScreen',
        allowMultiSelection: true,
        type: [types.images],
      });
      setFileData(file);
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <View style={style.container}>
      <Button title='Select' onPress={() => handleFilePicker()} />
      {fileData.length > 0
        ? fileData.map((ls, index) => {
          return (
            <View key={index}>
              <Image
                source={{ uri: ls.uri }}
                style={{ height: 300, width: 300 }}
              />
            </View>
          );
        })
        : null}
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20
  },
})
export default App