export default function sortList(list, sort) {
  list.sort((a, b) => {
    switch (sort) {
      case 'byNumber':
        return a.account - b.account;
      case 'byBalance':
        return a.balance - b.balance;
      case 'byLastTransaction':
        return (
          (a.transactions[0] ? new Date(a.transactions[0].date) : Date.now()) -
          (b.transactions[0] ? new Date(b.transactions[0].date) : Date.now())
        );
    }
  });
}
