import React from "react"
import { Link } from "./router";
import { routes } from "./routes";

export function NotFound() {
  return (
    <div>
      <p>404 - Not Found</p>
      <Link to={routes.home.path}>Back to home</Link>
    </div>
  )
}