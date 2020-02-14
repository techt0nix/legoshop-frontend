import axios from 'axios'
import {ADDRESS} from './backend-address'

export const AXIOS = axios.create({ 
     baseURL: ADDRESS + `/api`
})