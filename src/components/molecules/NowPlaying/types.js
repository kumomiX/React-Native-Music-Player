export type Props = {
  song: {
    title: string,
    artist: string,
  },
  isPlaying: boolean,
  progress: number,
  onExpand: () => void,
}
