export const copyTextToClipboard = async (text:string) => {
  if ('clipboard' in navigator) {
    return navigator.clipboard.writeText(text);
  }
  return document.execCommand('copy', true, text);
};



export const handleError = (error) => {
  const message = error?.message ?? ''

  if (error?.response) {
    if (error.response?.data) {
      return error.response.data
    }
  }

  return message
}

export const enum MoneyReceived {
  STATUS = 'Status',
  SENDER = 'Name',
  BANKNAME = 'Bank',
  ACCOUNTNUM = 'Account number',
  MESSAGETYPE = 'Message Type',
  AMOUNT = 'Amount',
  TRANSACTIONID = 'Transaction ID'
}

export const enum MoneySent {
  STATUS = 'Status',
  SENDER = 'recipient Name',
  BANKNAME = 'Bank',
  ACCOUNTNUM = 'Account number',
  MESSAGETYPE = 'Message Type',
  AMOUNT = 'Amount',
  TRANSACTIONID = 'Transaction ID',
  CHARGES = 'Charges'
}


  export const currencyFormatter = (val: string) => {
    const number = Number(val)
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(number)
  }