Personal Portfolio Site
=======================

This is my 2025 personal dev portfolio website built with Astro (https://astro.build). It’s a simple, fast, static site designed to showcase my GitHub projects, introduce who I am, and provide a way to get in touch... and maybe something else?

Features
--------

- Homepage: Short introduction with navigation links
- About: A little bit about me, my background, and what I care about
- Projects: A list of selected GitHub projects with links and brief descriptions
- Contact: Form to send me a message via EmailJS (https://www.emailjs.com)

Tech Stack
----------

- Astro: Static site generator
- EmailJS: Handles contact form submissions without a backend
- SCSS: Optional styling preprocessor
- Deployed via GitHub Pages

Getting Started
---------------

Install dependencies:

    npm install

Run the dev server:

    npm run dev

Build the site:

    npm run build

Deploy to GitHub Pages:

    npm run deploy

Environment Variables
---------------------

Create a `.env` file with the following:

    PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
    PUBLIC_EMAILJS_SERVICE_ID=your_service_id
    PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id

Do **not** commit your `.env` file.

License
-------

This project is open source, MIT licensed.
