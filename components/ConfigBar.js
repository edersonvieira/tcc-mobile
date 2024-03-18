import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ConfigBar({ theme }) {
    const [modalVisible, setModalVisible] = useState(false);

    const handleClearCommunications = async () => {
        try {
            await AsyncStorage.removeItem('formData');
            setModalVisible(false);
            Alert.alert("Comunicações MQTT Limpas", "Todas as suas comunicações MQTT foram deletadas permanentemente.");
        } catch (error) {
            console.error('Erro ao limpar as comunicações:', error);
        }
    };

    return (
        <>
            <View style={theme.containerConfigBar}>
                <Text style={theme.configBarTitle}>Configurações</Text>
                <TouchableOpacity style={theme.configBarButton}>
                    <Text style={theme.configBarButtonText}>Modo Escuro</Text>
                    <Image
                        style={theme.configBarImage}
                        source={require('../assets/moon.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={theme.configBarButton} onPress={() => setModalVisible(true)}>
                    <Text style={theme.configBarButtonText}>Limpar Comunicações MQTT</Text>
                    <Image
                        style={theme.configBarImage}
                        source={require('../assets/clean.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={theme.configBarButton}>
                    <Text style={theme.configBarButtonText}>Documentação</Text>
                    <Image
                        style={theme.configBarImage}
                        source={require('../assets/doc.png')}
                    />
                </TouchableOpacity>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={theme.modalContainer}>
                    <View style={theme.modalContent}>
                        <Text style={theme.modalAviso}>
                            ⚠ ALERTA ⚠
                        </Text>
                        <Text style={theme.modalText}>
                            Isso fará com que todas as suas comunicações MQTT sejam deletadas permanentemente. Você tem certeza?
                        </Text>
                        <TouchableOpacity style={theme.modalButton} onPress={handleClearCommunications}>
                            <Text style={theme.modalButtonText}>Confirmar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={theme.modalButtonCancelar} onPress={() => setModalVisible(false)}>
                            <Text style={theme.modalButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
}
