export interface PageControllerButtonInfo {
  name: string,
  urlname: string
}

export interface SectionButtonInfo {
  name: string,
  urlname: string,
  count?: number,
  [key: string]: any
}

export enum FriendButtonType {
  display,
  added,
  sent,
  pending
}