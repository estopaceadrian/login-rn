import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function CampaignsTabs() {
  const [activeTab, setActiveTab] = useState('Live Unfunded');
  return (
    <View
      style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly', padding: 5, marginBottom: 4 }}
    >
      <ListButton
        text="Live Unfunded"
        btnColor="black"
        textColor="#6DE1A7"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ListButton text="Pledged" btnColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab} />
      <ListButton text="Funded" btnColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab} />
      <ListButton
        text="Withdrawn"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ListButton text="Repaid" btnColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab} />
      <ListButton text="Closed" btnColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}

const ListButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab == props.text ? 'black' : 'white',
      paddingVertical: 6,
      paddingHorizontal: 5,
      borderRadius: 10,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text style={{ color: props.activeTab == props.text ? '#6DE1A7' : 'black', fontSize: 13, fontWeight: '900' }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);
