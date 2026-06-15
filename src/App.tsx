import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import Insights from "./components/Insights";
import ConsultingSummary from "./components/ConsultingSummary";


export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Dashboard />
      <Insights/>
      <ConsultingSummary/>
    </>
  );
}