MiniApp — Feature-Based React Native Application

========================================================
Overview
========================================================
MiniApp is a modular, scalable, and high-performance mobile application built with React Native CLI and TypeScript. 
The app demonstrates a feature-based architecture pattern that promotes clean code separation, modularity, and maintainability.

Each feature (such as Addresses, Categories, and Image Search) is self-contained, consisting of its own components, 
Redux slices, validations, and screens. This structure enables effortless scalability and testing, ensuring a clear 
separation of concerns across the entire codebase.

The app has been fully tested on Windows and Android platforms. It also includes responsive font scaling, a unified 
theming system, and reusable components to ensure consistent design and optimal user experience across all screen sizes.

========================================================
Core Features
========================================================
1. **Address Management**
   - Add, update, and remove addresses.
   - Select a preferred delivery address using radio buttons.
   - Persist address data in the Redux store to maintain state across sessions.
   - Validation ensures correct input before submission.

2. **Category Browser**
   - Explore and interact with categorized product listings.
   - Expandable containers for better navigation.
   - Clean, minimalist design consistent with the global theme.

3. **Image Search**
   - Search for products using images.
   - Filter options for refined search results.
   - Integrated components for product preview and display.

4. **Reusable Components**
   - Theme-aware primitives (NativeText, NativeView, NativeButton, etc.).
   - Built-in support for dynamic scaling using utility functions.
   - Consistent use of spacing, colors, and typography defined in the global theme.

========================================================
Design System
========================================================
The app uses a centralized theme configuration to ensure visual consistency across screens.  
All components consume theme values using the `useAppTheme` hook.

**Fonts:**
- Rubik-Regular
- Rubik-Medium
- Rubik-Bold

**Color Palette:**
- Background: #FFFFFF (White)
- Primary Text: #000000 (Black)
- Accent: #1AAF31 (Green)
- Subtext: #909090 (Gray)
- Divider Lines: #E5E5E5 (Light Gray)
- Shadow: #00000029
- Off-White: #F5F5F5

**Typography:**
- XS: 12
- SM: 14
- MD: 16
- LG: 20
- XL: 24

**Spacing:**
- XS: 4
- SM: 8
- MD: 16
- LG: 24
- XL: 32

**Shadows:**
- Subtle elevation effect with `shadowColor: '#00000029'`.

========================================================
Technology Stack
========================================================
- React Native (CLI)
- TypeScript
- Redux Toolkit (with Redux Persist)
- React Navigation
- Custom Theme Context
- Responsive Scaling Utilities

========================================================
App Architecture
========================================================
MiniApp follows a **feature-based folder structure**, ensuring each feature is isolated and easy to maintain:

src/
 ┣ app/
 ┃ ┣ theme/
 ┃ ┣ types/
 ┃ ┗ utils/
 ┣ common/
 ┃ ┣ components/
 ┃ ┣ contexts/
 ┃ ┗ hooks/
 ┣ features/
 ┃ ┣ addresses/
 ┃ ┣ categories/
 ┃ ┣ home/
 ┃ ┗ imagesearch/
 ┣ navigation/
 ┗ store/

This modular setup enables:
- Better scalability.
- Reduced merge conflicts.
- Improved code readability and testing.

========================================================
Font Scaling and Responsiveness
========================================================
All fonts and spacing are dynamically scaled based on screen dimensions using utility functions defined in:
`src/app/utils/responsive.ts`.

This ensures that the app’s typography, layout, and components look consistent across various devices and resolutions.

========================================================
Platform Compatibility
========================================================
- Tested on **Windows** and **Android**.
- iOS support is available but requires **macOS** for build and deployment.
- Custom fonts are linked using `npx react-native-asset`.
- Fully responsive and supports adaptive screen layouts.

========================================================
Installation Guide
========================================================
1. Clone the repository:
   git clone <repository-url>

2. Install dependencies:
   npm install

3. Link fonts and assets:
   npx react-native-asset

4. Run on Android:
   npx react-native run-android

5. (Optional) Generate Debug APK:
   cd android
   ./gradlew assembleDebug

6. For iOS setup (requires macOS):
   - Install CocoaPods:
     cd ios && pod install
   - Run:
     npx react-native run-ios

========================================================
Development Highlights
========================================================
- Clean, feature-driven architecture.
- Consistent design system with centralized theming.
- Scalable and maintainable Redux state management.
- Responsive and performant components.
- Zero font scaling issues — all text sizes scale dynamically.
- Ready for cross-platform extension (iOS / Android).

========================================================
Author
========================================================
Developed by **Diyaa**, a Survey Engineer and Software Developer with expertise in React Native.

========================================================
Project Goal
========================================================
MiniApp serves as a professional reference for developers building production-ready React Native applications using 
modern patterns, TypeScript, and Redux Toolkit — designed for performance, readability, and clean structure.

