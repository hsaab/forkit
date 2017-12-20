import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import SelectMultiple from 'react-native-select-multiple'

const fruits = ['American', 'Italian', 'Mexican', 'Japanese', 'Lebanese']

class SelectorCuisine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFruits: []
    };
  }

  onChange(selectedFruits){
    if(selectedFruits.length > 4){
      return
    } else {
      let selected = selectedFruits.map((each) => {
        return each.label;
      })
      this.setState({ selectedFruits: selected })
    }
  }

  render() {
    this.props.setCuisine(this.state.selectedFruits);
    return (
      <View>
       <View style={styles.sectionContainer}>
         <Text style={styles.sectionText}>Pick 4</Text>
       </View>
       <SelectMultiple
         items={fruits}
         selectedItems={this.state.selectedFruits}
         onSelectionsChange={(selected) => this.onChange(selected)}
         labelStyle={styles.labelText}
         rowStyle={styles.rowContainer}
         selectedLabelStyle={styles.selLabelText}
         />
      </View>
    );
  }
}

SelectorCuisine.propTypes = {
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      setCuisine: (cuisine) => dispatch({type: 'SET_CUISINE', cuisine: cuisine})
    };
};

var styles = StyleSheet.create({
    labelText: {
      fontSize: moderateScale(16),
      fontFamily: 'Futura',
      fontWeight: '200',
      color: '#646464'
    },
    rowContainer: {
      backgroundColor: 'transparent'
    },
    selLabelText: {
      fontSize: moderateScale(16),
      fontFamily: 'Futura',
      fontWeight: '200',
      color: '#FF7F00'
    },
    sectionContainer: {
      width: scale(310),
      marginTop: verticalScale(15),
      marginBottom: verticalScale(10),
      justifyContent: 'center',
      left: scale(13),
    },
    sectionText: {
      fontFamily: 'Futura',
      color: '#8D8D8D',
      fontSize: moderateScale(20),
      textDecorationLine: 'underline'
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectorCuisine);
