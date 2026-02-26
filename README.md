# SyncUp Clone

This is a modern, pixel-perfect clone of the SyncUp platform, built to showcase responsive web design and modern frontend development best practices.

## Tech Stack

This project is built using the following technologies:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Theming**: `next-themes`

## Features

- **Responsive Design**: Fully responsive layout that adapts to all screen sizes (desktop, tablet, mobile).
- **Modern UI/UX**: Pixel-perfect implementation of the SyncUp design with a clean, professional look.
- **Interactive Components**: Accessible, interactive UI elements powered by Radix UI primitives.
- **Data Visualization**: Dynamic and responsive charts implemented with Recharts.
- **Form Handling**: Robust form validation and management.
- **Theme Support**: Built-in support for light and dark modes.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository and navigate into the project directory.
2. Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

## Project Structure

- `app/`: Contains the Next.js App Router pages and layouts.
- `components/`: Contains all reusable React components separated by domain/feature (e.g., UI primitives, layout components, page-specific components).
- `lib/`: Contains utility functions and shared logic.
- `public/`: Static assets such as images and icons.
- `styles/`: Global CSS and Tailwind configuration.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## License

This project is licensed under the MIT License.
