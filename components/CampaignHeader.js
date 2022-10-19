import { View, Text } from 'react-native';
import React from 'react';

export default function CampaignHeader() {
  return (
    <View style={{ padding: 10, backgroundColor: 'black', marginBottom: 6 }}>
      <Text style={{ fontSize: 20, fontWeight: '700', color: '#6DE1A7' }}>Campaigns</Text>
      <Text style={{ fontSize: 13, color: 'white' }}>
        Subtitle about this section and maybe some help about this page
      </Text>
    </View>
  );
}
