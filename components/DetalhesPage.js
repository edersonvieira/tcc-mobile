import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Image } from "react-native";

export default function DetalhesPage({ item, onClose, theme }) {
  return (
    <>
    <TouchableOpacity onPress={onClose} style={theme.detalhesVoltarCotainer}>
            <Image
                style={theme.detalhesVoltar}
                source={require('../assets/goBack.png')}
            />
    </TouchableOpacity>
    <SafeAreaView style={theme.detalhesContainer}>
        <View style={theme.detalhesContent}>
            <View style={theme.detalhesTitleContainer}>
                <Text style={theme.detalhesTitle}>ID: </Text>
                <Text style={theme.detalhesText}>{item.id}</Text>
                <Text style={theme.detalhesTitle}>Nome: </Text>
                <Text style={theme.detalhesText}>{item.equipamento}</Text>
            </View>
            <View style={theme.detalhesDataContainer}>
                <View style={theme.detalhesData}>
                    <Text style={theme.detalhesDataTitle}>X</Text>
                    <Text style={theme.detalhesDataText}>{item.x}</Text>
                </View>
                <View style={theme.detalhesData}>
                    <Text style={theme.detalhesDataTitle}>Y</Text>
                    <Text style={theme.detalhesDataText}>{item.y}</Text>
                </View>
                <View style={theme.detalhesData}>
                    <Text style={theme.detalhesDataTitle}>Z</Text>
                    <Text style={theme.detalhesDataText}>{item.z}</Text>
                </View>
            </View>
            <View style={theme.detalhesStatusContainer}>
                <Text style={{ ...theme.detalhesStatus, color: item.status ? 'green' : 'red' }}>
                    {item.status ? 'BOM' : 'RUIM'}
                </Text>
            </View>
            <View style={theme.detalhesButtomExportar}>
                <TouchableOpacity style={theme.detalhesButtomExportarCSV}>
                    <Text style={theme.detalhesButtomExportarCSVText}>Exportar CSV</Text>
                </TouchableOpacity>
                <TouchableOpacity style={theme.detalhesButtomExportarPDF}>
                    <Text style={theme.detalhesButtomExportarPDFText}>Exportar PDF</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
    </>
    );
}
