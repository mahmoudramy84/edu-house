import React from "react";

const WavyBottom = () => {
  return (
    <div className="wavy-bottom overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full"
      >
        <defs>
          <linearGradient id="wave-gradient-light" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#4f46e5" />
            <stop offset="100%" stop-color="#1e40af" />
          </linearGradient>
          <linearGradient id="wave-gradient-dark" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#1e3a8a" />
            <stop offset="100%" stop-color="#1e293b" />
          </linearGradient>
        </defs>
        <path
          className="wave-path fill-[url(#wave-gradient-light)] dark:fill-[url(#wave-gradient-dark)]"
          fill="url(#wave-gradient)"
          d="M0,256L48,224C96,192,192,128,288,133.3C384,139,480,213,576,213.3C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default WavyBottom;
