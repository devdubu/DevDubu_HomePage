import { http, HttpResponse } from "msw";
import { data } from "./data/blog/node.ts";

export const handler = [
  http.get("/post", () => {
    return HttpResponse.json(data);
  }),

  http.get("/age", () => {
    return HttpResponse.json(
      { age: "26" },
      {
        status: 200,
      }
    );
  }),
];
