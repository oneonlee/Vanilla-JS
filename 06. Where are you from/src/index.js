// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

/*
algorithm note
1. HTML의 select에서 사용자가 나라 option을 선택한다.
2. 선택한 나라의 정보를 받아 local storage에 저장한다.
3. 페이지가 로딩 될 때 local storage에 정보를 받아 기본값으로 지정한다.
*/

var select = document.querySelector("select");

const COUNTRY_LS = "Country";

function setCountry() {
  var countryVal = select[select.selectedIndex].value;
  console.log(countryVal);
  localStorage.setItem(COUNTRY_LS, countryVal);
}

select.addEventListener("change", setCountry);

const userCountry = localStorage.getItem(COUNTRY_LS);
if (COUNTRY_LS !== null) {
  select.value = userCountry;
}
