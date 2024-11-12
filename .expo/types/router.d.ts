/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/` | `/(auth)/(modals)/location` | `/(auth)/explore` | `/(auth)/location` | `/(auth)/myspaces` | `/(auth)/place` | `/(auth)/place/` | `/(auth)/profile` | `/(modals)/facebook` | `/(modals)/google` | `/(modals)/location` | `/(public)` | `/(public)/(modals)/facebook` | `/(public)/(modals)/google` | `/(public)/facebook` | `/(public)/google` | `/(public)/login` | `/(public)/register` | `/_sitemap` | `/context/AuthContext` | `/context/ThemeContext` | `/explore` | `/facebook` | `/google` | `/location` | `/login` | `/myspaces` | `/place` | `/place/` | `/profile` | `/register` | `/shared/components/Button` | `/shared/components/ButtonIcon` | `/shared/components/Buttonfb` | `/shared/components/Buttongoogle` | `/shared/components/Chip` | `/shared/components/ExploreHeader` | `/shared/components/Input` | `/shared/components/ListNearBy` | `/shared/components/ListTopRatings` | `/shared/components/ModalHeader` | `/shared/components/PlacePreview` | `/shared/components/StarsRating`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
