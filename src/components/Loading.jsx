"use client";

import React from "react";
import { Ring } from "ldrs/react";
import "ldrs/react/Ring.css";

function Loading() {
  return (
    <div className="container-loading">
      <Ring size="40" stroke="5" bgOpacity="0" speed="2" color="black" />
    </div>
  );
}

export default Loading;
