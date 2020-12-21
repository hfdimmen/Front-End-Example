import React, { Component, useEffect, useState } from "react";
import Header from './Header.js';
import Router from './router.js';
import './App.css';
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <div>
            <Router/>
          </div>
        </>
      </BrowserRouter>
    );
  }

export default App;
