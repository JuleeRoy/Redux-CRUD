import { configureStore } from '@reduxjs/toolkit'
import createData from '../features/createData'
import readData from '../features/readData'
import updateData from '../features/updateData'
import deleteData from '../features/deleteData'

export default configureStore({
  reducer: {
    createData: createData,
    readData: readData,
    updateData:updateData,
    deleteData:deleteData
  }
})
