import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, TouchableHighlight, StatusBar } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Ionicons } from '@expo/vector-icons';
export const dataDetails = [
  {
    id: '001',
    borrower: 'Alice Anderson',
    campaignName: 'Campaign Name #1',
    campaignType: 'Home Deposit',
  },
  {
    id: '002',
    borrower: 'Becky Bradshaw',
    campaignName: 'Campaign Name #2',
    campaignType: 'Home Deposit',
  },
  {
    id: '003',
    borrower: 'Charlie Cuckworth',
    campaignName: 'Campaign Name #3',
    campaignType: 'Other',
  },
];

export default function LiveUnfunded() {
  const [listData, setListData] = useState(
    dataDetails.map((dataItem, index) => ({
      key: `${index}`,
      id: dataItem.id,
      borrower: dataItem.borrower,
      campaignName: dataItem.campaignName,
      campaignType: dataItem.campaignType,
    })),
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex.index, 1);
    setListData(newData);
  };

  const VisibleItem = (props) => {
    const { data } = props;
    return (
      <View style={styles.list}>
        <TouchableHighlight activeOpacity={0.5}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '90%',
              marginTop: 15,
            }}
          >
            <View style={{ height: 30 }}>
              <Text style={{ fontSize: 13, color: 'gray' }}>{data.item.id}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{data.item.borrower}</Text>
              <Text style={{ fontSize: 13, color: 'gray' }}>{data.item.campaignName}</Text>
            </View>
            <View style={{ height: 30, width: 100 }}>
              <Text>{data.item.campaignType}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  };
  const renderItem = (data, rowMap) => {
    return <VisibleItem data={data} />;
  };

  const HiddenItemWithActions = (props) => {
    const { onClose, onDelete } = props;
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          onPress={onClose}
          style={{
            backgroundColor: '#6DE1A7',
            alignItems: 'flex-start',
            bottom: 0,
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            width: 60,
            paddingLeft: 17,
          }}
        >
          <Ionicons name="pencil-sharp" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]} onPress={onClose}>
          <Ionicons name="close-circle-sharp" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={onDelete}>
          <Ionicons name="ios-trash-sharp" size={24} color="red" />
        </TouchableOpacity>
      </View>
    );
  };
  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  return (
    <>
      <TouchableOpacity style={{ alignItems: 'flex-end', marginRight: 25 }}>
        <Text>
          <Ionicons name="cloud-download-sharp" size={24} color="black" /> Export XLS
        </Text>
      </TouchableOpacity>
      <View style={{ width: '100%', alignItems: 'center', marginBottom: 280 }}>
        <SwipeListView
          data={listData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={55}
          rightOpenValue={-120}
        ></SwipeListView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  list: {
    marginBottom: 10,
    alignItems: 'center',
    padding: 10,
    margin: 20,
    width: '90%',
    height: 70,
    marginVertical: 10,
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    elevation: 5,
  },

  rowFront: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    margin: 5,
    marginBottom: 15,
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    width: '90%',
    padding: 10,
    marginBottom: 15,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 20,
    marginBottom: 15,
    borderRadius: 5,
    width: '90%',
    height: 80,
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 60,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: 'gray',
    right: 60,
  },
  backRightBtnRight: {
    backgroundColor: 'black',
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
