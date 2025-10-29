# MTG Price Checker

> ⚠️ **This project is a work in progress (WIP).**  
> Features may be incomplete, unstable, or subject to change.

A React-based web application for checking **Magic: The Gathering** card prices using the [Scryfall API](https://scryfall.com/docs/api).

## Features

- Search cards by name or collector number
- Browse the complete list of tabletop MTG sets
- View detailed card information including prices
- Dark theme interface
- Responsive design

## Technologies Used

- React 18
- Bootstrap 5
- Axios
- Scryfall API (`https://api.scryfall.com`)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mtg-card-price-checker.git
```

2. Navigate to the project directory:
```bash
cd mtg-card-price-checker
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## Usage

### Search by Name
1. Select "Search by name" option
2. Enter the card name
3. Specify the set code
4. Click search to view results

### Search by Collector Number
1. Select "Search by collector number" option
2. Enter the set code (e.g., "one" for Phyrexia: All Will Be One)
3. Enter the collector number
4. Click search to view results

## API Reference

This project uses the [Scryfall API](https://scryfall.com/docs/api) for card data and pricing information.

## License

The **source code** of this application is distributed under the Unlicense License. See `LICENSE.txt` for more information.

However, **all Magic: The Gathering card data, images, names, and related intellectual property** are owned by **Wizards of the Coast LLC** and are used under the [Wizards of the Coast Fan Content Policy](https://company.wizards.com/en/legal/fan-content-policy) via the [Scryfall API](https://scryfall.com/docs/api).