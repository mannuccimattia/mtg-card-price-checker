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

The **source code** of this application is licensed under the **MIT License** — see below.

However, **all Magic: The Gathering card data, images, names, and related intellectual property** are owned by **Wizards of the Coast LLC** and are used under the [Wizards of the Coast Fan Content Policy](https://company.wizards.com/en/legal/fan-content-policy) via the [Scryfall API](https://scryfall.com/docs/api).

> ⚠️ **Important**:  
> - You **may not charge users** for access to card data (no paywalls, subscriptions, or required payments).  
> - This project **does not grant any rights** to WotC’s intellectual property.  
> - The MIT License **applies only to the original code** in this repository — **not** to MTG content.

### MIT License (for this code only)

MIT License  
Copyright (c) [2025] [mannuccimattia]  

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the "Software"), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all  
copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
SOFTWARE.