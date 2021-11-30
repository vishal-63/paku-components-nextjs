import { blogs } from "../../../data/BlogData";

export default function handler(req, res) {
  res.status(200).json(blogs);
}
