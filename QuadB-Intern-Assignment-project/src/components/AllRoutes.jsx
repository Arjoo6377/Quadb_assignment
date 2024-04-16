import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SingleShow from "../pages/SingleShow";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<SingleShow />} />
    </Routes>
  );
};

export default AllRoutes;
