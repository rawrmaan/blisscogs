export const PENDING_SUFFIX = '_PENDING'
export const FULFILLED_SUFFIX = '_FULFILLED'
export const REJECTED_SUFFIX = '_REJECTED'

/*
@param {String} actionType  root action type
@return {Object} a literal with properties:
                 {String} type  the root action type
                 {String} pending  the pending action type
                 {String} fulfilled  the fulfilled action type
                 {String} rejected  the rejected action type
*/

interface PromiseActionType {
    type: string,
    pending: string,
    fulfilled: string,
    rejected: string
}

export default function createPromiseActionType(actionType: string): PromiseActionType {
  return {
    type: actionType,
    pending: actionType + PENDING_SUFFIX,
    fulfilled: actionType + FULFILLED_SUFFIX,
    rejected: actionType + REJECTED_SUFFIX
  }
}
