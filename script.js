
window.onload = function () {
  window.scrollTo(0, 0);
};
let currentChart = null;

const graphSection = document.getElementById("graph-section");
const graphTitle = document.getElementById("graph-title");
const evChartCanvas = document.getElementById("evChart");

const scrollToGraph = () => {
    graphSection.style.display = "block";
    graphSection.scrollIntoView({ behavior: "smooth" });
};

const updateChart = (title, chartType, data, options = {}) => {
    graphTitle.textContent = title;

    if (currentChart) {
        currentChart.destroy();
    }

    currentChart = new Chart(evChartCanvas, {
        type: chartType,
        data: data,
        options: options
    });

    scrollToGraph();
};
function showTopManufacturersChart() {
  evChartCanvas.classList.remove("small-pie");
  updateChart(
      "Top 5 EV Manufacturers",
      "bar",
      {
          labels: ["Tesla", "Nissan", "Chevrolet", "BMW", "Ford"],
          datasets: [{
              label: "Number of Vehicles",
              data: [15000, 12000, 10000, 8000, 7000],
              backgroundColor: "rgba(6, 255, 251, 0.6)"
          }]
      },
      {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  );
}

// Top 5 EV Manufacturers
document.getElementById("ev-manufacturers-link").addEventListener("click", (e) => {
  e.preventDefault();
  showTopManufacturersChart();
});

// CAFV Eligibility
document.getElementById("cafv-link").addEventListener("click", (e) => {
    e.preventDefault();
    evChartCanvas.classList.remove("small-pie");

    updateChart(
        "Clean Alternative Fuel Vehicle (CAFV) Eligibility",
        "bar",
        {
            labels: ["Eligible", "Not Eligible"],
            datasets: [{
                label: "Count",
                data: [18000, 12000],
                backgroundColor: ["rgba(0, 255, 127, 0.7)", "rgba(255, 99, 132, 0.7)"]
            }]
        },
        {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    );
});

// EV Type Counts (Pie Chart)
document.getElementById("ev-type-link").addEventListener("click", (e) => {
    e.preventDefault();

    // Apply smaller size for pie chart
    evChartCanvas.classList.add("small-pie");

    updateChart(
        "EV Type Counts",
        "pie",
        {
            labels: ["Battery Electric Vehicle (BEV)", "Plug-in Hybrid Electric Vehicle (PHEV)"],
            datasets: [{
                data: [39461, 10539],
                backgroundColor: ["#36A2EB", "#FFCE56"],
                borderColor: "#fff",
                borderWidth: 2
            }]
        },
        {
            responsive: true
        }
    );
});
// Top 5 Counties by EV Count
document.getElementById("ev-counties-link").addEventListener("click", (e) => {
    e.preventDefault();
    evChartCanvas.classList.remove("small-pie");

    updateChart(
        "Top 5 Counties by EV Count",
        "bar",
        {
            labels: ["King", "Clark", "Snohomish", "Kitsap", "Thurston"],
            datasets: [{
                label: "Number of Vehicles",
                data: [37502, 4838, 2553, 2154, 1524],
                backgroundColor: "rgba(6, 255, 251, 0.6)"
            }]
        },
        {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    );
});
// EV Models in Different Years
document.getElementById("ev-models-link").addEventListener("click", (e) => {
    e.preventDefault();
    evChartCanvas.classList.remove("small-pie");
  
    updateChart(
      "EV Models in Different Years",
      "bar",
      {
        labels: [
          "1998", "2000", "2002", "2008", "2010", "2011", "2012", "2013",
          "2014", "2015", "2016", "2017", "2018", "2019", "2020",
          "2021", "2022", "2023", "2024"
        ],
        datasets: [{
          label: "Model Count",
          data: [
            1, 1, 1, 1, 1, 5, 8, 10,
            18, 18, 26, 30, 35, 35, 35,
            40, 60, 72, 56
          ],
          backgroundColor: "rgba(153, 102, 255, 0.6)"
        }]
      },
      {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    );
  });

  // Data used for explore section
const countryData = {
    'King': 75.004, 'Clark': 9.676, 'Snohomish': 5.106, 'Kitsap': 4.308, 'Thurston': 3.048,
    'Cowlitz': 0.88, 'Jefferson': 0.786, 'Yakima': 0.612, 'Island': 0.304, 'Clallam': 0.106,
    'Stevens': 0.066, 'Klickitat': 0.042, 'Grant': 0.012, 'Whitman': 0.01, 'Chelan': 0.01,
    'Skagit': 0.008, 'Walla Walla': 0.008, 'Spokane': 0.006, 'Kittitas': 0.006, 'Pend Oreille': 0.002
  };
  
  const companyData = {
    'TESLA': 46.254, 'NISSAN': 7.818, 'CHEVROLET': 7.086, 'BMW': 4.428, 'FORD': 4.056,
    'KIA': 3.96, 'TOYOTA': 3.136, 'JEEP': 2.798, 'VOLKSWAGEN': 2.656, 'HYUNDAI': 2.468,
    'VOLVO': 2.408, 'RIVIAN': 2.272, 'AUDI': 2.06, 'CHRYSLER': 1.816, 'MERCEDES-BENZ': 0.954,
    'DODGE': 0.824, 'PORSCHE': 0.674, 'SUBARU': 0.672, 'POLESTAR': 0.552, 'MINI': 0.506,
    'FIAT': 0.462, 'MITSUBISHI': 0.45, 'HONDA': 0.396, 'MAZDA': 0.222, 'LEXUS': 0.204,
    'CADILLAC': 0.186, 'SMART': 0.136, 'LUCID': 0.136, 'JAGUAR': 0.116, 'GENESIS': 0.104,
    'LINCOLN': 0.098, 'FISKER': 0.028, 'ALFA ROMEO': 0.026, 'LAND ROVER': 0.026,
    'GMC': 0.006, 'TH!NK': 0.002, 'BENTLEY': 0.002, 'AZURE DYNAMICS': 0.002
  };
  
  const evTypeData = {
    'Battery Electric Vehicle (BEV)': 78.922,
    'Plug-in Hybrid Electric Vehicle (PHEV)': 21.078
  };
  
  const countrySelect = document.getElementById("country");
  const companySelect = document.getElementById("company");
  const evTypeSelect = document.getElementById("evType");
  const resultDiv = document.getElementById("result");
  
  function populateSelect(selectElement, data) {
    if (!selectElement) return;
    for (let key in data) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = key;
      selectElement.appendChild(option);
    }
  }
  
  function calculateAvailability() {
    const country = countrySelect.value;
    const company = companySelect.value;
    const evType = evTypeSelect.value;
  
    if (country && company && evType) {
      const c = countryData[country];
      const m = companyData[company];
      const e = evTypeData[evType];
  
      const average = ((c + m + e) / 3).toFixed(2);
  
      const evSuggestions = {
        "TESLA": {
          "Battery Electric Vehicle (BEV)": "Tesla Model 3",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Tesla doesn't produce PHEVs"
        },
        "NISSAN": {
          "Battery Electric Vehicle (BEV)": "Nissan Leaf",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Nissan e-Power"
        },
        "CHEVROLET": {
          "Battery Electric Vehicle (BEV)": "Chevrolet Bolt EV",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Chevrolet Volt"
        },
        "BMW": {
          "Battery Electric Vehicle (BEV)": "BMW i4",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "BMW 330e"
        },
        "FORD": {
          "Battery Electric Vehicle (BEV)": "Ford Mustang Mach-E",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Ford Escape PHEV"
        },
        "KIA": {
          "Battery Electric Vehicle (BEV)": "Kia EV6",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Kia Niro PHEV"
        },
        "TOYOTA": {
          "Battery Electric Vehicle (BEV)": "Toyota bZ4X",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Toyota Prius Prime"
        },
        "JEEP": {
          "Battery Electric Vehicle (BEV)": "Jeep Recon (upcoming)",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Jeep Wrangler 4xe"
        },
        "VOLKSWAGEN": {
          "Battery Electric Vehicle (BEV)": "Volkswagen ID.4",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Volkswagen Golf GTE"
        },
        "HYUNDAI": {
          "Battery Electric Vehicle (BEV)": "Hyundai Ioniq 5",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Hyundai Tucson PHEV"
        },
        "VOLVO": {
          "Battery Electric Vehicle (BEV)": "Volvo XC40 Recharge",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Volvo XC60 Recharge"
        },
        "RIVIAN": {
          "Battery Electric Vehicle (BEV)": "Rivian R1T",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Rivian does not make PHEVs"
        },
        "AUDI": {
          "Battery Electric Vehicle (BEV)": "Audi Q4 e-tron",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Audi A7 TFSI e"
        },
        "CHRYSLER": {
          "Battery Electric Vehicle (BEV)": "Chrysler Airflow (concept)",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Chrysler Pacifica Hybrid"
        },
        "MERCEDES-BENZ": {
          "Battery Electric Vehicle (BEV)": "Mercedes EQS",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Mercedes C 300 e"
        },
        "DODGE": {
          "Battery Electric Vehicle (BEV)": "Dodge Charger Daytona SRT (concept)",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Dodge Hornet R/T"
        },
        "PORSCHE": {
          "Battery Electric Vehicle (BEV)": "Porsche Taycan",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Porsche Panamera E-Hybrid"
        },
        "SUBARU": {
          "Battery Electric Vehicle (BEV)": "Subaru Solterra",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Subaru Crosstrek Hybrid"
        },
        "POLESTAR": {
          "Battery Electric Vehicle (BEV)": "Polestar 2",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Polestar doesn't produce PHEVs"
        },
        "MINI": {
          "Battery Electric Vehicle (BEV)": "MINI Cooper SE",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "MINI Countryman Plug-in Hybrid"
        },
        "FIAT": {
          "Battery Electric Vehicle (BEV)": "FIAT 500e",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "FIAT doesn't produce PHEVs"
        },
        "MITSUBISHI": {
          "Battery Electric Vehicle (BEV)": "i-MiEV",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Mitsubishi Outlander PHEV"
        },
        "HONDA": {
          "Battery Electric Vehicle (BEV)": "Honda Prologue",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Honda Clarity Plug-in Hybrid"
        },
        "MAZDA": {
          "Battery Electric Vehicle (BEV)": "Mazda MX-30 EV",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Mazda CX-90 PHEV"
        },
        "LEXUS": {
          "Battery Electric Vehicle (BEV)": "Lexus RZ",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Lexus NX 450h+"
        },
        "CADILLAC": {
          "Battery Electric Vehicle (BEV)": "Cadillac Lyriq",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Cadillac doesn't produce PHEVs"
        },
        "SMART": {
          "Battery Electric Vehicle (BEV)": "Smart EQ ForTwo",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Smart doesn't produce PHEVs"
        },
        "LUCID": {
          "Battery Electric Vehicle (BEV)": "Lucid Air",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Lucid doesn't produce PHEVs"
        },
        "JAGUAR": {
          "Battery Electric Vehicle (BEV)": "Jaguar I-PACE",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Jaguar F-PACE PHEV"
        },
        "GENESIS": {
          "Battery Electric Vehicle (BEV)": "Genesis GV60",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Genesis does not produce PHEVs"
        },
        "LINCOLN": {
          "Battery Electric Vehicle (BEV)": "Lincoln Star (concept)",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Lincoln Corsair Grand Touring"
        },
        "FISKER": {
          "Battery Electric Vehicle (BEV)": "Fisker Ocean",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Fisker doesn't produce PHEVs"
        },
        "ALFA ROMEO": {
          "Battery Electric Vehicle (BEV)": "Alfa Romeo EV coming in 2025",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Alfa Romeo Tonale PHEV"
        },
        "LAND ROVER": {
          "Battery Electric Vehicle (BEV)": "Range Rover EV (upcoming)",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Range Rover Sport PHEV"
        },
        "GMC": {
          "Battery Electric Vehicle (BEV)": "GMC Hummer EV",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "GMC doesn't produce PHEVs"
        },
        "TH!NK": {
          "Battery Electric Vehicle (BEV)": "Think City",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "TH!NK didn't produce PHEVs"
        },
        "BENTLEY": {
          "Battery Electric Vehicle (BEV)": "Bentley EV (planned)",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "Bentley Bentayga Hybrid"
        },
        "AZURE DYNAMICS": {
          "Battery Electric Vehicle (BEV)": "Azure Transit Connect Electric",
          "Plug-in Hybrid Electric Vehicle (PHEV)": "No PHEVs from Azure Dynamics"
        }
      };
  
      const suggestion =
        evSuggestions[company] && evSuggestions[company][evType]
          ? evSuggestions[company][evType]
          : "No specific suggestion available for this selection.";
  
      resultDiv.innerHTML = `
        <div class="ev-result-box">
          <p><strong>Availability Percentage:</strong> ${average}%</p>
          <p><strong>Suggested EV:</strong> ${suggestion}</p>
        </div>
      `;
    } else {
      resultDiv.textContent = "";
    }
  }
  
  
  // Initialize dropdowns and event listeners
  if (countrySelect && companySelect && evTypeSelect) {
    populateSelect(countrySelect, countryData);
    populateSelect(companySelect, companyData);
    populateSelect(evTypeSelect, evTypeData);
  
    [countrySelect, companySelect, evTypeSelect].forEach(select => {
      select.addEventListener("change", calculateAvailability);
    });
  }

  document.getElementById("market-trends-link").addEventListener("click", (e) => {
    e.preventDefault();
    evChartCanvas.classList.remove("small-pie");

    // Simulate sample dataset similar to your actual one
    const sampleData = [
        { 'Model Year': '2024', 'Make': 'TESLA' },
        { 'Model Year': '2024', 'Make': 'TESLA' },
        { 'Model Year': '2024', 'Make': 'FORD' },
        { 'Model Year': '2024', 'Make': 'NISSAN' },
        { 'Model Year': '2024', 'Make': 'TESLA' },
        { 'Model Year': '2024', 'Make': 'NISSAN' },
        { 'Model Year': '2024', 'Make': 'BMW' },
        { 'Model Year': '2024', 'Make': 'BMW' },
        { 'Model Year': '2024', 'Make': 'BMW' },
        { 'Model Year': '2024', 'Make': 'HYUNDAI' },
    ];

    // Aggregate 2024 brand counts
    const trends2024 = sampleData
        .filter(row => row['Model Year'] === '2024')
        .reduce((acc, row) => {
            const make = row['Make'] || 'Unknown';
            acc[make] = (acc[make] || 0) + 1;
            return acc;
        }, {});

    const labels = Object.keys(trends2024);
    const values = Object.values(trends2024);

    updateChart(
        "Market Trends - 2024 Brand Count",
        "bar",
        {
            labels: labels,
            datasets: [{
                label: "Count of Brands",
                data: values,
                backgroundColor: "rgba(60, 231, 231, 0.83)"
            }]
        },
        {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    );
});

// Get slider and value display elements
const mileageSlider = document.getElementById("mileageSlider");
const gasPriceSlider = document.getElementById("gasPriceSlider");
const electricPriceSlider = document.getElementById("electricPriceSlider");
const mpgSlider = document.getElementById("mpgSlider");

const mileageValue = document.getElementById("mileageValue");
const gasPriceValue = document.getElementById("gasPriceValue");
const electricPriceValue = document.getElementById("electricPriceValue");
const mpgValue = document.getElementById("mpgValue");

const annualSavings = document.getElementById("annualSavings");
const fiveYearSavings = document.getElementById("fiveYearSavings");
const co2Reduction = document.getElementById("co2Reduction");

// Function to update displayed slider values
function updateDisplayValues() {
  mileageValue.textContent = parseInt(mileageSlider.value).toLocaleString() + " miles";
  gasPriceValue.textContent = "$" + parseFloat(gasPriceSlider.value).toFixed(2);
  electricPriceValue.textContent = electricPriceSlider.value + "¢";
  mpgValue.textContent = mpgSlider.value + " MPG";
}

// Function to calculate savings and CO2
function calculateSavings() {
  const annualMileage = parseInt(mileageSlider.value);
  const gasPrice = parseFloat(gasPriceSlider.value);
  const electricPriceCents = parseInt(electricPriceSlider.value);
  const electricPrice = electricPriceCents / 100; // convert to dollars
  const mpg = parseInt(mpgSlider.value);

  // Assumptions
  const evEfficiencyKWhPerMile = 0.3;
  const co2PerGallon = 19.6; // lbs CO2 per gallon
  const lbsPerTon = 2000;

  // Gas cost per year
  const gasFuelCost = (annualMileage / mpg) * gasPrice;

  // EV electricity cost per year
  const evElectricCost = annualMileage * evEfficiencyKWhPerMile * electricPrice;

  // Annual Savings
  const savings = gasFuelCost - evElectricCost;
  annualSavings.textContent = "$" + savings.toFixed(0).toLocaleString();

  // 5-year savings
  const savings5 = savings * 5;
  fiveYearSavings.textContent = "$" + savings5.toFixed(0).toLocaleString();

  // CO2 Reduction
  const co2Saved = (annualMileage / mpg) * co2PerGallon / lbsPerTon;
  co2Reduction.textContent = co2Saved.toFixed(1) + " tons/year";
}

// Main update function
function update() {
  updateDisplayValues();
  calculateSavings();
}

// Add event listeners to sliders
mileageSlider.addEventListener("input", update);
gasPriceSlider.addEventListener("input", update);
electricPriceSlider.addEventListener("input", update);
mpgSlider.addEventListener("input", update);

// Initialize on page load
update();
// Show top manufacturers chart on initial load
showTopManufacturersChart();

  