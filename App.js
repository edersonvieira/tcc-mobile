import { SafeAreaView, Modal, TouchableWithoutFeedback, View } from "react-native";
import HeadBar from "./components/HeadBar.js";
import SwipeList from "./components/SwipeList.js";
import ConfigBar from "./components/ConfigBar.js";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import AddBar from "./components/AddBar.js";
import {lightTheme} from "./themes.js";
import DetalhesPage from "./components/DetalhesPage.js";

export function App() {
  const [configBarOpen, setConfigBarOpen] = useState(false);
  const [addBarOpen, setAddBarOpen] = useState(false);
  const [isModalVisibleAdd, setIsModalVisibleAdd] = useState(false);
  const [isModalVisibleConfig, setIsModalVisibleConfig] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDetalhesVisible, setIsDetalhesVisible] = useState(false);

  const toggleConfigBar = () => {
    setConfigBarOpen((prevState) => !prevState);
    setIsModalVisibleConfig(!isModalVisibleConfig);
  };
  
  const toggleAddBar = () => {
    setAddBarOpen((prevState) => !prevState);
    setIsModalVisibleAdd(!isModalVisibleAdd);
  };

  const handleCloseModalConfig = () => {
    setIsModalVisibleConfig(false);
    setConfigBarOpen(false);
  };
  
  const handleCloseModalAdd = () => {
    setIsModalVisibleAdd(false);
    setAddBarOpen(false);
  }

  const handleOpenDetalhes = (item) => {
    setSelectedItem(item);
    setIsDetalhesVisible(true);
  }

  const handleCloseDetalhes = () => {
    setSelectedItem(null);
    setIsDetalhesVisible(false);
  }

  const data = [
    { id: 1890, equipamento: 'ELETRO Farb', x: 21, y: 22, z: 23, status: true },
    { id: 2, equipamento: 'Motor 2', x: 24, y: 25, z: 26, status: false },
    { id: 3, equipamento: 'Motor 3', x: 27, y: 28, z: 29, status: true },
    { id: 4, equipamento: 'Motor 4', x: 30, y: 31, z: 32, status: true },
    { id: 5, equipamento: 'Motor 5', x: 33, y: 34, z: 35, status: false },
    { id: 6, equipamento: 'Motor 6', x: 36, y: 37, z: 38, status: true },
    { id: 7, equipamento: 'Motor 7', x: 39, y: 40, z: 41, status: true },
    { id: 8, equipamento: 'Motor 8', x: 42, y: 43, z: 44, status: true },
    { id: 9, equipamento: 'Motor 9', x: 45, y: 46, z: 47, status: false },
    { id: 10, equipamento: 'Motor 10', x: 48, y: 49, z: 50, status: true },
    { id: 11, equipamento: 'Motor 11', x: 51, y: 52, z: 53, status: true },
    { id: 12, equipamento: 'Motor 12', x: 54, y: 55, z: 56, status: true },
    { id: 13, equipamento: 'Motor 13', x: 57, y: 58, z: 59, status: false },
    { id: 14, equipamento: 'Motor 14', x: 60, y: 61, z: 62, status: true },
    { id: 15, equipamento: 'Motor 15', x: 63, y: 64, z: 65, status: false },
  ];

  let theme = lightTheme;

  return (
    <>
      <SafeAreaView style={{ marginBottom: 55 }}>
        <StatusBar />
        <HeadBar theme={theme} toggleConfigBar={toggleConfigBar} toggleAddBar={toggleAddBar} />
        <SwipeList theme={theme} data={data} onOpenDetalhes={handleOpenDetalhes} />
        <Modal animationType="fade" transparent={true} visible={isModalVisibleConfig} onRequestClose={handleCloseModalConfig}>
          <TouchableWithoutFeedback onPress={handleCloseModalConfig}>
            <View style={theme.modalBackground}>
              <View style={theme.modalContainer}>
                {configBarOpen && <ConfigBar theme={theme} />}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <Modal animationType="fade" transparent={true} visible={isModalVisibleAdd} onRequestClose={handleCloseModalAdd}>
          <TouchableWithoutFeedback onPress={handleCloseModalAdd}>
            <View style={theme.modalBackground}>
              <View style={theme.modalContainer}>
                {addBarOpen && <AddBar theme={theme} toggleAddBar={toggleAddBar} />}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <Modal animationType="fade" visible={isDetalhesVisible} onRequestClose={handleCloseDetalhes}>
          <TouchableWithoutFeedback onPress={handleCloseDetalhes}>
            <View>
              <View>
                {selectedItem && <DetalhesPage item={selectedItem} onClose={handleCloseDetalhes} theme={theme} />}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </SafeAreaView>
    </>
  );
}

export default App;