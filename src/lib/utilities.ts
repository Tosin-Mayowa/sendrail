export const copyTextToClipboard = async (text:string) => {
  if ('clipboard' in navigator) {
    return navigator.clipboard.writeText(text);
  }
  return document.execCommand('copy', true, text);
};



export const handleError = (error) => {
  const message = error?.message ?? ''

  if (error.response) {
    if (error.response.data) {
      return error.response.data
    }
  }

  return message
}

export const enum MoneyReceived {
  STATUS = 'Status',
  SENDER = 'Sender',
  BANKName = 'Bank Name',
  BANKACCOUNT = 'Bank Account',
  MESSAGETYPE = 'Message Type',
  SESSIONID = 'Session ID',
  TRANSACTIONID = 'Transaction number'
}

export const enum MoneySent {
  STATUS = 'Status',
  SENDER = 'Sender',
  SENDERACCOUNT = 'Sender Account',
  RECIPIENTBANK = 'Recipient Bank',
  RECIPIENTACCOUNT='Recipient Account',
  MESSAGETYPE = 'Message Type',
  SESSIONID = 'Session ID',
  TRANSACTIONID = 'Transaction number'
}