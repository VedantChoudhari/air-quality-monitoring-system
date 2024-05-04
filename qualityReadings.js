function updateReadings(temp, hum, aq) {
  const dash_temp = document.getElementById('dash_temp');
  const dash_aq = document.getElementById('dash_aq');
  const dash_hum = document.getElementById('dash_hum');

  dash_temp.innerHTML = `${temp} °C`;
  dash_hum.innerHTML = `${hum} %`;
  dash_aq.innerHTML = `${aq} `;
  return true;
}

updateReadings(35.3, 87, 170);