import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs';
import Categories from '../components/Categories';
import { Divider } from '@rneui/base';
import CampaignsTabs from '../components/CampaignsTabs';
import LiveUnfunded from '../components/LiveUnfunded';
import CampaignHeader from '../components/CampaignHeader';

const Welcome = () => {
  return (
    <SafeAreaView style={{ marginTop: 25, flex: 1 }}>
      <View style={{ padding: 15, backgroundColor: 'white' }}>
        <HeaderTabs />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CampaignHeader />
        <CampaignsTabs />
        <LiveUnfunded />
      </ScrollView>
      <Divider width={1} />
      <Categories />
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
