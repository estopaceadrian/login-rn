import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
export default function Categories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ flexDirection: 'column-reverse', padding: 2, backgroundColor: 'white', marginTop: 4 }}
    >
      <Icon icon="grid-sharp" text="Dashboard" color="gray" />
      <Icon icon="ios-layers-sharp" text="Campaigns" color="#6DE1A7" />
      <Icon icon="people" text="Users" color="gray" />
      <Icon icon="document-text-sharp" text="Reports" color="gray" />
      <Icon icon="ios-chatbubbles-sharp" text="Complaints" color="gray" />
      <Icon icon="settings-sharp" text="Settings" color="gray" />
    </ScrollView>
  );
}

const Icon = (props) => (
  <View style={{ alignItems: 'center', marginRight: 12 }}>
    <Ionicons name={props.icon} size={24} color={props.color} />
    <Text style={{ fontSize: 13, fontWeight: '700' }}>{props.text}</Text>
  </View>
);
