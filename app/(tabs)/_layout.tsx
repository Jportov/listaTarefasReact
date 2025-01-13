import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Cor do texto da aba ativa e inativa
        tabBarActiveTintColor: '#FFFFFF', // Aba ativa (branca)
        tabBarInactiveTintColor: '#CCCCCC', // Aba inativa (cinza claro)

        // Estilo geral da barra de abas
        tabBarStyle: {
          display: 'none',
          backgroundColor: '#007BFF', // Cor de fundo azul
          height: 30, // Altura aumentada para destacar a barra
          borderTopWidth: 2, // Borda superior
          borderTopColor: '#0056b3', // Cor da borda
          
        },

        // Estilo do texto nas abas
        tabBarLabelStyle: {
          display: 'none',
          fontSize: 14, // Tamanho do texto
          fontWeight: '600', // Espessura do texto
          marginBottom: 5, // Espaçamento inferior
          
        },

        // Configuração dos ícones
        tabBarIconStyle: {
          marginTop: 5, // Margem superior para centralizar
        },

        // Esconder cabeçalho das telas
        headerShown: false,
      }}
    >
      {/* Tela Principal: Lista de Tarefas */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Lista de Tarefas',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="list" size={30} color={color} /> // Ícone maior
          ),
        }}
      />
      {/* Tela de Formulário: Nova Tarefa */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Nova Tarefa',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add" size={30} color={color} /> // Ícone maior
          ),
        }}
      />
    </Tabs>
  );
}
