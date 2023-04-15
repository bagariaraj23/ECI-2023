import React from "react";
import "./candy.css";

const Card6 = () => {
  return (
    <div className="d-flex align-item-center justify-content-center hello" style={{marginBottom:"1.5vh"}}>
      <div class="card-list-1">
        <article class="card-1">
          <div class="card-header-1">
            <a
              href="#"
              class="text-decoration-none"
              style={{ marginLeft: "1vw", color: "#c0986e", fontWeight: "700" }}
            >
              Noob_Master_007
            </a>
            <button class="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                display="block"
                id="Heart"
              >
                <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
              </svg>
            </button>
          </div>
          <div id="text" class="mb-0 mt-2 font-italic"></div>
          <div class="bg-info shadow-sm">
            <i class="fa fa-quote-left text-white"></i>
          </div>
          <p class="mb-0 mt-2 p-3 font-italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo."
          </p>
          <div class="card-footer">
            <div class="card-meta card-meta--views">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                display="block"
                id="EyeOpen"
              >
                <path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <div id="count">2,465</div>
            </div>
            <div class="card-meta card-meta--date">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                display="block"
                id="Calendar"
              >
                <rect x="2" y="4" width="20" height="18" rx="4" />
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <path d="M2 10h20" />
              </svg>
              <div id="date">Jul 26, 2019</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Card6;
