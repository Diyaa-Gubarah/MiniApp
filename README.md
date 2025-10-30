# 🧭 MiniApp — Feature-Based React Native Application

A modular React Native project built with **TypeScript**, **Redux Toolkit**, and a **feature-based architecture**.  
This app demonstrates clean state management, reusable components, and scalable theming using React Native CLI.


## 📱 Overview

MiniApp is a small-scale React Native application that showcases navigation, Redux-based state management, and consistent UI styling using a centralized design system.

It includes:
- **Saved Address Management**
- **Category Listing**
- **Image Search**
- **Reusable Components**
- **Theme Context with Scalable Fonts**

> 🧪 Tested on **Windows and Android** environments only.  
> iOS support is possible, but additional configuration is required (see notes below).

---

## 🧩 Folder Structure

```
src
 ┣ app/
 ┃ ┣ theme/           → Centralized colors, fonts, spacing, shadows
 ┃ ┣ types/           → Shared TypeScript types
 ┃ ┗ utils/           → Scaling and helper functions
 ┣ common/
 ┃ ┣ components/      → Reusable UI primitives (Text, View, Button, Input, etc.)
 ┃ ┣ contexts/        → Theme context provider
 ┃ ┗ hooks/           → Typed hooks for Redux and theme usage
 ┣ features/
 ┃ ┣ addresses/       → Saved addresses feature (screens, redux, validation)
 ┃ ┣ categories/      → Categories UI and components
 ┃ ┣ imagesearch/     → Image search functionality
 ┃ ┗ home/            → Main navigation screen
 ┣ navigation/        → AppNavigation (React Navigation setup)
 ┗ store/             → Redux Toolkit store configuration
```

---

## 🎨 Design System

All UI components consume the centralized **theme** from `src/app/theme/theme.ts`.

### Color Palette
| Name | Hex |
|------|------|
| White | `#FFFFFF` |
| Black | `#000000` |
| Green | `#1AAF31` |
| Cyan | `#00CEFF` |
| Light Gray | `#E5E5E5` |
| Off White | `#F5F5F5` |
| Shadow Gray | `#00000029` |
| Subtext Gray | `#909090` |
| Transparent Black | `#00000080` |

### Fonts
- **Rubik-Regular**
- **Rubik-Medium**
- **Rubik-Bold**

### Responsive Sizing
Font and layout scaling is handled by utilities in:
```
src/app/utils/responsive.ts
```

---

## 🧠 Core Features

### 🏠 Saved Address
- View, select, and add delivery addresses.
- Data persisted in Redux store.
- Clean typography and spacing using the Rubik font.

### 📂 Categories
- Display product or content categories.
- Minimal interface and consistent theme usage.

### 🖼️ Image Search
- Search and view images with interactive heart (favorite) button.
- Favorite state indicated by a green heart (`#1AAF31`).

---

## ⚙️ Tech Stack

| Layer | Library |
|-------|----------|
| Core | React Native CLI (latest) |
| Language | TypeScript |
| State Management | Redux Toolkit + redux-persist |
| Navigation | React Navigation v6 |
| Styling | React Native `StyleSheet.create()` |
| Theme | Custom Theme Context |
| Fonts | Rubik (linked manually) |

---

## 🧩 Setup Instructions

### 1️⃣ Install Dependencies
```bash
yarn install
```

### 2️⃣ Link Fonts
Make sure custom Rubik fonts are properly linked:
```bash
npx react-native-asset
```

### 3️⃣ Run Android App
```bash
npx react-native run-android
```

### 4️⃣ Generate Debug APK
```bash
cd android
gradlew assembleDebug
```
The output APK will be in:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 🍏 iOS Notes

If you wish to run the app on **iOS**, ensure you:
1. Use **macOS** with Xcode installed.
2. Run:
   ```bash
   cd ios && pod install
   ```
3. Then launch:
   ```bash
   npx react-native run-ios
   ```

> ⚠️ Fonts must be added to `Info.plist` and linked in the iOS build for proper rendering.

---

## 🚀 Highlights

- **Feature-based structure** for maintainability.
- **Typed Redux store** for reliability.
- **Scalable typography** (font scaling via responsive utils).
- **Cross-platform design** (Android verified, iOS compatible).
- **Clean theme-driven UI** ensuring consistency.

---


### 💡 Summary

MiniApp serves as a reference architecture for building **feature-scaled, type-safe React Native apps** 
with **responsive design**, **Redux Toolkit**, and **theme-based styling**.
