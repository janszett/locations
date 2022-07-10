const bodyParser = require('body-parser');
const app = require('express')();
const fs = require('fs');

const path = require('path');
const locationsRaw = fs.readFileSync(path.resolve('./api/locations.json'));
const locationsJson = JSON.parse(locationsRaw);
app.use(bodyParser.json());

app.get('/locations', (req, res) => {
  let locations = locationsJson.data; // get seats from json file
  /*  const xMin = parseInt(req.query.xMin) || null;
  const xMax = parseInt(req.query.xMax) || null;
  const yMin = parseInt(req.query.yMin) || null;
  const yMax = parseInt(req.query.yMax) || null;
  // let seats = addDummySeats(); // get seats dynamically

  if (xMin) {
    seats = seats.filter(seat => seat.x >= xMin);
  }
  if (xMax) {
    seats = seats.filter(seat => seat.x <= xMax);
  }
  if (yMin) {
    seats = seats.filter(seat => seat.y >= yMin);
  }
  if (yMax) {
    seats = seats.filter(seat => seat.y <= yMax);
  } */

  locations = locations.map(location => ({
    name: location.name,
    slug: location.slug,
    address: {
      street: location.address.street,
      city: location.address.city,
      country: location.address.country,
      address_line: location.address.address_line,
      postal_code: location.address.postal_code
    },
    prices: location.prices,
    max_seated: location.max_seated,
    max_standing: location.max_standing,
    min_pax: location.min_pax,
    max_people_count: location.max_people_count,
    catering: location.catering,
    virtual_tour_url: location.virtual_tour_url,
    meta: {
      advertisement: location.meta.advertisement
    },
    image: location.files[0],
    areas: location.areas.length
  }));
  /*  locations = locations.filter(location => {
    return location.name.includes('Wenk');
  }); */

  res.json(locations);
});

module.exports = app;

function randomStatus () {
  return Math.round(Math.random());
}

function getCategory (x) {
  if (x < 200) return 1;
  if (x < 400) return 2;
  if (x < 600) return 3;
  return 4;
}

// eslint-disable-next-line no-unused-vars
function addDummySeats () {
  const blocks = 3;
  const blockOffsetY = 500;
  const seatRadius = 20;
  const rows = 7;
  const cols = 12;
  const seats = [];
  for (let blockIndex = 0; blockIndex < blocks; blockIndex++) {
    const offsetY = blockIndex * blockOffsetY;
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        const seatX = 3 * seatRadius + (colIndex * seatRadius * 3);
        const seatY = 3 * seatRadius + (rowIndex * seatRadius * 3);
        seats.push({ x: seatX, y: offsetY + seatY, status: randomStatus(), category: getCategory(seatX), id: `${getLetterByIndex(colIndex)}${rowIndex + 1}`, block: blockIndex + 1 });
      }
    }
  }

  return seats;
}

function getLetterByIndex (index) {
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')[Number(index)];
}
