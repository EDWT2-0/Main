

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Timezone Converter</title>
  <meta name="description" content="Convert between different timezones effortlessly with our online timezone converter. Stay organized and coordinate activities across the globe." />
  <meta name="keywords" content="timezone converter, world time, time conversion, global coordination" />
</head>


<!-- TimezoneConverter.svelte -->
<script>
  import { onMount } from 'svelte';

  let selectedCountry = '';
  let selectedTimezone = '';
  let autoFillDate = true;
  let currentDate = new Date();

  let countries = [
    {
      label: 'United States',
      code: 'US',
      timezones: [
        { label: 'Eastern Time', offset: { std: -5, dst: -4 } },
        { label: 'Central Time', offset: { std: -6, dst: -5 } },
        { label: 'Mountain Time', offset: { std: -7, dst: -6 } },
        { label: 'Pacific Time', offset: { std: -8, dst: -7 } },
      ],
    },
    {
      label: 'United Kingdom',
      code: 'GB',
      timezones: [
        { label: 'GMT', offset: 0 },
      ],
    },
    {
      label: 'Canada',
      code: 'CA',
      timezones: [
        { label: 'Eastern Time', offset: { std: -5, dst: -4 } },
        { label: 'Central Time', offset: { std: -6, dst: -5 } },
        { label: 'Mountain Time', offset: { std: -7, dst: -6 } },
        { label: 'Pacific Time', offset: { std: -8, dst: -7 } },
      ],
    },
    {
      label: 'Australia',
      code: 'AU',
      timezones: [
        { label: 'Eastern Standard Time', offset: 10 },
        { label: 'Central Standard Time', offset: 9.5 },
        { label: 'Central Daylight Time', offset: 10.5 },
        { label: 'Western Standard Time', offset: 8 },
      ],
    },
    // Add more countries and their timezones here
  ];

  function updateDate() {
    const localTimezoneOffset = new Date().getTimezoneOffset() * 60000;
    if (autoFillDate && selectedTimezone) {
      const country = countries.find((country) => country.code === selectedCountry);
      if (country) {
        const timezone = country.timezones.find((tz) => tz.label === selectedTimezone);
        if (timezone) {
          const offset = isDaylightSavingTime() ? timezone.offset.dst : timezone.offset.std;
          const selectedTimezoneOffset = offset * 3600000;
          currentDate = new Date(Date.now() + localTimezoneOffset + selectedTimezoneOffset);
        }
      }
    }
  }

  function isDaylightSavingTime() {
    const now = new Date();
    // Simplified DST calculation for demonstration purposes
    return now.getMonth() >= 2 && now.getMonth() <= 10;
  }

  onMount(updateDate);
</script>

<style>
  :root {
    --background-light: #f7f7f7;
    --background-dark: #333;
    --text-light: #333;
    --text-dark: #f7f7f7;
    --button-light: #0078d4;
    --button-dark: #005ea2;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: var(--background-dark);
      --text: var(--text-dark);
      --button: var(--button-dark);
    }

    input[type="datetime-local"],
    select,
    button,
    label {
      background-color: var(--button);
      color: white;
      border: none;
      border-radius: 5px;
      padding: 8px 12px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    input[type="checkbox"] {
      cursor: pointer;
    }

    input[type="datetime-local"]:focus,
    select:focus,
    button:focus,
    label:focus {
      outline: none;
    }

    button:hover {
      background-color: darken(var(--button), 10%);
    }
  }

  /* Other styles */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--background);
    color: var(--text);
  }

  div {
    text-align: center;
    margin-top: 20px;
  }

  h1 {
    font-size: 28px;
    margin-bottom: 15px;
  }

  label {
    margin-right: 10px;
  }

  input[type="checkbox"] {
    margin-right: 5px;
    vertical-align: middle;
  }

  input[type="datetime-local"],
  select {
    font-size: 16px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 15px;
  }
</style>


<div>
  <h1>Timezone Converter</h1>
  <label for="selectedCountry">Select Country:</label>
  <select id="selectedCountry" bind:value={selectedCountry}>
    <option value="">Select a country</option>
    {#each countries as country}
      <option value={country.code}>{country.label}</option>
    {/each}
  </select>
  <br>

  <label for="selectedTimezone">Select Timezone:</label>
  <select id="selectedTimezone" bind:value={selectedTimezone} on:change={updateDate}>
    <option value="">Select a timezone</option>
    {#if selectedCountry !== ''}
      {#each countries.find((country) => country.code === selectedCountry).timezones as tz}
        <option value={tz.label}>{tz.label}</option>
      {/each}
    {/if}
  </select>
  <br>

  <label for="autoFillDate">Auto-fill Date and Time:</label>
  <input type="checkbox" id="autoFillDate" bind:checked={autoFillDate}>
  <br>

  <label for="dateInput">Date:</label>
  <input type="datetime-local" id="dateInput" bind:value={currentDate}>
  <br>

  <p>Converted Date and Time:</p>
  <p>{currentDate.toLocaleString()}</p>
</div>
