import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

// Define base dimensions for scaling
const BASE_WIDTH = 375; // Base width of the reference device
const BASE_HEIGHT = 667; // Base height of the reference device (adjusted for iPhone 8)

const scale = (size: number) => Math.round((width / BASE_WIDTH) * size);
const verticalScale = (size: number) =>
  Math.round((height / BASE_HEIGHT) * size);

// Font scaling that accounts for both the PixelRatio and the device's font scale
const fontScale = (size: number) => {
  const scaledSize = size * PixelRatio.getFontScale();
  return Math.round(Math.min(scaledSize, size * 1)); // Limits scaling to avoid too large fonts
};


// Export the scaling functions
export { scale, verticalScale, fontScale };
