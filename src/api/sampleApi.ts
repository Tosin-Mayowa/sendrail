import { handleError } from '../lib/utilities'
import { useAxiosPrivate } from '../lib/hooks/useAxiosPrivate';

const privateRequest=useAxiosPrivate();
export const createOrder=async ({name,title,num})=>{
return await privateRequest.post('<end point>', { name, title, num }).catch((err) => {
  return handleError(err)
})
}
// you will import createOrder and follow like what I did for signin etc
