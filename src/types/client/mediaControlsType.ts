export interface MediaControlsState {
  cameraEnabled: boolean
  microphoneEnabled: boolean
  screenshareEnabled: boolean

  cameraToggle: boolean
  microphoneToggle: boolean
  screenshareToggle: boolean
}

export type MediaControlsAction =
  | { type: 'SET_CAMERA_ENABLED'; payload: boolean }
  | { type: 'SET_MICROPHONE_ENABLED'; payload: boolean }
  | { type: 'SET_SCREENSHARE_ENABLED'; payload: boolean }
  | { type: 'SET_CAMERA_TOGGLE'; payload: boolean }
  | { type: 'SET_MICROPHONE_TOGGLE'; payload: boolean }
  | { type: 'SET_SCREENSHARE_TOGGLE'; payload: boolean }

// export type VideoGridTypes = 'default' | 'sidebar-left' | 'default-overlay' | 'sidebar-left-overlay'

export enum VideoGridTypeEnum {
  default = 'Default',
  defaultOverlay = 'Default Overlay',
  sidebarLeft = 'Sidebar Left',
  sidebarLeftOverlay = 'Sidebar Left Overlay',
  bottomLeftOverlay = 'Bottom Left Overlay'
}

// Map the enum values to switch label and value
export const videoGridTypes = Object.entries(VideoGridTypeEnum).map(([key, value]) => ({
  label: value, // Use the key as the label
  value: value // Use the value as the value
}))
