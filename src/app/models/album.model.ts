import { DescriptorTag } from './descriptor-tag.model';

export class Album {

  constructor(
    public albumId: number,
    public title: string,
    public year: number,
    public imgUrl: string,
    public artist: string,
    public genre: number,
    public tags: DescriptorTag[],
    public score: number
  ) { }

}
