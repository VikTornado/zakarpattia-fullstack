import React from "react";
import { useParams } from "react-router-dom";
import DynamicPage from "../components/DynamicPage";

export default function DynamicPageRoute() {
  const { slug } = useParams();
  return <DynamicPage slug={slug} />;
}