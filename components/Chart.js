import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Chart = ({currentPrice, logoUrl, name, symbol, priceChangePercentage7d, sparkline }) => {

    const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';
    
  return (
    <View style={styles.chartWrapper}>

{/* Titles */}
<View style={styles.titlesWrapper}>
  <View style={styles.upperTitles}>
    <View style={styles.upperLeftTitle}>
      <Image source={{ uri: logoUrl }} style={styles.image} />
      <Text style={styles.subtitle}>{name} ({symbol.toUpperCase()})</Text>
    </View>
    <Text style={styles.subtitle}>7d</Text>
  </View>

  <View style={styles.lowerTitles}>
    <Text style={styles.boldTitle}>${currentPrice.toLocaleString('en-US', { currency: 'USD' })}</Text>
    <Text style={[styles.title, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
  </View>

</View>

</View>

  )
}

const styles = StyleSheet.create({
    chartWrapper: {
        marginVertical: 16
      },
      titlesWrapper: {
        marginHorizontal: 16
      },
      upperTitles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      upperLeftTitle: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      image: {
        width: 24,
        height: 24,
        marginRight: 4,
      },
      subtitle: {
        fontSize: 14,
        color: '#A9ABB1',
      },
      lowerTitles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      boldTitle: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      title: {
        fontSize: 18,
      },
      chartLineWrapper: {
        marginTop: 40,
      },
});

export default Chart