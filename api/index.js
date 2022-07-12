const bodyParser = require('body-parser');
const app = require('express')();
const fs = require('fs');

const path = require('path');
const locationsRaw = fs.readFileSync(path.resolve('./api/locations.json'));
const locationsJson = JSON.parse(locationsRaw);
app.use(bodyParser.json());

app.get('/locations', (req, res) => {
  let locations = locationsJson.data;

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
    price: location.prices[0] || null,
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

  res.json(locations);
});

module.exports = app;
