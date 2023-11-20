

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Business Name Generator</title>
  <meta name="description" content="Generate unique and creative business names for your startup or business venture. Find the perfect name that reflects your brand identity using our online business name generator." />
  <meta name="keywords" content="business name generator, startup names, company names, brand identity, creative business names" />
</head>


<script>
    let businessName = "";
    let nameGenerated = false;
    let selectedCompanyType = "Technology"; // Default company type
  
    const companyTypes = ["Technology", "Retail", "Finance", "Healthcare", "Hospitality", "Consulting", "Construction"];
  
    // Define possible name combinations for each category
    const nameCombinations = {
      Technology: ["TechSolutions", "InnoBytes", "CyberNest", "VirtuSys", "CodeFusion", "PixelPulse", "ByteWave", "NexaTech", "LogicPlex", "ApexSynergy", "WebGenix", "DataPulse", "TechFusion", "ByteWorks", "InnoDynamics", "CyberCore", "CodeCrafters", "NexaTech", "PixelPulse", "ByteWave", "NexaSolutions", "DataPulse", "TechFusion", "ByteWorks", "InnoDynamics", "CodeCrafters", "NexaTech", "PixelPulse", "ByteWave"],
      Retail: ["RetailCo", "ShopMart", "BuyRite", "ValueMax", "ShopZone", "SaleFusion", "PriceHaven", "BargainSpot", "TradeBliss", "ShopifyPro", "DealFinds", "BuyNJoy", "RetailWorks", "ShopStar", "BargainCraft", "TradeTrend", "ShopFusion", "ShopLink", "BuyMasters", "ValueHaven", "TradeBliss", "ShopifyPro", "DealFinds", "BuyNJoy", "RetailWorks", "ShopStar", "BargainCraft", "TradeTrend", "ShopFusion", "ShopLink"],
      Finance: ["FinanceCorp", "CapitalTrust", "MoneyEdge", "InvestLink", "WealthWise", "FundQuest", "CashFlow", "BankTrust", "AssetSage", "LoanNest", "CreditMax", "IncomeGuard", "InvestMasters", "CashCrafters", "WealthVault", "FinancialLink", "FundsFusion", "MoneyMakers", "CreditUnion", "LoanExperts", "CapitalTrust", "MoneyEdge", "InvestLink", "WealthWise", "FundQuest", "CashFlow", "BankTrust", "AssetSage", "LoanNest", "CreditMax"],
      Healthcare: ["HealthcareSolutions", "MediLife", "CareLink", "WellnessHub", "LifeCure", "HealthWave", "MediFusion", "CareNest", "WellnessMax", "WellNurse", "MediCrafter", "LifeSavers", "MediGenix", "HealthCrafters", "LifeHaven", "WellnessPros", "MediWave", "CareMax", "MediSolutions", "MediLife", "CareLink", "WellnessHub", "LifeCure", "HealthWave", "MediFusion", "CareNest", "WellnessMax", "WellNurse", "MediCrafter", "LifeSavers"],
      Hospitality: ["HospitalityGroup", "StayComfort", "TravelNJoy", "HotelHaven", "StayWise", "InnCrafters", "ResortOasis", "LodgeQuest", "StayVoyage", "ExploreNest", "HotelFusion", "TravelMasters", "StayPulse", "LodgeHaven", "ResortSavers", "ExploreCraft", "InnMax", "StayLink", "TravelSolutions", "StayComfort", "TravelNJoy", "HotelHaven", "StayWise", "InnCrafters", "ResortOasis", "LodgeQuest", "StayVoyage", "ExploreNest", "HotelFusion", "TravelMasters"],
      Consulting: ["ConsultingServices", "StratTech", "ExpertMinds", "SolveQuest", "InnoVision", "BizCrafters", "StratEdge", "GrowthLink", "ProSolutions", "BizNest", "StratFusion", "MegaMinds", "SolvePro", "ExpertWise", "InnoCraft", "StratMax", "SolveWave", "ConsultMasters", "StratTech", "ExpertMinds", "SolveQuest", "InnoVision", "BizCrafters", "StratEdge", "GrowthLink", "ProSolutions", "BizNest", "StratFusion", "MegaMinds", "SolvePro"],
      Construction: ["ConstructionBuilders", "BuildMasters", "CraftWorks", "BuildRise", "ConstructPro", "CraftEdge", "ArchitectCraft", "ConstructLink", "HomeCrafters", "BuildNest", "ConstructFusion", "BuildMax", "CraftSolutions", "HomeWorks", "ArchitectPros", "BuildHub", "BuildWave", "CraftMasters", "BuildMasters", "CraftWorks", "BuildRise", "ConstructPro", "CraftEdge", "ArchitectCraft", "ConstructLink", "HomeCrafters", "BuildNest", "ConstructFusion", "BuildMax"]
    };
  
    function generateRandomNameFromCategory(type) {
      const names = nameCombinations[type];
      const randomIndex = Math.floor(Math.random() * names.length);
      return names[randomIndex];
    }
  
    const generateBusinessName = () => {
      businessName = generateRandomNameFromCategory(selectedCompanyType);
      nameGenerated = true;
    }
  </script>
  
  <style>
    /* Your CSS styles here */
    div {
      text-align: center;
      margin-top: 20px;
    }
  
    select, button {
      padding: 10px 20px;
      font-size: 16px;
      margin-bottom: 20px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }
  
    select {
      background-color: #f8f9fa;
      border: 1px solid #ced4da;
      color: #495057;
    }
  
    button {
      background-color: #007bff;
      color: #fff;
      border: none;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  
    p {
      font-size: 18px;
      margin-top: 10px;
    }
  </style>
  
  <div>
    <h1>Business Name Generator</h1>
  
    <!-- Company type dropdown -->
    <select bind:value={selectedCompanyType}>
      {#each companyTypes as type}
        <option value={type}>{type}</option>
      {/each}
    </select>
  
    <button on:click={generateBusinessName}>Generate Business Name</button>
    {#if nameGenerated}
      <p>{businessName}</p>
    {/if}
  </div>
  