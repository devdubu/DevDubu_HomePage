interface IPost {
  PostId?: number;
  CategoryId?: number;
  UserId?: number;
  title: string;
  content: string;
  thumbnail?: string;
  viewers: number;
  likes: number;
  tag?: string[];
}
