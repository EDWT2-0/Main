
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Screen Ruler</title>
  <meta name="description" content="Measure on-screen elements with precision using our online screen ruler. Perfect for design and layout tasks that require accurate measurements." />
  <meta name="keywords" content="screen ruler, on-screen measurements, design tool, layout precision" />
</head>


<!-- Ruler.svelte -->

<script>
    let widthInCm = 30; // Change this value to set the desired width in centimeters
    let widthInInches = widthInCm / 2.54;
    let marks = [];
  
    for (let i = 0; i <= widthInInches; i++) {
      marks.push(i);
    }
  </script>
  
  <div class="ruler">
    {#each marks as mark (mark)}
      <div class="mark">
        <div class="label">
          {mark} {mark === 1 ? 'inch' : 'inches'}
        </div>
      </div>
    {/each}
  </div>
  
  <style>
    .ruler {
      display: flex;
      align-items: center;
    }
  
    .mark {
      border-right: 1px solid #000;
      width: 2.54cm; /* 1cm */
      height: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    }
  
    .label {
      font-size: 14px;
      margin-bottom: 5px;
    }
  </style>
  