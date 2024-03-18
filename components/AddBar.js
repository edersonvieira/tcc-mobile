import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddBar ({ theme, toggleAddBar }) {
    const [lastId, setLastId] = useState(0);
    const [formData, setFormData] = useState({
        id: 0,
        publicar: "",
        receber: "",
        usuario: "",
        senha: ""
    });

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAddData = async () => {
        try {
            const storedData = JSON.parse(await AsyncStorage.getItem('formData')) || [];
            const newId = lastId + 1;
            storedData.push({ ...formData, id: newId });
            await AsyncStorage.setItem('formData', JSON.stringify(storedData));

            setLastId(newId);
            setFormData({
                id: newId,
                publicar: "",
                receber: "",
                usuario: "",
                senha: ""
            });

            toggleAddBar();
            console.log('Dados salvos com sucesso:', storedData)
        } catch (error) {
            console.error('Erro ao salvar os dados:', error);
        }
    };

    return (
        <View style={theme.containerAddBar}>
            <Text style={theme.addBarTitle}>Adicionar Comunicação com MQTT</Text>
            <Text>Publicar</Text>
            <TextInput
                style={theme.addBarInput}
                placeholder="Digite aqui..."
                value={formData.publicar}
                onChangeText={(text) => handleInputChange("publicar", text)}
            />
            <Text>Receber</Text>
            <TextInput
                style={theme.addBarInput}
                placeholder="Digite aqui..."
                value={formData.receber}
                onChangeText={(text) => handleInputChange("receber", text)}
            />
            <Text>Usuario</Text>
            <TextInput
                style={theme.addBarInput}
                placeholder="Digite aqui..."
                value={formData.usuario}
                onChangeText={(text) => handleInputChange("usuario", text)}
            />
            <Text>Senha</Text>
            <TextInput
                style={theme.addBarInput}
                placeholder="Digite aqui..."
                value={formData.senha}
                onChangeText={(text) => handleInputChange("senha", text)}
            />
            <TouchableOpacity style={theme.addBarButton} onPress={handleAddData}>
                <Text style={theme.addBarButtonText}>Adicionar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={theme.addBarButtonCancelar} onPress={toggleAddBar}>
                <Text style={theme.addBarButtonTextCancelar}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    )
}
