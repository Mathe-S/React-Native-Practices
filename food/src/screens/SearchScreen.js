import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchAPI, result, errorMessage] = useResults();

    const filteredResults = (price) => {
        return result.filter(item => {
            return item.price === price;
        });
    }

    return (
    <>
        <SearchBar 
        term={term} 
        onTermChange={setTerm} 
        onTermSubmit={() => searchAPI(term)}
        />
    { errorMessage ? <Text style={styles.warning}> {errorMessage} </Text> : null }
    <ScrollView>
    <ResultsList results={filteredResults('$')} title="Cost Effective" />
    <ResultsList results={filteredResults('$$')} title="Bit Pricier" />
    <ResultsList results={filteredResults(undefined)} title="Big Spender" />
    </ScrollView>
    </>
    )
};

const styles = StyleSheet.create({
    warning: {
        color: 'red'
    }
});

export default SearchScreen;