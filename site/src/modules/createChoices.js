import Choices from 'choices.js';

export default function createChoices(id, extra = { sort: false }) {
  return new Choices(`#${id}`, {
    searchEnabled: false,
    maxItemCount: 1,
    maxItemText: 'Счёт выбран',
    noResultsText: 'Предложения отсутствуют',
    shouldSort: extra.sort,
    itemSelectText: '',
    noChoicesText: 'Предложения отсутствуют',
  });
}
