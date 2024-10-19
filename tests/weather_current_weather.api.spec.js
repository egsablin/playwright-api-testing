import { test, expect } from "@playwright/test"
import dotenv from 'dotenv';
dotenv.config();

test("Current weather situation for out location", async ({ request }) => {
  const city = "London"
  const response = await request.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API}&q=${city}`)
  expect(response.status()).toBe(200)

  if (response.ok()) {
    const body = await response.json();
    console.log(body);
  } else {
    console.error(`Error: ${response.status()} - ${response.statusText()}`);
  }

})