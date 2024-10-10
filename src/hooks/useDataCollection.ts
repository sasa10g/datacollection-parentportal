import { useReducer } from 'react'
import { DataCollectionAction, DataCollectionState } from '../types/data-collection/dataCollectionType'

const initialState: DataCollectionState = {
  acquisitions: [],
  targetBehaviors: [],
  parentGoals: []
}

const dataCollectionReducer = (state: DataCollectionState, action: DataCollectionAction) => {
  switch (action.type) {
    case 'SET_ACQUISITIONS':
      return { ...state, acquisitions: action.payload }
    case 'SET_TARGET_BEHAVIORS':
      return { ...state, targetBehaviors: action.payload }
    case 'SET_PARENT_GOALS':
      return { ...state, parentGoals: action.payload }
    default:
      return state
  }
}

const useDataCollection = () => {
  const [dataCollection, dataCollectionDispatch] = useReducer(dataCollectionReducer, initialState)
  return { dataCollection, dataCollectionDispatch }
}

export default useDataCollection
