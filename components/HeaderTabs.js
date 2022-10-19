import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function HeaderTabs() {
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
      <HeaderButton />
    </View>
  );
}

const HeaderButton = () => (
  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
    <TouchableOpacity>
      <View
        style={{
          paddingVertical: 2,
          paddingHorizontal: 4,
          flex: 0,
          flexDirection: 'row',
        }}
      >
        <Text style={styles.justLend}>JustLend</Text>
        <Text style={styles.period}>.</Text>
      </View>
    </TouchableOpacity>
    <View>
      <TouchableOpacity>
        <Text style={{ fontWeight: '500', fontSize: 15 }}>
          Ben Keogh <Ionicons name="caret-down-sharp" size={15} color="#6DE1A7" />
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  justLend: {
    fontSize: 20,
    fontWeight: '900',
  },
  period: {
    fontSize: 20,
    fontWeight: '900',
    color: '#6DE1A7',
  },
});
