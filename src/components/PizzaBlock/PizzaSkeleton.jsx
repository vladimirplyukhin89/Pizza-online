import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="17" y="253" rx="5" ry="5" width="264" height="24" />
    <circle cx="150" cy="121" r="111" />
    <rect x="17" y="297" rx="6" ry="6" width="270" height="58" />
    <rect x="123" y="379" rx="20" ry="20" width="156" height="52" />
    <rect x="19" y="387" rx="5" ry="5" width="83" height="37" />
    <rect x="96" y="408" rx="0" ry="0" width="2" height="1" />
  </ContentLoader>
);

export default PizzaSkeleton;
