import React, {useState} from 'react';
import {Container, Footer} from 'react-bootstrap';
import { Outlet } from 'react-router';
function Layout () {
  return (
    <>
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32">

          </svg>
          <span class="fs-4">Simple header</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">Home</a>
          </li>
          <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
          <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
          <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        </ul>
      </header>

      <Outlet />

      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
              <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                  <svg class="bi" width="30" height="24">
                  </svg>
              </a>
              <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24">
                      </svg></a></li>
              <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24">
                      </svg></a></li>
              <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24">
                      </svg></a></li>
          </ul>
      </footer>
    </>
  );
}
export default Layout;
