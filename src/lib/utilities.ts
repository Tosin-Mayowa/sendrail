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