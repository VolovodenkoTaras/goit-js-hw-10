import './css/styles.css';
import debounce from 'lodash.debounce';
import { onSearch } from './search';

export const refs = {
    searchForm: document.querySelector('#search-box'),
    countriesList: document.querySelector('.country-list'),
    countryCard: document.querySelector('.country-info'),
};


const DEBOUNCE_DELAY = 300;

refs.searchForm.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
