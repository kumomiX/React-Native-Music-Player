export type Props = {
  navigation: {
    navigate: (screen: string, params: Object) => void,
    getParam: (song: string, defaultValue?: string) => string,
  },
}
