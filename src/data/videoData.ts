export interface VideoItem {
  id: number;
  title: string;
  subtitle: string;
  src: string;
  poster: string;
}

const CLOUD = 'https://res.cloudinary.com/oytqegys/video/upload';

function posterFor(version: string, name: string) {
  return `${CLOUD}/so_0,f_jpg,q_auto,w_800/${version}/${name}.jpg`;
}

export const videos: VideoItem[] = [
  { id: 1, title: '', subtitle: '', src: `${CLOUD}/v1787540888/1_1.mp4`, poster: posterFor('v1787540888', '1_1') },
  { id: 2, title: '', subtitle: '', src: `${CLOUD}/v1787540890/1_6.mp4`, poster: posterFor('v1787540890', '1_6') },
  { id: 3, title: '', subtitle: '', src: `${CLOUD}/v1787540887/1_5.mp4`, poster: posterFor('v1787540887', '1_5') },
  { id: 4, title: '', subtitle: '', src: `${CLOUD}/v1787540886/1_3.mp4`, poster: posterFor('v1787540886', '1_3') },
  { id: 5, title: '', subtitle: '', src: `${CLOUD}/v1787540891/1_8.mp4`, poster: posterFor('v1787540891', '1_8') },
  { id: 6, title: '', subtitle: '', src: `${CLOUD}/v1787540892/1_4.mp4`, poster: posterFor('v1787540892', '1_4') },
  { id: 7, title: '', subtitle: '', src: `${CLOUD}/v1787540887/1_10.mp4`, poster: posterFor('v1787540887', '1_10') },
  { id: 8, title: '', subtitle: '', src: `${CLOUD}/v1787540894/1_9.mp4`, poster: posterFor('v1787540894', '1_9') },
  { id: 9, title: '', subtitle: '', src: `${CLOUD}/v1787540884/1_2.mp4`, poster: posterFor('v1787540884', '1_2') },
  { id: 10, title: '', subtitle: '', src: `${CLOUD}/v1787540885/1_7.mp4`, poster: posterFor('v1787540885', '1_7') },
];
