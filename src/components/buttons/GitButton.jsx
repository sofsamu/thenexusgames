import React from 'react'

export default function GitButton() {
  return (
    <div>
      <a
        href="https://github.com/sofsamu/thenexusgames"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="animated-button flex items-center space-x-2 px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600">
          <svg
            viewBox="0 0 24 24"
            className="arr-2 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">GitHub</span>
          <span className="circle"></span>
          <svg
            viewBox="0 0 24 24"
            className="arr-1 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </a>
    </div>
  )
}