var API = "https://restcountries.com/v3.1/all";

async function api() {
  var url = fetch(API);
  var get = await (await url).json();
  var parent = document.querySelector(".row");
  for (let i of get) {
      var data = document.createElement("div");
      data.classList.add("card");

      var lat = i.latlng[0];
      var lng = i.latlng[1];
      data.setAttribute("lat", lat);
      data.setAttribute("lng", lng);

      var country_name = document.createElement("h3");
      country_name.innerText = i.name.common;
      data.append(country_name);

      var country_flag = document.createElement("img");
      country_flag.setAttribute("src", i.flags.png);
      data.append(country_flag);

      var country_capital = document.createElement("p");
      country_capital.innerText = "Capital : " + i.capital[0];
      data.append(country_capital);

      var country_region = document.createElement("p");
      country_region.innerText = "Region : " + i.region;
      data.append(country_region);

      var country_code = document.createElement("p");
      country_code.innerText = "Contry Code : " + i.cca3;
      data.append(country_code);

      var click_btn = document.createElement("button");
      click_btn.setAttribute("onclick", "clicking(this)");
      click_btn.innerHTML = "Click for Weather";
      data.append(click_btn);
      parent.append(data);
  }
}
api();
